const express = require('express');
const fs = require('fs').promises;
const logLineAsync = require('./utils').logLineAsync;
const path = require('path');
const FormData  = require('form-data');
const cors = require('cors');
const fetch = require("isomorphic-fetch");

const webServer = express();
const port = '4095';
const logFileName = path.join(__dirname, './../_server.log');
const requestListFile = path.join(__dirname, 'requestList.json');


webServer.use(express.urlencoded({extended:true}));
webServer.use(express.json());
webServer.use(cors()) ;
webServer.use(express.static(path.join(__dirname,'./static')));

function noEmptyValue(data) {
    let text = '';

    data.forEach( item => {

        if (!item.key.length || !item.value.length) {
            text = 'Заполните все значения';

            return text;
        }
    });
    return text;
}

function doubleHeaders(data) {
    const headers = data.map(item => item.key);

    headers.sort();

    const double = [];
    for (let i = 0; i < headers.length; i++) {
        if (headers[i] === headers[i+1]){
            double.push(headers[i])
        }
    }

    let textError = '';
    if (double.length > 0){
        textError = 'У Вас дублируются следующие заголовки: '+double.join(',')
    }
    return textError
}

function validation (data) {
    const errors = {};

    if (!data.url){
        errors.url = 'Укажите URL запроса';
    }
    const doubleHeadersErrors = doubleHeaders(data.headers);

    const paramsErrors = noEmptyValue(data.params);
    const headersErrors = noEmptyValue(data.headers);
    const bodyErrors = noEmptyValue(data.body);

   if ( paramsErrors.length) errors.params =  paramsErrors;
   if ( headersErrors.length || doubleHeadersErrors) errors.headers =  headersErrors+doubleHeadersErrors;

   if ( bodyErrors.length) errors.body =  bodyErrors;



   return errors
};

webServer.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './static/index.html'))
})

webServer.post('/save', async (req, res) => {
    logLineAsync(logFileName,`[${port}] `+"/save called");

    const errors = validation(req.body);
    let list=[];
    if (Object.keys(errors).length){
        res.send({errorCode: 1, errorDescription: errors})
    }

    else {
        const rawData = await fs.readFile(requestListFile);
        list = JSON.parse(rawData);
        list.push(req.body);
        await fs.writeFile(requestListFile, JSON.stringify(list)) ;
            console.log('JSON saved');

    }

    res.send({errorCode : 0, errorDescription:'', request: req.body})
});

webServer.post('/send', async (req, res) => {
    logLineAsync(logFileName,`[${port}] `+"/send called");

    const errors = validation(req.body);
    let list=[];
    let response = {};
    let responseHeaders = {};

    if (Object.keys(errors).length){
        res.send({errorCode: 1, errorDescription: errors})
    }

    else {
        try {
            const rawData = await fs.readFile(requestListFile);
            list = JSON.parse(rawData);
            list.push(req.body);
            await fs.writeFile(requestListFile, JSON.stringify(list)).then(() => {
                console.log('JSON saved');
            });
        }
        catch (e) {
            logLineAsync(logFileName,`[${port}] `+" cannot read file");
            console.log(`[${port}] `+" cannot read file");
            res.end()
        }
        let body = '';
        if (req.body.contentType === 'application/x-www-form-urlencoded'){
            req.body.body.forEach((item, index) => {
                body += `${index !== 0 ? '&' : ''}${item.key}=${encodeURIComponent(item.value)}`
            })
        }
        else if (req.body.contentType === 'multipart/form-data'){
            body = new FormData();
            req.body.body.forEach((item, index) => {
                body.append(item.key, item.value)
            })
        }
        else if (req.body.contentType === 'raw'){
            body = req.body.rawBody;
        }

        let {url} = req.body;
        const { headers, method, params} = req.body;

        if (params.length){
            url += '?';
            params.forEach((item, index) => {
                url += `${index !== 0 ? '&' : ''}${item.key}=${encodeURIComponent(item.value)}`
            })
        }
        try {

            const proxy_response = await fetch(url, {headers, method, body});

            const {status, statusText, headers: {_headers}} = proxy_response;
            responseHeaders = _headers;

            response = await proxy_response.text();
           /* console.log( 'proxy_response', response)*/
            res.send({errorCode: 0, errorDescription: '', request: req.body, response, headers: {status, statusText, ...responseHeaders}})
        }
        catch (e) {
            logLineAsync(logFileName,`[${port}] `+"/proxy_request is failed" + e);

            res.send({errorCode:2, errorDescription:  e.message})
        }
    }
   
});

webServer.get('/list', async(req, res) => {
    logLineAsync(logFileName,`[${port}] `+"/list called");
    console.log(`[${port}] `+"/list called", requestListFile)

    try {
        const rawData = await fs.readFile(requestListFile);
        const data = JSON.parse(rawData);
        res.send(data)
    }
    catch (e) {
        logLineAsync(logFileName,`[${port}] `+" cannot read file");
        console.log(`[${port}] `+" cannot read file" + e);
        res.end()
    }
});

webServer.post('/deleteItem', async (req, res) => {
    logLineAsync(logFileName,`[${port}] `+"/deleteIndex called");

    try {
        const rawData = await fs.readFile(requestListFile);
        let list = JSON.parse(rawData);
        list.splice(req.body.deleteIndex, 1);
        fs.writeFile(requestListFile, JSON.stringify(list), (err) => {
            if (err) throw err;
            logLineAsync(logFileName, `[${port}] ` + 'list after deleting saved!');
            console.log('list saved!')
        });

        res.send(list)
    } catch (e) {
        logLineAsync(logFileName,`[${port}] `+" cannot deleteItem");
        console.log(`[${port}] `+" cannot deleteItem");
        res.end()
    }
});

webServer.listen(port, () => console.log(`server is running on ${port} `));
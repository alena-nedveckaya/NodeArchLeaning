const express = require('express');
const fs = require('fs').promises;
const logLineAsync = require('./utils').logLineAsync;
const path = require('path');
const FormData  = require('form-data');
const cors = require('cors');

const webServer = express();
const port = '4095';
const logFileName = path.join(__dirname, '_server.log');
const requestListFile = path.join(__dirname, './../requestList.json');

webServer.use(express.urlencoded({extended:true}));
webServer.use(express.json());
webServer.use(cors()) ;// Use this after the variable declaration

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

function validation (data) {
    const errors = {};

    if (!data.url){
        errors.url = 'Укажите URL запроса';
    }

    const paramsErrors = noEmptyValue(data.params);
    const headersErrors = noEmptyValue(data.headers);
    const bodyErrors = noEmptyValue(data.body);

   if ( paramsErrors.length) errors.params =  paramsErrors;
   if ( headersErrors.length) errors.headers =  headersErrors;
   if ( bodyErrors.length) errors.body =  bodyErrors;


   return errors
};

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
        await fs.writeFile(requestListFile, JSON.stringify(list)) .then(() => {
            console.log('JSON saved');
        });

    }

    res.send({errorCode : 0, errorDescription:'', list})
});

webServer.post('/send', async (req, res) => {
    logLineAsync(logFileName,`[${port}] `+"/send called");

    res.setHeader("Access-Control-Allow-Origin","*"); // разрешаем запросы с любого origin, вместо * здесь может быть ОДИН origin (протокол+домен+порт)
    res.setHeader("Access-Control-Allow-Headers","Content-Type"); // разрешаем заголовок запроса Content-Type
    const errors = validation(req.body);

    if (Object.keys(errors).length){
        res.send({errorCode: 1, errorDescription: errors})
    }

    else {
        let body = '';
        if (req.body.contentType === 'application/x-www-form-urlencoded'){
            req.body.body.forEach((item, index) => {
                body += `${index !== 0 && '&'}${item.key}=${encodeURIComponent(item.value)}`
            })
        }
        else if (req.body.contentType === 'multipart/form-data'){
            body = new FormData(req.body.body)
        }

        console.log('body', body)
    }
    res.send({errorCode : 0, errorDescription:''})
});

webServer.get('/list', async(req, res) => {
    logLineAsync(logFileName,`[${port}] `+"/list called");



    const rawData = await fs.readFile(requestListFile);
    const data = JSON.parse(rawData);
    res.send(data)
});

webServer.post('/deleteItem', async (req, res) => {
    logLineAsync(logFileName,`[${port}] `+"/deleteIndex called");

    const rawData = await fs.readFile(requestListFile);
    let list = JSON.parse(rawData);
    list.splice(req.body.deleteIndex, 1);
    fs.writeFile(requestListFile, JSON.stringify(list), (err) => {
        if (err) throw err;
        logLineAsync(logFileName, `[${port}] ` + 'list after deleting saved!');
        console.log('list saved!')
    });

    res.send(list)
});

webServer.listen(port, () => console.log(`server is running on ${port} `))
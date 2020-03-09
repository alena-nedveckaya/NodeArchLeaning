
const express = require('express');
const app = express();
const fs = require('fs');
const fs2 = require('fs').promises;
const path = require('path');
const os = require('os');

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

const port = 3095;
const logFileName = path.join(__dirname, '_server.log');
const statisticsFile = path.join(__dirname, 'statistic.json');

function logLineSync(logFilePath,logLine) {
  const logDT=new Date();
  let time=logDT.toLocaleDateString()+" "+logDT.toLocaleTimeString();
  let fullLogLine=time+" "+logLine;

  console.log(fullLogLine); // выводим сообщение в консоль

  const logFd = fs.openSync(logFilePath, 'a+'); // и это же сообщение добавляем в лог-файл
  fs.writeSync(logFd, fullLogLine + os.EOL); // os.EOL - это символ конца строки, он разный для разных ОС
  fs.closeSync(logFd);
}



const options =  [
    {value:'Facebook', code: 'fb'},
  {value:'Вконтакте', code:'vk'},
  {value: 'Инстаграм', code:'inst'}
  ];

app.get('/', (req, res) => {
  res.sendFile('/public/index.html')
})

app.get('/variants', (req, res) => {

  res.setHeader("X-XSS-Protection", "0"); // добавляем в ответ специальный заголовок, чтобы отключить защитный механизм в Chrome
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  logLineSync(logFileName,`[${port}] `+'service /variants called');
  res.json({options});

});

app.post('/getXML', (req, res) => {
  logLineSync(logFileName,`[${port}] `+"/getXML called");

  res.setHeader("Content-Disposition",  'attachment; filename="results.xml"');
  res.setHeader("Content-type", "text/xml");

  const rawData = fs.readFileSync(statisticsFile);
  const statistics = JSON.parse(rawData);

  let xml = '';
  for(let key in statistics) {
    xml += `
            <${key}>
                <name>${statistics[key].name}</name>
                <code>${statistics[key].code}</code>
                <count>${statistics[key].count}</count>
            </${key}>
`
  };

  res.send(xml)
});

app.post('/getJSON', (req, res) => {
  logLineSync(logFileName,`[${port}] `+"/getJSON called");

  res.setHeader("Content-Disposition",  'attachment; filename="results.json"');
  res.setHeader("Content-type", "text/json");

  const rawData = fs.readFileSync(statisticsFile);

  res.send(rawData)
});

app.post('/getHTML', (req, res) => {
  logLineSync(logFileName,`[${port}] `+"/getHTML called");

  res.setHeader("Content-Disposition",  'attachment; filename="results.html"');
  res.setHeader("Content-type", "text/html");

  const rawData = fs.readFileSync(statisticsFile);
  const statistics = JSON.parse(rawData);

  let html = '';

  for (let key in statistics){
    html += `<div class="res">${statistics[key].name}: ${statistics[key].count}</div>`
  }

  res.send(html)
});

app.post('/vote', (req, res) => {

  const rawdata  = fs.readFileSync(statisticsFile);
  let statistics = JSON.parse(rawdata);

  const socialNetwork=req.body.social;

  statistics[socialNetwork].count += 1;
  logLineSync(logFileName,`[${port}] `+'service /vote called');

  fs.writeFile('./statistic.json', JSON.stringify(statistics), (err) => {

    if (err) throw err;
    logLineSync(logFileName,`[${port}] `+'statistics saved!');
    console.log('statistics saved!');
  });

  res.redirect('/results.html')
});



app.get('/stat', (req, res) => {

  res.setHeader('Cache-Controls', 'no-cache');
  res.setHeader('Expires', '0');

  logLineSync(logFileName,`[${port}] `+'service /stat called');

  const rawdata  = fs.readFileSync(statisticsFile);
  let statistics = JSON.parse(rawdata);
  res.json(statistics);

});

app.listen(port, () => console.log(`server is running on ${port} `));


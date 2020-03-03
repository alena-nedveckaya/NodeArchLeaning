
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const os = require('os');

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

const port = 3095;
const logFileName = path.join(__dirname, '_server.log');

function logLineSync(logFilePath,logLine) {
  const logDT=new Date();
  let time=logDT.toLocaleDateString()+" "+logDT.toLocaleTimeString();
  let fullLogLine=time+" "+logLine;

  console.log(fullLogLine); // выводим сообщение в консоль

  const logFd = fs.openSync(logFilePath, 'a+'); // и это же сообщение добавляем в лог-файл
  fs.writeSync(logFd, fullLogLine + os.EOL); // os.EOL - это символ конца строки, он разный для разных ОС
  fs.closeSync(logFd);
}

const statistics = {
      fb : {name: 'Facebook', code: 'fb',  count:0},
      vk: {name:'Вконтакте', code: 'vk', count: 0},
      inst: {name:'Инстаграм', code: 'inst' ,count:0}
};

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

app.post('/vote', (req, res) => {

  const socialNetwork=req.body.social;
  statistics[socialNetwork].count += 1;
  logLineSync(logFileName,`[${port}] `+'service /vote called');

  res.redirect('/results.html')
});



app.get('/stat', (req, res) => {

  res.setHeader("X-XSS-Protection", "0"); // добавляем в ответ специальный заголовок, чтобы отключить защитный механизм в Chrome
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");

  logLineSync(logFileName,`[${port}] `+'service /stat called');
  res.json(statistics);

});

app.listen(port, () => console.log(`server is running on ${port} `));


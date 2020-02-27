const express = require('express');

const app = express();

const errorStyle = `color:red;margin-left:10px`;
const wrapperStyle = `margin-bottom: 10px;display:flex`;
const labelStyle = `display:flex;width:300px;justify-content:space-between`;

const formBody = [
        `<form method="GET"  action="/form">`,
        `<div style="${wrapperStyle}">`,
        `<label style="${labelStyle}"><span>Ваше имя:</span> <input type="text" id="name" name="name" value=""/></label>`,
        `</div>`,
        `<div style="${wrapperStyle}">`,
        `<label style="${labelStyle}">Ваше возраст: <input type="text" id="name" name="age" value=""/></label>`,
        `</div> `,
        `<input type=submit value=\"Подтвердить\" /> </form>`
];


function validate (params) {
    const {name, age} = params;
    const formBodyWithErrors = [...formBody];
    let isValid = true;
    formBodyWithErrors[2] = formBody[2].replace(/value=""/, `value ="${name}"`);
    formBodyWithErrors[5] = formBody[5].replace(/value=""/, `value = "${age}"`);

    if (name.length === 0){

        formBodyWithErrors[2] = formBodyWithErrors[2]+`<span style=${errorStyle}>Введите имя</span>`;
        isValid = false;
    }
    if (name.length < 3) {
        formBodyWithErrors[2] = formBodyWithErrors[2] + `<span style=${errorStyle}>Недостаточная длина имени</span>`;
        isValid = false;
    }
    if (age.length === 0) {

        formBodyWithErrors[5] = formBodyWithErrors[5] + `<span style=${errorStyle}>Введите ваш возраст</span>`;
        isValid = false;
    }
    if(!/[0-9]+$/.test(age)) {
        formBodyWithErrors[5] = formBodyWithErrors[5] + `<span style=${errorStyle}>Введите корректный возраст</span>`;
        isValid = false;
    }
    return {isValid, body:formBodyWithErrors};
}

app.get('/', (req, res) => {
    res.send(formBody.join(''))
});

app.get('/form', (req, res) => {
const name = req.query.name;
const age = req.query.age;

    const valid = validate(req.query);
    if (!valid.isValid) {
        res.send(valid.body.join(''))
    }
    else
        res.send(`
                <div>Форма успешно заполнена:</div>
                <div>Ваше имя: `+name+`</div>
                <div>Ваш возраст: `+age+`</div>
            `)
    });

app.use(express.static('public'));
app.listen(3000, () => {
    console.log('the server in running')
});


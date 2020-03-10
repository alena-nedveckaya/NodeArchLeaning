
document.addEventListener("DOMContentLoaded", getResults);

async function getResults() {
    const response =  await fetch('/stat ' );

    const data = await response.json();
    let allVotes = 0;
    let result  = '';

    for (let key in data){
        allVotes += data[key].count;
        result += `<div class="res">${data[key].name}: ${data[key].count}</div>`
    }

    result += `<div class="allVotes">Всего проголосовало: ${allVotes}</div>`;

    const div = document.createElement('div');
    div.innerHTML = result;

    const wrapper = document.querySelector('.stat_wrapper');
    wrapper.appendChild(div)
}

const button_wrap = document.querySelector('.download_wrap');
const getStatistics = async(e) => {
    const button = e.target;
    const format = button.getAttribute('data-format');
    const headers = {'Accept': `text/${format}`};

    console.log(button, format);
    let res =  await fetch('/getStat', {
        method: 'GET',
        headers
    });

    res = await res.text();
    console.log('res', res)

    let textArea = document.querySelector('.textarea');
    if (textArea)
        textArea.value = res;
   else{
        textArea = `<textarea class="textarea">${res}</textarea>`;
        document.querySelector('.viewRes').innerHTML = textArea;

    }

};

button_wrap.addEventListener('click', getStatistics);


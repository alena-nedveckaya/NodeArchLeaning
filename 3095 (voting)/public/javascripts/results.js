
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


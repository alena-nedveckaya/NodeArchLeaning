
document.addEventListener("DOMContentLoaded", getOptions);

async function getOptions() {
    const response = await fetch('/variants ', );

    const data = await response.json();
    const options = data.options;

    const wrapper = document.querySelector('.options_wrapper');
    let result = '';

    options.forEach(option => {
        result += `<div class="option">
               <label>
                    <input type="radio" value=${option.code} name="social" id=${option.code}/>
                      ${option.value}
              </label>
            </div>
`
    });

    const div = document.createElement('div');
    div.className = 'options';
    div.innerHTML = result;
    wrapper.appendChild(div);
}
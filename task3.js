const input = document.querySelector("input");
const button = document.querySelector("button");

function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
            callback(result);
            }
        }
        };
        
        xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
        };
        
        xhr.send();
    };

const resultsBox = document.querySelector('.results')

function displayResult(apiData){
    let cards = '';
    apiData.forEach(item => {
        const cardBlock =`<div class="card">
        <img
            src="${item.url}"
            class="card-image"
        />
        <p>${item.title}</p>
        </div>
        `;
        cards = cards + cardBlock;
    });
    resultsBox.innerHTML = cards;
}

button.addEventListener('click', () =>{
    const value = document.querySelector("input").value;
    if (value <= 10 && value > 1) {
        useRequest("https://jsonplaceholder.typicode.com/photos?_limit="+ value, displayResult)
    } else {
        alert('Число вне диапазона от 1 до 10')
}})
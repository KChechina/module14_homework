const button = document.querySelector("button");

button.addEventListener('click', () =>{
    const page = document.querySelector(".page").value;
    const limit = document.querySelector(".limit").value;
    if ((page < 1|| page >10)&&(limit <1 || limit > 10)){
        alert('Номер страницы и лимит вне диапазона от 1 до 10')
    } else if (page < 1|| page >10 || page === NaN) {
        alert('Номер страницы вне диапазона от 1 до 10')
    } else if (limit <1 || limit > 10|| limit === NaN){
        alert('Лимит вне диапазона от 1 до 10')
    } else if ((page >=1 && page <=10)&&(limit>=1 && limit<=10)) {
            fetchData(page, limit, showResult)
    }
})

async function fetchData(page, limit, callback){
    await fetch("https://jsonplaceholder.typicode.com/photos?_page="+page+"&_limit="+limit)
    .then ((Response) => {
        return Response.json();
    })
        .then ((data) => {
            callback(data);
        })
    .catch (() => {console.log('error')});
}

function showResult(apiData) {
    const resultsBox = document.querySelector('.results')   
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

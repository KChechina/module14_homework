const button = document.querySelector("button");

button.addEventListener('click', () =>{
    const width = document.querySelector(".width").value;
    const height = document.querySelector(".height").value;
    if ((width >=100 && width <=300)&&(height=>100 && height<=300)) {
        fetchData(width, height, showResult)
    } else {
        alert('Одно из чисел вне диапазона от 100 до 300')
}
})

async function fetchData(width, height, callback){
    await fetch("https://dummyimage.com/"+width+"x"+height)
    .then ((Response) => {
        callback(Response)
    })
    .catch (() => {console.log('error')});
}

function showResult(data) {
    const resultsBox = document.querySelector('.results')   
    const cardBlock =`<div class="card">
    <img
    src="${data.url}"
>
</div>
`;
resultsBox.innerHTML = cardBlock;
}

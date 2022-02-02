const jTitle = document.querySelector('.quotes__title')
const jText = document.querySelector('.quotes__text')
const jButton = document.querySelector('.quotes__button')

const rand = (max) => {
    return Math.trunc(Math.random() * (max - 1) + 1)
}

const randomQuote = (data) => {
    let x = rand(data.length)
    jTitle.textContent = data[x]['author']
    jText.textContent = data[x]['text']
}

async function getData() {
    if (jButton.textContent.includes('ru')){
    const quotes = 'others/quotes_ru.json';
    const res = await fetch(quotes);
    const data = await res.json();
    randomQuote(data)
    }else if (jButton.textContent.includes('eng')){
    const quotes = 'others/quotes_eng.json';
    const res = await fetch(quotes);
    const data = await res.json();
    randomQuote(data)
    }
}
getData();

jButton.addEventListener('click', getData)


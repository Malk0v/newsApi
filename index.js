const API_KEY = '1207c88ea12a40948c6a5f2f9fe75304';

const input = document.querySelector('.input-js');
const start = document.querySelector('.start-js');

input.addEventListener('submit', onSearch);
start.addEventListener('click',onSearch);

function onSearch(e) {
    e.preventDefault();
    
    const SearchNews = input.value;

    fetch(
        `https://newsapi.org/v2/everything?q=${SearchNews}&apiKey=${API_KEY}`
    ).then(response => response.json())
      .then(data => {
        const headlines = data.articles
          .map(article => {
            return `<div class="news">
        <h2>Автор - ${article.author}</h2> 
        <li>Название статьи <hr> ${article.title}</li> 
        <li>${article.description}</li>
        </div>`;
          })
          .join('');
        document.querySelector(
          '.c'
        ).innerHTML = `<ul>${headlines}</ul>`;
      });
};
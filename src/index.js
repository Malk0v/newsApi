// fetch(
//   'https://newsapi.org/v2/top-headlines?country=us&apiKey=1207c88ea12a40948c6a5f2f9fe75304'
// )
//   .then(response => response.json())
//   .then(data => {
//     const headlines = data.articles
//       .map(article => {
//         return `<li>${article.title}</li>`;
//       })
//       .join('');
//     document.querySelector(
//       '.c'
//     ).innerHTML = `<ul>${headlines}</ul>`;
//   });

fetch(
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=1207c88ea12a40948c6a5f2f9fe75304'
)
  .then(response => response.json())
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

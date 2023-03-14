const API_KEY = '1207c88ea12a40948c6a5f2f9fe75304';
const BASE_URL = 'https://newsapi.org/v2';
const options = {
    headers: {
        Authorization: API_KEY,
    },
};

export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchArticles() {
        
        const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;
    
        // return fetch(url, options)
            return fetch(
                `https://newsapi.org/v2/everything?q=cat&apiKey=${API_KEY}`
            ).then(response => response.json()).then(data => {
                this.incrementPage();

                return data.articles;
                });
    };
    
    incrementPage() {
        this.page += 1;
    };

    resetPage() {
        this.page = 1;
    };

    get query() {
        return this.searchQuery;
    };

    set query(newQuery) {
        this.searchQuery = newQuery
    };
}
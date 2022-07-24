const formSearch = document.querySelector(".form")
const input = document.querySelector(".form-control")
const newsList = document.querySelector(".news-list")

formSearch.addEventListener("submit", retrieve);

function retrieve(e){

    newsList.innerHTML = '';

    e.preventDefault();

    const apiKey = "Your API_KEY Here"; // replace with your api key
    let query = input.value;

    let url = `https://gnews.io/api/v4/search?q=${query}&token=${apiKey}&lang=en`

    fetch(url).then((res)=>{
        return res.json()
    }).then((data)=>{
        data.articles.forEach(article=>{
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.setAttribute('href', article.url);
            a.textContent = article.title;
            li.appendChild(a);
            newsList.appendChild(li);
        })
    })
}
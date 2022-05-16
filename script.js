let apikey = "e124fe2b549a4ac087cc76992bfab038";
// grab news container
let newsdom = document.getElementById("news")


// create ajax  get request
let xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        newshtml = "";
        let i = 0;
        for (news in articles) {
            console.log(articles[news]);
            let populatenews = `<div class="accordion-item">
                                <h2 class="accordion-header" id="flush-heading${i}">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${i}" aria-expanded="false" aria-controls="flush-collapse${i}">
                                <h4>${articles[news].title}</h4>
                                </button>
                                </h2>
                                <div id="flush-collapse${i}" class="accordion-collapse collapse" aria-labelledby="flush-heading${i}" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">${articles[news].description}
                                <div>For detailed article <a href="${articles[news].url}" target="_blank">click here</a></div>
                                </div>
                            </div>`;
            newshtml += populatenews;
            i++;
        }
        newsdom.innerHTML = newshtml;
        // console.log(articles);
    }
    else (
        console.log("error")
    )
}

xhr.send()
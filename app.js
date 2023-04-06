
const container = document.querySelector('.display');


function getTodos (){

fetch ('https://jsonplaceholder.typicode.com/todos')
.then((response) => response.json())
.then((data)=>{

    let newCards = "";

    for(i=0;i<=4;i++){
        console.log(data[i])

        let object = data[i];

        newCards += `
        <div class="card">
                    
                    <h3>${object.title}</h3>
                    <p><b>ID : </b>${object.id}</p>
                    <p><b>Completed : </b> ${object.completed}</p>
                    
                </div>
            `;

        

    }
    container.innerHTML = newCards;
    

}
)

.catch(err => console.log(err));

}

getTodos();



////////////////////////////////////////////
/*fetch("https://newsapi.org/v2/everything" +
    `?q=${searchIn}` +
    `&language=${language}` +
    `&pageSize=${pageSize}` +
    `&apiKey=${APIKEY}`
    )
    .then(res => res.json())
    .then(data => {
        let news = data.articles;
        let newCards = "";
        news.forEach((item) => {
            let date = new Date(item.publishedAt);
            newCards += `
                <div class="card">
                    <img width="100%" src="${item.urlToImage ? item.urlToImage : "./assets/noimage.jpg"}" />
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <p><b>Date:</b> ${date.toDateString()}</p>
                    <a id="goto-btn" href="${item.url}">Go to News</a>
                </div>
            `;
        })
        container.innerHTML = newCards;
    })
    .catch(err => console.log(err));
}
*/


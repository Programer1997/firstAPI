
const container = document.querySelector('.display');


function getListElements (){

fetch ('https://jsonplaceholder.typicode.com/todos')
.then((response) => response.json())
.then((data)=>{

    let newCards = "";

    for(i=0;i<=9;i++){
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

getListElements();






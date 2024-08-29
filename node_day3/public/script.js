

function render(data){
    
   
    
    data.forEach(e=>{
        
        let parent = document.querySelector('.parentOfCards');
        let card = document.createElement('div');
        card.classList.add('card','mycard');
        let img = document.createElement('img');
        img.classList.add('card-img-top')
        card.appendChild(img);
        img.src = e.image;
        let cardBody = document.createElement('div');
        card.appendChild(cardBody);
        cardBody.classList.add('card-body')
        let productName = document.createElement('h5');
        productName.classList.add('card-title');
        cardBody.appendChild(productName);
        productName.textContent = e.name;
        let productPrice = document.createElement('h5');
        productPrice.classList.add('card-title','font-weight-bold');
        cardBody.appendChild(productPrice);
        productPrice.textContent = 'Price - $' + e.price;
        parent.appendChild(card);

    })


}

const data = [];
fetch('http://localhost:3020/products').then(e=>{
    return e.json();       
}).then(resp=>{
    resp.forEach(element => {
        data.push(element);
    });
    render(data);  
    
}).catch(e=>console.log(e));




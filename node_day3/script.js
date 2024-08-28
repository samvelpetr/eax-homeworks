
const inputs = document.querySelectorAll('input');
const button1 =  document.querySelector('.submit');
const button2 =  document.querySelector('.see');

button2.addEventListener('click', function(e){
    e.preventDefault();
    fetch('http://localhost:4000/prod').then(e=>{
        return e.json()        
    }).then(resp=>{
        console.log(resp);
        
    })
    .catch(e=>{
        console.log(e);
    })
})
button1.addEventListener("click",(e)=>{
    e.preventDefault();
    let dataObj = {
        name:'',
        price:''
    };
    dataObj.name = inputs[0].value;
    dataObj.price = inputs[1].value;
    fetch('http://localhost:4000/prod',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(dataObj)   
    }).then(e=>{
        console.log("successfuly posted to db");
    }).catch(e=>{
        console.log(e);
    })

})
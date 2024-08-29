
// const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const button1 =  document.querySelector('.submit');

button1.addEventListener("click",(e)=>{
    e.preventDefault();
    // let dataObj = {
    //     name:'',
    //     price:'',
    // };
    const formData = new FormData(form);

    fetch('http://localhost:3020/products',{
        method:"POST",
        body:formData 
    }).then(e=>{
        return e.text();
    }).then(e=>{
        console.log("successfuly posted to db:",e);
    }).catch(e=>{
        console.log(e);
    })
    form.reset();
})
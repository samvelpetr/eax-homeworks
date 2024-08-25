const express =  require('express');

const app = express();

app.get('/test',function (req,res){
    console.log(req.body);
    res.send("test recived");
})

app.listen(4400);
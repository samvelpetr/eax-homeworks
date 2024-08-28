const express = require('express');
const bodyParser = require('body-parser');
const {MongoClient} = require('mongodb');
const cors  =  require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const client = new MongoClient('mongodb://localhost:27017');

client.connect();

const db = client.db('samvel');



app.post('/products', async (req,res)=>{
    const collection = db.collection('products');
    const {name , price} = req.body;
    console.log({
        name,
        price
    });
    collection.insertOne({
        name,
        price
    }).then((e)=>{
        console.log("successfuly inserted to DB");
        
    }).catch(e=>{
        console.log(e);
        
    })
    res.send("Data is inserted to DB")
})

app.get('/products',async (req,res)=>{
    const collection = db.collection('products');
    let data =  await collection.find({}).toArray();
    console.log("data is recived from DB ");
    console.log(data);
    
    res.send(JSON.stringify(data));
})



app.listen(3020,()=>{
    console.log(`Server running in port 3020`);
    
});

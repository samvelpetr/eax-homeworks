const express = require('express');
const {MongoClient} = require('mongodb')

const app = express();
const client = new MongoClient("mongodb://localhost:27017");
client.connect();
let db;
app.get('/product', async (req,res)=>{
    db = client.db('example');
    let collection = db.collection('product');
    let data = await collection.findOne();
    res.send(data);
})



app.listen(3000);
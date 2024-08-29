const express = require('express');
const bodyParser = require('body-parser');
const {MongoClient} = require('mongodb');
const cors  =  require('cors');
const path = require('path');
const multer = require('multer');
const app = express();

const client = new MongoClient('mongodb://localhost:27017');
app.use(express.static(path.join(__dirname,'public')));
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

client.connect().then(e=>{
    
})
.catch(e=>console.log(e));

const db = client.db('samvel');
// const upload = multer({ dest: 'public/images/' }); 
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/products', upload.single('image'), async (req,res)=>{
    const collection = db.collection('products');
    const {name , price} = req.body;

    if (!req.file) {
        return res.status(400).send("No file uploaded.");
    }

    const base64Image = req.file.buffer.toString('base64');
    const image = `data:${req.file.mimetype};base64,${base64Image}`;
    
    await collection.insertOne({
        name,
        price,
        image
    })
    
    console.log("successfuly inserted to DB");
        
    res.send("Data is inserted to DB")
})
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
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

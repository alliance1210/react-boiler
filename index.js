const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Pradei:Password@321@cluster0.5gxxn.mongodb.net/<dbname>?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true  }).then(()=> console.log('Db connected'))
.catch(err => console.error(err));

app.get('/', (req, res)=>{
    res.send('Hello world!!')
});





app.listen(5000);
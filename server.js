const express = require('express')
const app = express()
const port = 8000
const path = require('path')

app.get('/',(req,res) => {
    res.sendFile('index.html',{root:path.join(__dirname,'./')});
});
app.get('/javascript/three.js',(req,res) => {
    res.sendFile('javascript/three.js',{root:path.join(__dirname,'./')});
});
app.get('/javascript/javascript.js',(req,res) => {
    res.sendFile('javascript/javascript.js',{root:path.join(__dirname,'./')});
});


app.get('/image2',(req,res) => {
    res.sendFile('images/images(2).jpg',{root:path.join(__dirname,'./')});
});
app.get('/image1',(req,res) => {
    res.sendFile('images/images(1).jpg',{root:path.join(__dirname,'./')});
});
app.get('/image7',(req,res) => {
    res.sendFile('images/images(7).jpg',{root:path.join(__dirname,'./')});
});




app.get('/page1',(req,res) => {
    res.sendFile('page1.html',{root:path.join(__dirname,'./')});
});
app.get('/javascript/page1.js',(req,res) => {
    res.sendFile('javascript/page1.js',{root:path.join(__dirname,'./')});
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
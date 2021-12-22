const express = require('express');
const app = express();
const cmodel = require('./models/data');
const pmodel = require('./models/post');
const mongoose = require('mongoose');

app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/test');

app.post('/', function(req, res){
    console.log(req.body);
    var Model = new pmodel();
    Model.title=req.body.title;
    Model.user=req.body.user;
    var CModel = new cmodel();
    CModel.text=req.body.text;
    CModel.location=req.body.location;
    CModel.save();
    Model.comments=CModel;
    Model.save()
        .then((response) =>{
            res.send(response);
        })
        .catch((err) =>{
            res.send(err);
        })
});



app.post('/find',(req,res) =>{
    console.log("hehe");
    pmodel.find({"comments.location": req.body.location},(err, data) =>{
        console.log(data);
        res.send(data);
    })

});

app.get('/show', (req, res) => {
    pmodel.find().populate().exec((err, data) =>{
        console.log(data);
        res.send(data);
    })
})
app.listen(3000);

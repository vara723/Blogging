const express=require('express')
const mysql=require('mysql2')
const cors=require('cors')
const app=express()
const db=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'root',
        database:'blogging'
    }
)
db.connect(
    function(err){
        if(err){
            console.log("connection unsuc");
            console.log(db.sqlMessage);
        }
        else{
            console.log("connection successful");
        }
    }
)
app.get('/get-Post',function(req,res){
    const getQuery='SELECT * FROM Post'
    db.query(getQuery,function(err,result){
        if(err){
            res.status(500).send({'text':'error in getting the data'});
            console.log(err.sqlMessage);
            return;
        }
        else{
            res.json(result);
        }
    })
})
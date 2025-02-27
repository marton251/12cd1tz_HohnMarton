const express =require("express")
const app=express
const bodyparser=require("body-parser")
const cors =require("cors")
const mysql =require("mysql")

app.use(corse())

app.use(bodyparser.json())

const db=mysql.createConnection
    {
        user:"root"
        host:"localhost"
        port:3307
        database:"teliolimpia"
    }
app.get("/",(req,res) =>{
    res.send("müködik a szerver.")
})


app.listen(3000, () => {
    console.log("A téli olimpia szervere a 3000 porton fut")
})
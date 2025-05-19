require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/',(req,res) => {
    res.send("Welcome to Gaurav");
})

app.get('/Facebook',(req,res) => {
    res.send("Welcome to facebook");
})

app.get('/login',(req,res) => {
    res.send("Welcome to Login");
})

app.get('/signup',(req,res) => {
    res.send("Welcome to SignUp");
})
app.listen(process.env.PORT, () =>{
    console.log(`Example is Listening on port ${port}`)
})
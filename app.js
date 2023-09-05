const express = require('express')
const app = express()

app.set('view engine','ejs')

app.get('/billal',(req,res)=>{
    res.render('index',{titleName:"Mr tech..."})
})
app.get('/',(req,res)=>{
    res.send("Billal Hossain home route")
})

app.listen(process.env.PORT)
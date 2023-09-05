const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Billal Hossain home route")
})

app.listen(process.env.PORT)
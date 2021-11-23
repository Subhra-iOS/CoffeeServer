const express = require('express')
const app = express()
const port = 6677
//const admin_route = require('./routes/admin-route')

app.get("/",(req,res)=>{
    res.json({'err':0,'data':'Api Work'})
})
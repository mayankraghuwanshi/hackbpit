const express = require('express')
const app = express()
const PORT = process.env.PORT || 3500
const socket  = require('socket.io')
const {SET_USER} = require('../src/events')
const server = app.listen(PORT , ()=>{
    console.log(`server is listening at port ${PORT}`)
})









const io = socket(server)
io.on('connection' , (socket)=>{
    console.log(socket.id)
    socket.on(SET_USER , (user)=>{
        console.log(user)
    })
})

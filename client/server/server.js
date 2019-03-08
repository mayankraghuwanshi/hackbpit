const express = require('express')
const app = express()
const PORT = process.env.PORT || 3500
const socket  = require('socket.io')
const {SET_USER , JOIN_GROUP} = require('../src/events')
const server = app.listen(PORT , ()=>{
    console.log(`server is listening at port ${PORT}`)
})



let users = []
let groups = [{
    name : "Only place to learn",
    id : 123,
    users : []
}]




const io = socket(server)
io.on('connection' , (socket)=>{
    socket.on(SET_USER , (user)=>{
        users.push(user)
        console.log(`new user is logged ${user.name}`)
    })

    //Join the group
    socket.on(JOIN_GROUP , ({groupId , user})=>{
        groups.find(group=>{
            if(group.id===groupId){
                group.users.push(user)
            }
        })
        console.log(`New user name ${user.name} joined the group ${groupId}`)
    })

})

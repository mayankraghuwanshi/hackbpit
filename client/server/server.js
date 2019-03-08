const express = require('express')
const app = express()
const PORT = process.env.PORT || 3500
const socket  = require('socket.io')
const {SET_USER , JOIN_GROUP , UPDATE_SCORE , UPDATE_USERS} = require('../src/events')
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
        io.socket.emit(UPDATE_USERS , users)
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

    socket.on(UPDATE_SCORE , ({groupId , userId , score})=>{
                groups.find(group=>{
                    if(group.id===groupId){
                        group.users.find(user=>{
                            if(user.id===userId){
                                user.score = score
                            }
                        })
                    }
                })
        console.log(groups)

    })

})

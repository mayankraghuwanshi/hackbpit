const express = require('express')
const app = express()
const PORT = process.env.PORT || 3500
const socket  = require('socket.io')
const {SET_USER , JOIN_GROUP , UPDATE_SCORE , UPDATE_USERS} = require('../src/events')
const server = app.listen(PORT , ()=>{
    console.log(`server is listening at port ${PORT}`)
})


function update(group , gid , uid , score) {
    for(let i=0;i<group.length;i++){
        if(`${group[i].id}`===`${gid}`){
            console.log("grp found")
            for(let j=0;j<group[i].users.length;j++){
                if(group[i].users[j].id===uid){
                    console.log("score update")
                    group[i].users[j].score = score
                }
            }
        }
    }
}


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
        io.sockets.emit(UPDATE_USERS , users)
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
        console.log(score)
                update(groups,groupId,userId,score)


    })

})

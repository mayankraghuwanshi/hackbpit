let grp = [{
    name : "first",
    id : 12,
    users : [
        {name : "mayank",
        score : 12,
        id : 123 },
        {name : "raghu",
        score : 33,
        id : 334 }
    ]
}]

function update(group , gid , uid , score) {
    for(let i=0;i<group.length;i++){
        if(group[i].id===gid){
            for(let j=0;j<group[i].users.length;j++){
                if(group[i].users[j].id===uid){
                    group[i].users[j].score = score
                }
            }
        }
    }
}

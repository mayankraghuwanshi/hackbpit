const easyQuestions = require('./easyQuestions')
const mediumQuestions = require('./mediumQuestions')
const hardQuestions = require('./hardQuestions')




function getTimeDif(d1,d2) {
    let s1 = d1.getSeconds()*1000
    let s2 = d2.getSeconds()*1000
    let m1 = d1.getMilliseconds()
    let m2 = d2.getMilliseconds()
    let t1 = s1+m1
    let t2 = s2+m2

    return (t2-t1)/1000
}

function getData(time){

    if(time===0){
        return {
            content: "Who is the father of computing ?",
            options :["Bill Gates","Dennis Ritchie","Bjarne Stroustrup","Charles Babbage"],
            correctAns : 3,
            step : 1,
            type : "easy"
        }
    }
    else if(time>=1 && time<=3){
        return hardQuestions.pop()
    }
    else if(time<5){
        return mediumQuestions.pop()
    }else{
        return easyQuestions.pop()
    }
}

module.exports = {
    getTimeDif,
    getData
}
let mediumQuestion = [{
    content: "Who is prime minister",
    options :["Ravi","Modi","Raghu","aman"],
    correctAns : 1,
    step : 2,
    type : "medium"
},{
    content: "Who is the former minister",
    options :["Ravi","Modi","Raghu","aman"],
    correctAns : 2,
    step : 2,
    type : "medium"
}
]

let easeQuestion = [{
    content: "2+2=",
    options :["5","7","4","5"],
    correctAns : 2,
    step : 1,
    type : "easy"
},{
    content: "2*2",
    options :["4","9","4.5","100"],
    correctAns : 0,
    step : 1,
    type : "easy"
}]

let hardQuestion = [{
    content: "Who is the CEO of Facebook ?",
    options :["mark zakar","zakir nayak","azahar khan","zalima"],
    correctAns : 0,
    step : 1,
    type : "hard"
}]



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
            content: "Who is prime minister",
            options :["Ravi","Modi","Raghu","aman"],
            correctAns : 1,
            step : 1,
            type : "easy"
        }
    }
    else if(time>=1 && time<=3){
        return hardQuestion.pop()
    }
    else if(time<5){
        return mediumQuestion.pop()
    }else{
        return easeQuestion.pop()
    }
}

module.exports = {
    getTimeDif,
    getData
}
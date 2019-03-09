const easyQuestions = [{
    content : "Area of circle",
    options : ["pi*r^2" , "2*pi" , "pi*r^3" , "pi"],
    correctAns : 0,
    step : 1,
    type : "easy"
},
    {
        content : "Formula to find out circumference of a circle",
        options : ["2*pi*r" , "2*pi" , "pi*r^3" , "pi"],
        correctAns : 0,
        step : 1,
        type : "easy"
    },
    {
        content : "Diameter of a circle is equals to",
        options : ["r^2" , "2^r" , "2*r" , "r/2"],
        correctAns : 2,
        step : 1,
        type : "easy"
    },
    {
        content : "How many sides does a triangle have ?",
        options : ["12" , "1" , "3.14" , "3"],
        correctAns : 3,
        step : 1,
        type : "easy"
    },
    {
        content : "Area of a square having side length = a",
        options : ["a^2" , "a^1" , "2^a" , "3"],
        correctAns : 0,
        step : 1,
        type : "easy"
    },
]


const mediumQuestions = [
    {
        content : "A line which connects any two points on a circle is known as",
        options : ["Perimeter" , "diameter" , "chord" , "radius"],
        correctAns : 2,
        step : 2,
        type : "easy"
    },
    {
        content : "A line going through midpoint from one side of circle to other is  ",
        options : ["angle" , "area" , "radius" , "diameter"],
        correctAns : 3,
        step : 2,
        type : "easy"
    },
    {
        content : "If circumference of circle is 64π then area of circle (in terms of π) is",
        options : ["664 cm²" , "1024π cm²" , "1050π cm²" , "512π cm²"],
        correctAns : 1,
        step : 2,
        type : "easy"
    },
    {
        content : "If circumference of circle is 82π then value of 'r' is",
        options : ["41 cm" , "82 cm" , "27.34 cm" , "20 cm"],
        correctAns : 0,
        step : 2,
        type : "easy"
    },
    {
        content : " The angle subtended by the diameter of a semicircle is:",
        options : ["45" , "180" , "90" , "60"],
        correctAns : 2,
        step : 2,
        type : "easy"
    },
]
const hardQuestions = [
    {
        content : "Name the center of this circle.",
        url : "https://www.mathgoodies.com/sites/default/files/lesson_images/circle_examples.gif",
        options : ["a" , "b" , "c" , "e"],
        correctAns : 1,
        step : 2,
        type : "hard"
    },
    {
        content : "Name two chords on this circle that are not diameters.",
        url : "https://www.mathgoodies.com/sites/default/files/lesson_images/circle_examples.gif",
        options : ["DE and GH" , "BH" , "YU" , "CC"],
        correctAns : 0,
        step : 2,
        type : "hard"
    },
    {
        content : "Which of the following is a radius?",
        url : "https://www.mathgoodies.com/sites/default/files/lesson_images/circle_exercises.gif",
        options : ["PQ" , "QR" , "QS" , "All"],
        correctAns : 3,
        step : 2,
        type : "hard"
    },
    {
        content : "Which of the following is a radius? fake",
        url : "https://www.mathgoodies.com/sites/default/files/lesson_images/circle_exercises.gif",
        options : ["PQ" , "QR" , "QS" , "All"],
        correctAns : 3,
        step : 2,
        type : "hard"
    },
    {
        content : "Which of the following is a radius? fake",
        url : "https://www.mathgoodies.com/sites/default/files/lesson_images/circle_exercises.gif",
        options : ["PQ" , "QR" , "QS" , "All"],
        correctAns : 3,
        step : 2,
        type : "hard"
    },
]




function getTimeDif(d1,d2) {
    let s1 = d1.getSeconds()*1000
    let s2 = d2.getSeconds()*1000
    let m1 = d1.getMilliseconds()
    let m2 = d2.getMilliseconds()
    let t1 = s1+m1
    let t2 = s2+m2

    return (t2-t1)/1000
}

function getData2(time){

    if(time===0){
        return {
            content: "Which one is used in thumbnail of this video ?",
            options :["Rectangle","Circle","Triangle","Line"],
            correctAns : 1,
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
    getData2
}
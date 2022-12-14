const { app } = require("electron");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

var mtrx1 = document.getElementsByClassName("onex");
var mtrx2 = document.getElementsByClassName("twox");
var mtrx3 = document.getElementsByClassName("threex");

var mtrxnums1 = document.getElementsByClassName("mtrxnum1");
var mtrxnums2 = document.getElementsByClassName("mtrxnum2");
var mtrxnums3 = document.getElementsByClassName("mtrxnum3");

var cal = document.getElementById("calculate");
var clear = document.getElementById("clear");

var check = document.getElementsByName("order");

var result = document.getElementById("result");


//clear function and button

function clearFunction(){
    for(var i = 0; i < mtrxnums1.length; i++){
        mtrxnums1[i].value = "";
        mtrxnums1[i].style.width = "50px";
        sizemultiplier = 0;
        newsize = 0;
    };
    for(i = 0; i < mtrxnums2.length; i++){
        mtrxnums2[i].value = "";
        mtrxnums2[i].style.width = "50px";
        sizemultiplier = 0;
        newsize = 0;
    };
    for(i = 0; i < mtrxnums3.length; i++){
        mtrxnums3[i].value = "";
        mtrxnums3[i].style.width = "50px";
        sizemultiplier = 0;
        newsize = 0;
    };
    result.style.display = "none"
};

clear.addEventListener("click", clearFunction);

//event listeners

btn1.addEventListener("click", function check1(){
    if(check[0].checked){
        document.querySelector(".calculator").style.backgroundColor= "rgb(40,40,40)";
        mtrx1[0].style.display = "block";
        mtrx2[0].style.display = "none";
        mtrx3[0].style.display = "none";
        cal.style.display = "inline";
        clear.style.display = "inline";
        clearFunction();
    }
});
btn2.addEventListener("click", function check2(){
    if(check[1].checked){
        document.querySelector(".calculator").style.backgroundColor= "rgb(40,40,40)";
        mtrx1[0].style.display = "none";
        mtrx2[0].style.display = "block";
        mtrx3[0].style.display = "none";
        cal.style.display = "inline";
        clear.style.display = "inline";
        clearFunction();
    }
});
btn3.addEventListener("click", function check3(){
    if(check[2].checked){
        document.querySelector(".calculator").style.backgroundColor= "rgb(40,40,40)";
        mtrx1[0].style.display = "none";
        mtrx2[0].style.display = "none";
        mtrx3[0].style.display = "block";
        cal.style.display = "inline";
        clear.style.display = "inline";
        clearFunction();
    }
});


//input grow with keys and 

var sizemultiplier = 0;
var newsize = 0;

//order 1
mtrxnums1[0].addEventListener("keyup", function(){
    if(mtrxnums1[0].value.length > 3){

        if(mtrxnums1[0].value.length > sizemultiplier && newsize < 104){
            sizemultiplier = mtrxnums1[0].value.length;

            newsize = 50 + (sizemultiplier - 3)*18;

            mtrxnums1[0].style.width = newsize + "px"
        };
    };
});

//order 2
document.querySelectorAll(".mtrxnum2").forEach(function(item){
    item.addEventListener("keyup", function(){
    for(var p = 0; p < mtrxnums2.length; p++){
        if(mtrxnums2[p].value.length > 3){

            if(mtrxnums2[p].value.length > sizemultiplier && newsize < 104){
                sizemultiplier = mtrxnums2[p].value.length;

                newsize = 50 + (sizemultiplier - 3)*18;

            for(var u = 0; u < mtrxnums2.length; u++){
                mtrxnums2[u].style.width = newsize + "px"}
            };
        };
    };
});});

//order3

document.querySelectorAll(".mtrxnum3").forEach(function(item){
    item.addEventListener("keyup", function(){
    for(var p = 0; p < mtrxnums3.length; p++){
        if(mtrxnums3[p].value.length > 3){

            if(mtrxnums3[p].value.length > sizemultiplier && newsize < 104){
                sizemultiplier = mtrxnums3[p].value.length;

                newsize = 50 + (sizemultiplier - 3)*18;
            };
            for(var u = 0; u < mtrxnums3.length; u++){
                mtrxnums3[u].style.width = newsize + "px"}
            
        };
    };
});});

//calculate functions

var det = 0

function cal1(){
    if(mtrxnums1[0].value == ""){alert("Please fill the input.")}
    else{
        result.style.display = "inline"
        result.innerText = "Det = " + mtrxnums1[0].value;
    };
    
};

function cal2(){

    var twooneone = document.getElementById("211").value;
    var twoonetwo = document.getElementById("212").value;
    
    var twotwoone = document.getElementById("221").value;
    var twotwotwo = document.getElementById("222").value;

    for(var j = 0; j < mtrxnums2.length; j++){
        if(mtrxnums2[j].value == ""){
            result.style.display = "none";
            alert("Please fill the blank inputs.");
            break;
        }
        else{
            det = (twooneone * twotwotwo) - (twoonetwo * twotwoone);
            result.style.display = "inline";
            result.innerText = "Det = " + det;
        }
        if(result.innerText == "Det = NaN"){result.innerText = "error"}}};

function cal3(){

    var threeoneone = document.getElementById("311").value;
    var threeonetwo = document.getElementById("312").value;
    var threeonethree = document.getElementById("313").value;

    var threetwoone = document.getElementById("321").value;
    var threetwotwo = document.getElementById("322").value;
    var threetwothree = document.getElementById("323").value;

    var threethreeone = document.getElementById("331").value;
    var threethreetwo = document.getElementById("332").value;
    var threethreethree = document.getElementById("333").value;

    var diagonals = {
        "dia1": (threeoneone *  threetwotwo * threethreethree),
        "dia2": (threeonetwo * threetwothree * threethreeone),
        "dia3": (threeonethree * threetwoone * threethreetwo),
        "diaMinus1": (threeonethree * threetwotwo * threethreeone),
        "diaMinus2": (threeoneone * threetwothree * threethreetwo),
        "diaMinus3": (threeonetwo * threetwoone * threethreethree)
    };

    for(var j = 0; j < mtrxnums3.length; j++){
        if(mtrxnums3[j].value == ""){
            result.style.display = "none";
            alert("Please fill the blank inputs.");
            break;
        }
        else{
            det = (diagonals.dia1 + diagonals.dia2 + diagonals.dia3) - (diagonals.diaMinus1 + diagonals.diaMinus2 + diagonals.diaMinus3)
            result.style.display = "inline";
            result.innerText = "Det = " + det;
        }
        if(result.innerText == "Det = NaN"){result.innerText = "error"}}};

cal.addEventListener("click", function(){ 
    if(check[0].checked){cal1()};
    if(check[1].checked){cal2()};
    if(check[2].checked){cal3()};
});

function closeApp(e) {
    e.preventDefault();
    window.close();
    app.quit();
  }

document.getElementById("quit").addEventListener("click", closeApp);

//input press Enter to calculate

document.querySelectorAll("li input").forEach(function(input) {
    input.addEventListener("keyup", function(event){
        if(event.keyCode == 13){
            if(check[0].checked){cal1()};
            if(check[1].checked){cal2()};
            if(check[2].checked){cal3()};
        }
    })});

var inputSide = document.querySelectorAll('.side-input');
var calculateBtn = document.querySelector("#calculate-btn");
var output = document.querySelector("#output");

function calcArea(){
    //taking input
    var base = inputSide[0].value;
    var height = inputSide[1].value;
    //input validators
    if(base&&height){
        //processing the inputs
        var area = 1/2*(base*height);
        
        //rendering the output
        output.innerText = "The area of the triangle is " + area;
    }else{
        //error handler
        output.innerText = "please enter both the inputs to proceed!!"
    }
}

calculateBtn.addEventListener("click", calcArea);
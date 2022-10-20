var inputSide = document.querySelectorAll('.side-input');
var calculateBtn = document.querySelector("#calculate-btn");
var output = document.querySelector("#output");

function calcArea(){
    //taking input
    var base = inputSide[0].value;
    var height = inputSide[1].value;
    //input validators
    if(base&&height){
        if(base > 0 && height > 0){
            //processing the inputs
            var area = 1/2*(base*height);
        
            //rendering the output
            output.innerText = "The area of the triangle is " + area.toFixed(2);
        }else{
            output.innerText = "please enter positive values to proceed!"
        }    
    }else{
        //error handler
        output.innerText = "please enter both the inputs to proceed!!"
    }
}

calculateBtn.addEventListener("click", calcArea);
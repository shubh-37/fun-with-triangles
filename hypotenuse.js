var inputSide = document.querySelectorAll(".side-input");
var calculateBtn = document.querySelector("#calculate-btn");
var output = document.querySelector("#output");

function sumOfSquares(a,b){
    //processing the input
    return a*a + b*b;
}
function calcHypotenuse(){
    //input validators
    if(inputSide[0].value&&inputSide[1].value){
        
        //processing the input
        var side1 = inputSide[0].value;
        var side2 = inputSide[1].value;
        var sumOfSquare = sumOfSquares(side1,side2);
        var hypotenuse = Math.sqrt(sumOfSquare);

        //rendering the output
        output.innerText = "The hypotenuse is " + hypotenuse;
    }else{
        //error handler
        output.innerText = "Please enter both the inputs to proceed!!!"
    }
}

calculateBtn.addEventListener("click", calcHypotenuse);
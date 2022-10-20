var inputAngle = document.querySelectorAll(".angle-input");
var checkBtn = document.querySelector("#check-btn");
var output = document.querySelector("#output");

function sumOfTriangle(a,b,c){
    return a+b+c;
}

function isTriangle(){
    //validating the input before doing the processing
    if(inputAngle[0].value&&inputAngle[1].value&&inputAngle[2].value){
        if(inputAngle[0].value > 0 && inputAngle[1].value > 0 && inputAngle[2].value > 0){
            //processing the input
        var sum = sumOfTriangle(Number(inputAngle[0].value),Number(inputAngle[1].value),Number(inputAngle[2].value))
        
        if(sum === 180){
            //rendering the output
            output.innerText = "This is a triangle!";
        }else{
            output.innerText = "Oops! not a triangle";
        }
        }else{
            //error handler
            output.innerText = "Please enter positive values to proceed!";
        }      
    }else{
        //error handler
        output.innerText = "Please enter all the inputs!!";
    }       
}

checkBtn.addEventListener("click", isTriangle);
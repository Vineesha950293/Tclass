const massInputBox = document.getElementById("mass");
const heightInputBox = document.getElementById("height");
const result = document.getElementById("result");
const error = document.getElementById("error");
const clock = document.getElementById("clock");
const validateInput =() =>{
    result.innerText=" ";
    error.innerText=" ";
    if(massInputBox.value === ""){
        error.innerText="pleas provide mass"
        return false
    }
    if(heightInputBox.value === ""){
        error.innerText="please provide height"
        return false
    }
    return true

}
const calculateBMI = () =>{
 const mass=parseFloat(massInputBox.value)
 const height=parseFloat(heightInputBox.value)
 const bmi=mass/(height/100)**2
    if (bmi<18.5){
       result.innerText="you are underweight"
    }else if(bmi<25){
       result.innerText="you are normal BMI"
    }else if(bmi<30){
       result.innerText="you are over weight"
    }else{
       result.innerText="you are over obese"
    }
}
let clockCounter= 0;
const updateClock = () => {
    clockCounter.innerHTML =clockCounter
    clockCounter++

}
setInterval(updateClock,1000)
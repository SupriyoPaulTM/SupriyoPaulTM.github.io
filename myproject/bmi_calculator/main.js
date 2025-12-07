const result = document.getElementById("result");
const weight = document.getElementById("weight");
const height = document.getElementById("height");

function submit() {
  let w = parseInt(weight.value);
  let h = parseInt(height.value);
  h = h/100;
  let bmi = Math.round(w/(h*h)*10)/10;
  let txt = "";
  if ( bmi<18.5 ) {
    txt = "Underweight";
  } else if ( bmi>=18.5 && bmi<25 ) {
    txt = "Normal";
  } else if ( bmi>=25 && bmi<30 ) {
    txt = "Overweight";
  } else {
    txt = "Obese";
  }
  result.innerHTML = "Your BMI is: "+ bmi +"<br>Remarks: "+txt;
};
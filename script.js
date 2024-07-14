let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let colorPicker = document.querySelector(".colorpicker");
let btnVal1 = "#ef32d9";
let btnVal2 = "#89fffd";
let bgColor;
let copy = document.querySelector(".copy")

let hexVal = () => {
  let hexaCode = "0123456789abcdef";
  let value = "#";
  for (let index = 0; index < 6; index++) {
    value += hexaCode[Math.floor(Math.random() * 16)];
  }
  return value;
};

let updateGradient = () => {
    bgColor=document.body.style.background = `linear-gradient(to right, ${btnVal1}, ${btnVal2})`;
  colorPicker.innerHTML = `linear-gradient(to right, ${btnVal1}, ${btnVal2})`;
  btn1.innerHTML = btnVal1;
  btn2.innerHTML = btnVal2;
};

let handleBtn1 = () => {
  btnVal1 = hexVal();
  updateGradient();
  console.log(btnVal1);
};

let handleBtn2 = () => {
  btnVal2 = hexVal();
  updateGradient();
  console.log(btnVal2);
};

colorPicker.addEventListener("click",()=> {
    navigator.clipboard.writeText(colorPicker.innerText)
    alert("Copied Code Successfully")
});

btn1.addEventListener("click", handleBtn1);
btn2.addEventListener("click", handleBtn2);
updateGradient();



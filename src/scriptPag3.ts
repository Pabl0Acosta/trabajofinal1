let buttonAge = <HTMLButtonElement>document.getElementById("sendAgeButton");
let userAge = <HTMLInputElement>document.getElementById("userAge");
let mail = <HTMLParagraphElement>document.getElementById("mail");
let mobile = <HTMLParagraphElement>document.getElementById("mobileNumber");
let oldBlog = <HTMLParagraphElement>document.getElementById("oldBlog");
let underage = <HTMLParagraphElement>document.getElementById("errorMessage");
let rightAge: number = 18;
let age: number;

buttonAge.addEventListener("click", function (event) {
  event.preventDefault();
  age = Number(userAge.value);
  if (age >= rightAge) {
    mail.innerHTML = "tinchoinside@hotmail.com.ar";
    mobile.innerHTML = "+54 249 432144";
    oldBlog.innerHTML = "https://amboslos2.blogspot.com/";
  } else {
    underage.innerHTML = "necesitas ser mayor de edad.";
  }
});

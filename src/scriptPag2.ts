let newCodeButton = <HTMLButtonElement>(
  document.getElementById("generateCaptcha")
);
let sendCodeButton = <HTMLButtonElement>document.getElementById("sendCaptcha");
let codeInput = <HTMLInputElement>document.getElementById("captchaInput");
let outputCode = <HTMLParagraphElement>document.getElementById("randomCode");
let linkOutput = <HTMLParagraphElement>document.getElementById("wrongCode");
let total: number;
let userNumber: number;

newCodeButton.addEventListener("click", () => {
  outputCode.innerHTML = genrateRandomNumber(1000, 9000);
});

sendCodeButton.addEventListener("click", () => {
  userNumber = Number(codeInput.value);
  if (userNumber === total) {
    window.open(
      "https://drive.google.com/drive/folders/105fSt2RcJzZWVTZUeyQ5QrIGm__ORmm4?usp=sharing"
    );
  } else {
    linkOutput.innerHTML = "Codigo Incorrecto, intente de nuevo";
  }
});

function genrateRandomNumber(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  total = Math.floor(Math.random() * (max - min + 1)) + min;
  return total;
}

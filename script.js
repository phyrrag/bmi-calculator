let Weight;
let Height;
let userOutput;
let userCategory;

document.getElementById("retryButton").style = `display: none`;
document.getElementById("outputContainer").style = `display: none`;

function userSubmitInput() {
  Weight = document.getElementById("userWeight").value;
  Height = document.getElementById("userHeight").value;

  userOutput = (Weight / Height ** 2) * 10000;
  userOutput = Math.floor(userOutput);

  document.getElementById("retryButton").style = `display: all`;

  document.getElementById("outputResult").innerHTML =
    `Your BMI is<br> <span>${userOutput}</span>
    `;

  document.getElementById("outputCategory").innerHTML =
    `${userCategory}
    `;

  document.getElementById("inputContainer").style = `
    display: none;
    `;

  document.getElementById("outputContainer").style = `
    display: all;
    `;

  document.getElementById("outputResult").style = `
    font-size: 32px;
    text-align: center;
  `;

  document.getElementById("outputCategory").style = `
    font-size: 24px;
  `;
}

function reload() {
  window.location.reload();
}

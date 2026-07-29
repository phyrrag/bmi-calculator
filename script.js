let Weight;
let Height;
let userOutput;
let userCategory;

document.getElementById("retryButton").style = `display: none`;
document.getElementById("outputContainer").style = `display: none`;

function userSubmitInput() {
  Weight = document.getElementById("userWeight").value;
  Weight = Number(Weight);
  Height = document.getElementById("userHeight").value;
  Height = Number(Height);

  if ((Height <= 0, Weight <= 0)) {
    document.getElementById("userError").innerHTML =
      `Both input fields are required`;
    document.getElementById("userError").style = `color: red;`;
  } else {
    userOutput = (Weight / Height ** 2) * 10000;
    userOutput = Math.floor(userOutput);

    document.getElementById("retryButton").style = `display: all`;

    document.getElementById("outputResult").innerHTML =
      `Your BMI is<br> <span>${userOutput}</span>
    `;

    document.getElementById("outputCategory").innerHTML = `${userCategory}
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

    if (userOutput >= 30) {
      document.getElementById("outputCategory").textContent = `Obese`;
      document.getElementById("outputCategory").style = `
      font-size: 24px;
      color: red;`;
    } else if (userOutput >= 25 && userOutput <= 29.9) {
      document.getElementById("outputCategory").textContent = `Overweight`;
      document.getElementById("outputCategory").style = `
      font-size: 24px;
      color: orange;`;
    } else if (userOutput >= 18.5 && userOutput <= 24.9) {
      document.getElementById("outputCategory").textContent = `Normal`;
      document.getElementById("outputCategory").style = `
      font-size: 24px;
      color: lightgreen;`;
    } else if (userOutput < 18.5) {
      document.getElementById("outputCategory").textContent = `Underweight`;
      document.getElementById("outputCategory").style = `
      font-size: 24px;
      color: yellow;`;
    }
  }
}

function reload() {
  window.location.reload();
}

//bmi - kg/mg
//Normal - 18.5 -24.9
//underweight - <18.5
//underweight - 25 -29.9
//obese - 30 and above

const btn = document.querySelector(".btn"),
  result = document.querySelector(".result"),
  reset = document.querySelector(".reset");

btn.addEventListener("click", calculateBMI);

function calculateBMI(e) {
  e.preventDefault();
  let height = document.querySelector(".height").value;
  let weight = document.querySelector(".weight").value;

  if (height === "" || isNaN(height)) {
    return (result.innerHTML = "Provide a valid Height!");
  } else if (weight === "" || isNaN(weight)) {
    return (result.innerHTML = "Provide a valid weight!");
  } else {
    height = height / 100;
    let bmi = weight / Math.pow(height, 2).toFixed(2);
    console.log(bmi);
    //categories result
    if (bmi < 18.5) {
      showResult(`underweight: <span>${bmi}</span>`, "orange");
    } else if (bmi >= 18.5 && bmi < 24.9) {
      showResult(`Normal: <span>${bmi}</span>`, "green");
    } else if (bmi >= 25.0 && bmi < 29.9) {
      showResult(`Overweight: <span>${bmi}</span>`, "blue");
    } else {
      showResult(`Obsese: <span>${bmi}</span>`, "red");
    }
  }
  reset.style.display = "block";
}

function showResult(val, color) {
  result.style.backgroundColor = color;
  return (result.innerHTML = val);
}

reset.addEventListener("click", () => {
  document.querySelector("form").reset();
  reset.style.display = "none";
  reset.style.display = "none";
});

const empty = "";
uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
lCase = "abcdefghijklmnopqrstuvwxyz";
number = "0123456789";
symbol = "!@#$%^&*=-_";
const pLength = document.getElementById("p-length"),
  uppercase = document.getElementById("p-uppercase"),
  lowercase = document.getElementById("p-lowercase"),
  pNumber = document.getElementById("p-number"),
  pSymbol = document.getElementById("p-symbol"),
  submit = document.getElementById("submit"),
  password = document.getElementById("password");
copy = document.getElementById("copy");

submit.addEventListener("click", () => {
  let initialPassword = empty;
  //add character if an option is checked
  uppercase.checked ? (initialPassword += uCase) : "";
  lowercase.checked ? (initialPassword += lCase) : "";
  pNumber.checked ? (initialPassword += number) : "";
  pSymbol.checked ? (initialPassword += symbol) : "";

  password.value = generatePassword(pLength.value, initialPassword);
});

function generatePassword(l, initialPassword) {
  let pass = "";
  for (let i = 0; i < l; i++) {
    pass += initialPassword.charAt(
      Math.floor(Math.random() * initialPassword.length)
    );
  }
  return pass;
}
// let str = "Hello";
// let result = str.charAt();

copy.addEventListener("click", () => {
  if (password.value == "") {
    alert("Please generate a password");
  } else {
    password.select();
    document.execCommand("copy");
    alert("Password has been copied to clipboard!");
  }
});

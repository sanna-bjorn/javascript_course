const email = document.getElementById("login-form-email");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a valid email");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
    event.preventDefault();
  }
});

function isZipCode(str) {
  return /^\d{5}?$/.test(str);
}
function validateInput() {
  console.log("validateInput");
  let zipCode = document.getElementById("login-form-zip-code").value;
  let message = "";
  if (isZipCode(zipCode)) {
    message = "Valid Zip Code";
  } else {
    message = "Invalid Zip Code";
  }
  document.getElementById("msg").innerHTML = message;
}

let validatePassWord = () => {
  let loginpw = document.getElementById("login-form-pw").value;
  let confirmpw = document.getElementById("login-form-pw-conf").value;
  if (loginpw !== confirmpw) {
    alert("Please enter the same password");
    preventDefault();
    return false;
  } else {
    alert("Your response is submitted, high five");
  }
};

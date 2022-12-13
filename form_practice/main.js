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
  } else {
    alert("Your response is submitted");
  }
};

// function validate_password() {
//   let pass = document.getElementById("login-form-pw").value;
//   let confirm_pass = document.getElementById("login-form-pw-conf").value;
//   if (pass != confirm_pass) {
//     document.getElementById("wrong_pass_alert").style.color = "red";
//     document.getElementById("wrong_pass_alert").innerHTML = "Use same password";
//     document.getElementById("create").disabled = true;
//     document.getElementById("create").style.opacity = 0.4;
//   } else {
//     document.getElementById("wrong_pass_alert").style.color = "green";
//     document.getElementById("wrong_pass_alert").innerHTML =
//       "🗹 Password Matched";
//     document.getElementById("create").disabled = false;
//     document.getElementById("create").style.opacity = 1;
//   }
// }

// function wrong_pass_alert() {
//   if (
//     document.getElementById("pass").value != "" &&
//     document.getElementById("confirm_pass").value != ""
//   ) {
//     alert("Your response is submitted");
//   } else {
//     alert("Please fill all the fields");
//   }
// }

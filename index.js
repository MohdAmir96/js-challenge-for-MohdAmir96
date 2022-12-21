let globalIsSubmit = false;

function validate(isSubmit) {
  if (isSubmit) {
    globalIsSubmit = true;
  }

  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let phone = document.getElementById("phone").value;
  let website = document.getElementById("website").value;
  let company = document.getElementById("company").value;

  console.log(firstName);
  if (globalIsSubmit) {
    if (firstName.length >= 2) {
      document.getElementById("first-name-valid").style.display = "block";
      document.getElementById("first-name-invalid").style.display = "none";
    } else {
      isSubmit = false;
      document.getElementById("first-name-invalid").style.display = "block";
      document.getElementById("first-name-valid").style.display = "none";
    }

    if (lastName.length >= 2) {
      document.getElementById("last-name-valid").style.display = "block";
      document.getElementById("last-name-invalid").style.display = "none";
    } else {
      isSubmit = false;
      document.getElementById("last-name-invalid").style.display = "block";
      document.getElementById("last-name-valid").style.display = "none";
    }

    // alphanumeric check function
    function isAlphaNumeric(str) {
      var code, i, len;

      for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (
          !(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)
        ) {
          // lower alpha (a-z)
          return false;
        }
      }
      return true;
    }

    if (isAlphaNumeric(username) && username.length > 0) {
      document.getElementById("username-valid").style.display = "block";
      document.getElementById("username-invalid").style.display = "none";
    } else {
      isSubmit = false;
      document.getElementById("username-invalid").style.display = "block";
      document.getElementById("username-valid").style.display = "none";
    }
    if (
      email.includes("@") &&
      email.includes(".") &&
      email.indexOf("@") > 0 &&
      email.substr(email.lastIndexOf(".") + 1).length >= 2
    ) {
      document.getElementById("email-valid").style.display = "block";
      document.getElementById("email-invalid").style.display = "none";
    } else {
      isSubmit = false;
      document.getElementById("email-invalid").style.display = "block";
      document.getElementById("email-valid").style.display = "none";
    }

    /* City: At least 3 characters */

    if (phone.match(/^\d{3}-\d{3}-\d{4}$/)) {
      document.getElementById("phone-valid").style.display = "block";
      document.getElementById("phone-invalid").style.display = "none";
    } else {
      isSubmit = false;
      document.getElementById("phone-invalid").style.display = "block";
      document.getElementById("phone-valid").style.display = "none";
    }
  }
  if (isSubmit) alert("submitted");
}

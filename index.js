let globalIsSubmit = false;

function resetFields() {
  document.querySelector("form").reset();

  document.getElementById("first-name-valid").style.display = "none";

  document.getElementById("last-name-valid").style.display = "none";
  document.getElementById("phone-valid").style.display = "none";
  document.getElementById("username-valid").style.display = "none";
  document.getElementById("email-valid").style.display = "none";
  document.getElementById("address-valid").style.display = "none";
  document.getElementById("phone-valid").style.display = "none";
  document.getElementById("website-valid").style.display = "none";
  document.getElementById("company-valid").style.display = "none";
}

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
  // Alphanumeric + dot check function
  function isAlphaNumericAndDot(username) {
    var expr = /^[a-zA-Z0-9.]*$/;
    if (!expr.test(username)) {
      return false;
    }
    return true;
  }
  // isUrl function
  function ValidURL(str) {
    var regex =
      /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if (!regex.test(str)) {
      return false;
    } else {
      return true;
    }
  }
  let srNo = 1;
  if (globalIsSubmit) {
    if (firstName.length >= 3 && isAlphaNumeric(firstName)) {
      document.getElementById("first-name-valid").style.display = "block";
      document.getElementById("first-name-invalid").style.display = "none";
    } else {
      isSubmit = false;
      document.getElementById("first-name-invalid").style.display = "block";
      document.getElementById("first-name-valid").style.display = "none";
    }

    if (lastName.length >= 3 && isAlphaNumeric(lastName)) {
      document.getElementById("last-name-valid").style.display = "block";
      document.getElementById("last-name-invalid").style.display = "none";
    } else {
      isSubmit = false;
      document.getElementById("last-name-invalid").style.display = "block";
      document.getElementById("last-name-valid").style.display = "none";
    }

    if (isAlphaNumericAndDot(username) && username.length > 0) {
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

    if (address.length > 0) {
      document.getElementById("address-valid").style.display = "block";
      document.getElementById("address-invalid").style.display = "none";
    } else {
      isSubmit = false;
      document.getElementById("address-invalid").style.display = "block";
      document.getElementById("address-valid").style.display = "none";
    }
    //
    if (phone.match(/^\d{3}-\d{3}-\d{4}$/)) {
      document.getElementById("phone-valid").style.display = "block";
      document.getElementById("phone-invalid").style.display = "none";
    } else {
      isSubmit = false;
      document.getElementById("phone-invalid").style.display = "block";
      document.getElementById("phone-valid").style.display = "none";
    }
    if (!ValidURL(website)) {
      isSubmit = false;
      document.getElementById("website-invalid").style.display = "block";
    } else {
      document.getElementById("website-invalid").style.display = "none";
    }
  }
  // Fetch Api

  const url = "https://jsonplaceholder.typicode.com/users";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (isSubmit) {
        document.querySelector("table").innerHTML = `
        <thead class="thead-dark table-head">
        <tr>
            <th scope="row">Sr No</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company Name</th>
        </tr>
    </thead>
 <tbody>
 <tr>
 <th scope="row">${srNo}</th>
 <td>${firstName} ${lastName}</td>
 <td>${username}</td>
 <td>${email}</td>
 <td>${address}</td>
 <td>${phone}</td>
 <td>${website}</td>
 <td>${company}</td>
</tr>

<tr>
<td>2</td>
<td>${data[0].name}</td>
<td>${data[0].username}</td>
<td>${data[0].email}</td>
<td class="col-3">${data[0].address.street}, ${data[0].address.suite}, ${data[0].address.city}, ${data[0].address.zipcode}</td>
<td>${data[0].phone}</td>
<td>${data[0].website}</td>
<td>${data[0].company.name}</td>
</tr>
<tr>
<td>3</td>
<td>${data[1].name}</td>
<td>${data[1].username}</td>
<td>${data[1].email}</td>
<td class="col-3">${data[0].address.street}, ${data[0].address.suite}, ${data[0].address.city}, ${data[0].address.zipcode}</td>
<td>${data[1].phone}</td>
<td>${data[1].website}</td>
<td>${data[1].company.name}</td>
</tr>
<td>4</td>
<td>${data[2].name}</td>
<td>${data[2].username}</td>
<td>${data[2].email}</td>
<td class="col-3">${data[0].address.street}, ${data[0].address.suite}, ${data[0].address.city}, ${data[0].address.zipcode}</td>
<td>${data[2].phone}</td>
<td>${data[2].website}</td>
<td>${data[2].company.name}</td>
</tr>
</tr>
<td>5</td>
<td>${data[3].name}</td>
<td>${data[3].username}</td>
<td>${data[3].email}</td>
<td class="col-3">${data[0].address.street}, ${data[0].address.suite}, ${data[0].address.city}, ${data[0].address.zipcode}</td>
<td>${data[3].phone}</td>
<td>${data[3].website}</td>
<td>${data[3].company.name}</td>
</tr>
<td>6</td>
<td>${data[4].name}</td>
<td>${data[4].username}</td>
<td>${data[4].email}</td>
<td class="col-3">${data[0].address.street}, ${data[0].address.suite}, ${data[0].address.city}, ${data[0].address.zipcode}</td>
<td>${data[4].phone}</td>
<td>${data[4].website}</td>
<td>${data[4].company.name}</td>
</tr>
<td>7</td>
<td>${data[5].name}</td>
<td>${data[5].username}</td>
<td>${data[5].email}</td>
<td class="col-3">${data[0].address.street}, ${data[0].address.suite}, ${data[0].address.city}, ${data[0].address.zipcode}</td>
<td>${data[5].phone}</td>
<td>${data[5].website}</td>
<td>${data[5].company.name}</td>
</tr>
<td>8</td>
<td>${data[6].name}</td>
<td>${data[6].username}</td>
<td>${data[6].email}</td>
<td class="col-3">${data[0].address.street}, ${data[0].address.suite}, ${data[0].address.city}, ${data[0].address.zipcode}</td>
<td>${data[6].phone}</td>
<td>${data[6].website}</td>
<td>${data[6].company.name}</td>
</tr>
</tr>
<td>9</td>
<td>${data[7].name}</td>
<td>${data[7].username}</td>
<td>${data[7].email}</td>
<td class="col-3">${data[0].address.street}, ${data[0].address.suite}, ${data[0].address.city}, ${data[0].address.zipcode}</td>
<td>${data[7].phone}</td>
<td>${data[7].website}</td>
<td>${data[7].company.name}</td>
</tr>
</tr>
<td>10</td>
<td>${data[8].name}</td>
<td>${data[8].username}</td>
<td>${data[8].email}</td>
<td class="col-3">${data[0].address.street}, ${data[0].address.suite}, ${data[0].address.city}, ${data[0].address.zipcode}</td>
<td>${data[8].phone}</td>
<td>${data[8].website}</td>
<td>${data[8].company.name}</td>
</tr>
<td>11</td>
<td>${data[9].name}</td>
<td>${data[9].username}</td>
<td>${data[9].email}</td>
<td class="col-3">${data[0].address.street}, ${data[0].address.suite}, ${data[0].address.city}, ${data[0].address.zipcode}</td>
<td>${data[9].phone}</td>
<td>${data[9].website}</td>
<td>${data[9].company.name}</td>
</tr>
 </tbody>
`;
        resetFields();
      }
    });
}

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const gender = document.getElementById("gender").value;
    const password = document.getElementById("password").value;
  
    let isValid = true;
  
    if (name.trim() === "") {
      document.getElementById("nameError").innerHTML = "Please enter your name";
      isValid = false;
    } else {
      document.getElementById("nameError").innerHTML = "";
    }
  
    if (email.trim() === "") {
      document.getElementById("emailError").innerHTML = "Please enter your email";
      isValid = false;
    } else if (!isValidEmail(email)) {
      document.getElementById("emailError").innerHTML = "Please enter a valid email";
      isValid = false;
    } else {
      document.getElementById("emailError").innerHTML = "";
    }
  
    if (phone.trim() === "") {
      document.getElementById("phoneError").innerHTML = "Please enter your phone number";
      isValid = false;
    } else {
      document.getElementById("phoneError").innerHTML = "";
    }
  
    if (gender === "") {
      document.getElementById("genderError").innerHTML = "Please select your gender";
      isValid = false;
    } else {
      document.getElementById("genderError").innerHTML = "";
    }
  
    if (password.trim() === "") {
      document.getElementById("passwordError").innerHTML = "Please enter your password";
      isValid = false;
    } else {
      document.getElementById("passwordError").innerHTML = "";
    }
  
    if (isValid) {
      document.getElementById("myForm").reset();
      document.getElementById("successMessage").innerHTML = "Form submitted successfully!";
      setTimeout(() => {
        document.getElementById("successMessage").innerHTML = "";
      }, 5000);
      return false;
    } else {
      return false;
    }
  }
  
  function isValidEmail(email) {
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return regex.test(email);
  }
  
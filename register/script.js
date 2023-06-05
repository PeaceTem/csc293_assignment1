let formContainer = document.getElementById('registration-form');

formContainer.addEventListener( 'submit', function(event) {
    event.preventDefault(); 
    validateForm()
})


function validateForm() {
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
  
    const emailError = document.getElementById('email-error');
    const nameError = document.getElementById('name-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');

    // Validate name

    if (name.value.trim() === ''){
      nameError.textContent = "Name cannot be empty";
      return;
    } else {
      nameError.textContent = "";
      
      if (name.value.trim().length < 8 || name.value.trim().length > 20) {
        nameError.textContent = "The username must be between 8 to 20 letters long"; // Set error message text
        return;
      } else {
        nameError.textContent = ""; // Set error message text
      }

    }

    // validate email

    if (email.value.trim() === ''){
      emailError.textContent = "Email cannot be empty";
      return;
    } else {
      emailError.textContent = "";
    }


    // Validate password

    if (password.value.trim() === ''){
      passwordError.textContent = "Password cannot be empty";
      return;
    } else {
      passwordError.textContent = "";
      if (password.value.trim().length < 8 || password.value.trim().length > 20) {
        passwordError.textContent = "The password must be between 8 to 20 letters long"; // Set error message text
        return;
      } else {
        passwordError.textContent = ""; 
      }
  
    }

    if (confirmPassword.value.trim() === ''){
      confirmPasswordError.textContent = "Password cannot be empty";
      return;
    } else {
      confirmPasswordError.textContent = "";

      if (password.value.trim().length !== confirmPassword.value.trim().length) {
        confirmPasswordError.textContent = "This is different from the password given!";
      } else {
        confirmPasswordError.textContent = "";
      }
    }
    formContainer.submit();
}
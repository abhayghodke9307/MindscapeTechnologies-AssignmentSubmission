document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!validateName(name) || !validateEmail(email) || !validatePassword(password)) {
    
      return;
    }

   
    const isSignupSuccessful = true; 

    if (isSignupSuccessful) {
      showSuccessMessage();
    }
  });
});

function validateName(name) {
  return name.trim().length >0;
}

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validatePassword(password) {
  return password.length >= 6;
}

function showSuccessMessage() {
  
  const signupForm = document.getElementById('signupForm');
  signupForm.style.display = 'none';

  
  const successMessage = document.createElement('div');
  successMessage.textContent = 'Signup successful!';
  successMessage.style.color = 'green'; 
  document.querySelector('.container').appendChild(successMessage);
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const loginType = document.querySelector('input[name="loginType"]:checked');
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (loginType && email && password) {
      const userType = loginType.value;
  
      
      switch (userType) {
        case 'user':
          showWelcomeMessage('User');
          break;
        case 'admin':
          showWelcomeMessage('Admin');
          break;
        case 'client':
          showWelcomeMessage('Client');
          break;
        default:
          alert('Invalid login type');
      }
    } else {
      alert('Please fill in all fields');
    }
  });
  
  function showWelcomeMessage(userType) {
    const welcomeMessage = `Welcome ${userType}`;
    
    alert(welcomeMessage);
  
  }
  
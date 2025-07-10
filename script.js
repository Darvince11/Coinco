const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');
const signInForm = document.querySelector('.sign-in-form');
const signUpForm = document.querySelector('.sign-up-form');

signInBtn.addEventListener('click', () => {
  signInForm.classList.add('active');
  signUpForm.classList.remove('active');
  signInBtn.classList.add('active');
  signUpBtn.classList.remove('active');
});

signUpBtn.addEventListener('click', () => {
  signUpForm.classList.add('active');
  signInForm.classList.remove('active');
  signUpBtn.classList.add('active');
  signInBtn.classList.remove('active');
});

  const loginForm = document.getElementById("login");
  const signupForm = document.getElementById("signup");

  function showLogin() {
    loginForm.style.left = "50px";
    signupForm.style.left = "450px";
    document.getElementById("btn").style.left = "0";
  }

  function showSignup() {
    loginForm.style.left = "-400px";
    signupForm.style.left = "50px";
    document.getElementById("btn").style.left = "110px";
  }

  // Retrieve users from localStorage or initialize empty array
  function getStoredUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }

  // Save users array back to localStorage
  function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
  }

  // Signup handler
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("signupEmail").value;
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const users = getStoredUsers();

    const userExists = users.some(user => user.username === username);
    if (userExists) {
      alert("Username already exists!");
      return;
    }

    users.push({ email, username, password });
    saveUsers(users);

    alert("Registration successful!");
    signupForm.reset();
    showLogin();
  });

  // Login handler
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const users = getStoredUsers();

    const matchingUser = users.find(user => user.username === username && user.password === password);

    if (matchingUser) {
      alert(`Welcome back, ${matchingUser.username}!`);
    } else {
      alert("Invalid username or password");
    }
  });

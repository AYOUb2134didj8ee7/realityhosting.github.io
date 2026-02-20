// Switch Forms
function showRegister() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

function showLogin() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

// Register
document.getElementById("registerForm").addEventListener("submit", function(e){
e.preventDefault();

let username = document.getElementById("regUsername").value;
let email = document.getElementById("regEmail").value;
let age = document.getElementById("regAge").value;
let password = document.getElementById("regPassword").value;

localStorage.setItem("username", username);
localStorage.setItem("email", email);
localStorage.setItem("age", age);
localStorage.setItem("password", password);

alert("Account Created!");
showLogin();
});
// Login
document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    let savedUser = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if(username === savedUser && password === savedPass){
        localStorage.setItem("loggedUser", username);
        window.location.href = "chat.html";
    } else {
        alert("Wrong Username or Password!");
    }
function sendMessage() {
  const text = messageInput.value.trim();
  if (text === '') return;

  // استعمل النظام الجديد
  addMessage(currentUser, text);

  messageInput.value = '';
}
});
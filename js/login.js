console.log("login comming");
document.getElementById("login-btn").addEventListener("click", function () {
    // 1. get the input username 
    const usernameInput = document.getElementById("input-username");
    const username = usernameInput.value;
    console.log(username);
    // 2. get the input password
    const passwordInput = document.getElementById("input-password");
    const password = passwordInput.value;
    console.log(password);
    // 3. match the username and password
    if (username == "admin" && password == 'admin123') {
         // 4. true::::> alert > homepage
         window.location.replace("/home.html")
    }else{
        alert("login failed");
        return;
    }
   


})
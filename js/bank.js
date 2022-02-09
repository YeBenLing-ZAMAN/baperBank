
document.getElementById('login-button').addEventListener('click', function (event) {
    event.preventDefault();
    console.log("button clicked"); // for checking


    // get user email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail); // for checking 

    // get user password
    const passwordFeild = document.getElementById('user-password');
    const userPassword = passwordFeild.value;
    console.log(userPassword);   // for checking  

    if(userEmail == "zaman@gmail.com" && userPassword == "zaman"){
        console.log('done');  //for checking
        // window.location.href = 'banking.html';
    }else{
        console.log("not found !!");
    }
})
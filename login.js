document.getElementById("login_form").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("welcome.html")
    }
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
            // Display alert for any authentication error
            alert("Invalid credentials. Please check your email and password.");
        });
}

function signUp(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}

function forgotPass() {
    const email = document.getElementById("email").value;

    // Verify that the email address is valid
    if (!email) {
        alert("Please enter a valid email address.");
        return;
    }

    // Send password reset email
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert("Reset link sent to your email id");
        })
        .catch((error) => {
            // Display any error messages
            alert(error.message);
        });
}


// function forgotPass(){
//     const email = document.getElementById("email").value
//     firebase.auth().sendPasswordResetEmail(email)
//     .then(() => {
//         alert("Reset link sent to your email id")
//     })
//     .catch((error) => {
//         document.getElementById("error").innerHTML = error.message
//     });
// }
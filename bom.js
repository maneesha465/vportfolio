function handleSubmit(e){
    e.preventDefault();

   const fullname = document.getElementById("fullname").value;
   const fullnameError = document.getElementById("fullnameError");
   const contactnumber = document.getElementById('contactnumber').value;
   const numberError = document.getElementById('numberError');
   const form = e.target;
       var pattern = /^\d{10}$/;

       fullnameError.style.display = 'none';
       numberError.style.display = 'none';

   if(fullname.length < 3){
        fullnameError.style.display = 'block';
       fullnameError.style.color = 'yellow';
       fullnameError.innerHTML = '<b> full name should contain minimum 3 letters.</b>';
       return;
   }


  if (!pattern.test(contactnumber)) {
           numberError.style.display = 'block';
       numberError.style.color = 'yellow';
           numberError.innerHTML ='<b>Please enter a valid 10-digit phone number.</b>'
           return;
       }
  
  
   console.log("form submitted");
   form.reset();
}




 function showSignupForm() {
     document.getElementById('login').style.display = 'none';
     document.getElementById('signup').style.display = 'block';
 }

 function showLoginForm() {
     document.getElementById('signup').style.display = 'none';
     document.getElementById('login').style.display = 'block';
 }

 function handleLogin(event) {
     event.preventDefault();
     const email = document.getElementById('loginEmail').value;
     const password = document.getElementById('loginPassword').value;

     const emailError = document.getElementById('loginEmailError');
     const passwordError = document.getElementById('loginPasswordError');

     emailError.style.display = 'none';
     passwordError.style.display = 'none';

     let isValid = true;

     if (!validateEmail(email)) {
         emailError.style.display = 'block';
         emailError.innerHTML = '<b>Invalid email format</b>';
         isValid = false;
     }

     if (password.length < 6) {
         passwordError.style.display = 'block';
         passwordError.innerHTML = '<b>Password must be at least 6 characters</b>';
         isValid = false;
     }

     if (isValid) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('portfolio').style.display = 'block';
     }
      console.log("form submitted");
 }




function handleSignup(event) {
    event.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    const emailError = document.getElementById('signupEmailError');
    const passwordError = document.getElementById('signupPasswordError');

    emailError.style.display = 'none';
    passwordError.style.display = 'none';

    let isValid = true;

    if (!validateEmail(email)) {
        emailError.style.display = 'block';
        emailError.innerHTML = '<b>Invalid email format</b>';
        isValid = false;
    }

    if (password.length < 6) {
        passwordError.style.display = 'block';
        passwordError.innerHTML = '<b>Password must be at least 6 characters</b>';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('signup').style.display = 'none';
        document.getElementById('portfolio').style.display = 'block';
    }
     console.log("form submitted");
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}




















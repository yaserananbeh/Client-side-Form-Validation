'use strict';

const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const passwordTwo = document.getElementById('passwordTwo');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkData(e);
});
function checkData(e) {
  const username = e.target.username.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const passwordTwo = e.target.passwordTwo.value;
  //   console.log(username,email,password,passwordTwo);

  if (username === '') {
    let message = 'Username Can\'t be blank';
    fail(e, message,e.target.username);

  }
  else {
    success(e,e.target.username);
  }

  if (email === '') {
    let message = 'Email Can\'t be blank';
    fail(e, message,e.target.email);
  }
  else if(!isEmail(email)){
    let message = 'Use Valid Email Please';
    fail(e, message,e.target.email);
  }
  else {
    success(e,e.target.email);
  }
  if (password === '') {
    let message = 'Password Can\'t be blank';
    fail(e, message,e.target.password);
  }
  else {
    success(e,e.target.password);
  }
  if (passwordTwo === '') {
    let message = 'This Feild Can\'t be blank';
    fail(e, message,e.target.passwordTwo);
  }
  else if(passwordTwo!==password){
    let message = 'The Password Doesn\'t Match';
    fail(e, message,e.target.passwordTwo);
  }
  else {
    success(e,e.target.passwordTwo);
  }
}

function fail(e, message,input) {
  // console.log(input);
  input.setAttribute("class", "fail");
  input.parentNode.childNodes[7].style.visibility = "visible";
  input.parentNode.childNodes[9].textContent = message;
  input.parentNode.childNodes[9].style.visibility = "visible";
  input.parentNode.childNodes[5].style.visibility = "hidden";
}
function success(e,input) {
  input.setAttribute("class", "success");
  input.parentNode.childNodes[7].style.visibility = "hidden";
  input.parentNode.childNodes[9].style.visibility = 'hidden';
  input.parentNode.childNodes[5].style.visibility = "visible";
}

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


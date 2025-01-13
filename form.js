const data = {};
let gen = "Male";

function result(){
  let name = document.getElementById('name').value;
  let Username = document.getElementById('user-name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let pass = document.getElementById('pass').value;
  let conPass = document.getElementById('con-pass').value;
  
  
  if(pass != conPass){
    document.querySelector('.error-6').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>enter correct password';

  }
  if(name == ''){
    document.querySelector('.error-1').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>please fill out this field';
  }
  if(Username == ''){
    document.querySelector('.error-2').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>please fill out this field';
  }
  if(email == '') {
    document.querySelector('.error-3').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>please fill out this field';
  }
  if(pass == '') {
    document.querySelector('.error-5').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>please fill out this field';
  }
  if(pass.length < 5){
    document.querySelector('.error-5').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>password should have minimum of 5 letters';
  }
  if(phone == '') {
    document.querySelector('.error-4').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>please fill out this field';
  }if(phone.length < 10 || phone.length >10){
    document.querySelector('.error-4').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>number must have 10 characters';
  }
  
  if(phone.length == 10 && name != '' && Username != '' && email != '' && pass == conPass && gen != '' && pass.length > 5){
    document.querySelector('.continer').innerHTML  = `
    <p><i class="fa-solid fa-circle-check"></i>Your form is accepted</p>
    <button class='but-1' onclick='values()'>view</button>`;
    data.name = name;
    data.Username = Username;
    data.email = email;
    data.phone = phone;
  }
  
  
}

function butten(val) {
  gen = val;
  if(val == 'Male'){
    document.querySelector('.male').style.background = "black";
    document.querySelector('.female').style.background = "white";
    document.querySelector('.other').style.background = "white";
  }else if(val == "Female"){
    document.querySelector('.male').style.background = "white";
    document.querySelector('.female').style.background = "black";
    document.querySelector('.other').style.background = "white";
  }else if(val == "Other"){
    document.querySelector('.male').style.background = "white";
    document.querySelector('.female').style.background = "white";
    document.querySelector('.other').style.background = "black";
  }
  
}

function values(){
  document.querySelector('.continer').innerHTML  = `
    <p>Name: ${data.name}</p>
    <p>Username: ${data.Username}</p>
    <p>Gender: ${gen}</p>
    <p>Email: ${data.email}</p>
    <p>Phone: ${data.phone}</p>`;
}
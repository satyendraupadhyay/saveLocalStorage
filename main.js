// // Local Storage

// localStorage.setItem('Name','Satyendra');
// // var get = localStorage.getItem('Name');
// // console.log(get);

// console.log(localStorage.removeItem('Name'));

// // Session Storage
// sessionStorage.setItem('Name','Lord Krishna');
// // let ss = sessionStorage.getItem('Name');
// // console.log(ss);

// // sessionStorage.removeItem('Name');
// sessionStorage.setItem('Name','Lord Ram');

// // Cookie
// document.cookie = 'name=Satyendra Upadhyay';

var nameGet = document.getElementById('name');
var emailGet = document.getElementById('email');

var form = document.getElementById('my-form');

// submit event
form.addEventListener('submit',addLocal);


function addLocal(e){
    e.preventDefault();
    localStorage.setItem('Name',nameGet.value);
    localStorage.setItem('Email',emailGet.value);
}
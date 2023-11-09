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

// let myObj = {
//     name: 'Satyendra',
//     age: 24
// };

// let myObj_Serialized = JSON.stringify(myObj);

// localStorage.setItem('myObj',myObj_Serialized);

// let myObj_Deserialized = JSON.parse(localStorage.getItem('myObj'));
// console.log(myObj_Deserialized);

// add data to local storage via submit button

var form = document.getElementById('my-form');

// submit event
form.addEventListener('submit',addLocal);

function addLocal(e){
    e.preventDefault();

    var nameGet = document.getElementById('name');
    var emailGet = document.getElementById('email');
    var userDetails = {
    name: nameGet.value,
    email: emailGet.value
};

    // convert to string
    let userDetails_Serialized = JSON.stringify(userDetails);
    console.log(userDetails_Serialized);

    localStorage.setItem('userdetails',userDetails_Serialized);

    var storedData = localStorage.getItem('userdetails');
    var userDetails = JSON.parse(storedData);

}


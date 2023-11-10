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
var userList = document.getElementById('user-list');

// submit event
form.addEventListener('submit', addLocal);

function addLocal(e) {
    e.preventDefault();

    var nameGet = document.getElementById('name');
    var emailGet = document.getElementById('email');

    var userDetails = {
        name: nameGet.value,
        email: emailGet.value
    };

    // Convert to string
    let userDetails_Serialized = JSON.stringify(userDetails);

    // Generate a unique key (e.g., using a timestamp)
    var key = 'userdetails_' + Date.now();

    // Store the data with the unique key
    localStorage.setItem(key, userDetails_Serialized);

    // Clear the form inputs
    nameGet.value = '';
    emailGet.value = '';

    // Add the saved data to the list
    displaySavedData(key, userDetails);
}

// Function to display saved data in a list
function displaySavedData(key, userDetails) {
    var listItem = document.createElement('li');
    listItem.textContent = `${userDetails.name} -  ${userDetails.email}`;

    var delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.textContent = 'Delete';

    var editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.textContent = 'Edit';

    delBtn.addEventListener('click', function() {
        listItem.remove();
        localStorage.removeItem(key);
    });

    editBtn.addEventListener('click', function() {
        document.getElementById('name').value = userDetails.name;
        document.getElementById('email').value = userDetails.email;
      
        listItem.remove();
        localStorage.removeItem(key);

    });

    userList.appendChild(listItem);
    listItem.appendChild(delBtn);
    listItem.appendChild(editBtn);

}

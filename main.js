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
    var phoneGet = document.getElementById('phone');

    var userDetails = {
        name: nameGet.value,
        email: emailGet.value,
        phone: phoneGet.value
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
    phoneGet.value = '';

    // Saving the user Details on Crud Crud
    axios.post("https://crudcrud.com/api/b6e8c94e545b48e1829f1155acb72c1a/appointment", userDetails)
    .then(res => {
        
        console.log(res);
    })
    .catch(err => {
        document.body.innerHTML = document.body.innerHTML + "<h4>Something Went Wrong</h4>"
        console.log(err)
    });

    // Add the saved data to the list
    displaySavedData(key, userDetails);
}

// Function to display saved data in a list
function displaySavedData(key, userDetails) {
    var listItem = document.createElement('li');
    listItem.textContent = `${userDetails.name} -  ${userDetails.email} - ${userDetails.phone}`;

    var delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.textContent = 'Delete';

    var editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.textContent = 'Edit';

    delBtn.addEventListener('click', function() {
        listItem.remove();
        localStorage.removeItem(key);
        
        // Delete from Crud Crud
        var itemId = userDetails._id;
        axios.delete(`https://crudcrud.com/api/b6e8c94e545b48e1829f1155acb72c1a/appointment/${itemId}`)
            .then(response => {
                console.log('Item deleted:', response.data);
            })
            .catch(error => {
                console.error('Error deleting item:', error);
            });
    });

    editBtn.addEventListener('click', function() {
        document.getElementById('name').value = userDetails.name;
        document.getElementById('email').value = userDetails.email;
        document.getElementById('phone').value = userDetails.phone;
    
        var itemId = userDetails._id;
    
        const updatedData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value
        };
    
        axios.patch(`https://crudcrud.com/api/b6e8c94e545b48e1829f1155acb72c1a/appointment/${itemId}`, updatedData)
            .then(res => {
                console.log('Item Updated:', res.data);

            
                listItem.remove();
                localStorage.removeItem(key);
            })
            .catch(err => {
                console.error('Error Updating item:', err);
            });
    });
    

    userList.appendChild(listItem);
    listItem.appendChild(delBtn);
    listItem.appendChild(editBtn);

}

    


 // GET the saved User Details from crudcrud.
    window.addEventListener("DOMContentLoaded", () => {
        var a;
        axios.get("https://crudcrud.com/api/b6e8c94e545b48e1829f1155acb72c1a/appointment")
        .then(res => {
            for(var i = 0; i < res.data.length;i++){
                displaySavedData(a, res.data[i])
                
            }
            console.log(res);
        })
        .catch(err => console.error(err));

    })

    

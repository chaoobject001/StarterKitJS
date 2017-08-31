//import './index.css'; // Webpack parse CSS then inject style sheet onto the page

import {getUsers} from './api/userApi';

// Populate table of users via API call
getUsers().then(result => {
    let usersBody = ""; // eslint-disable-line no-unused-vars

    result.forEach(user => {
        usersBody += 
        `<tr>
            <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
        </tr>`
    });

    global.document.getElementById('users').innerHtml = userBody; // eslint-disable-line no-undef
});


// import numeral from 'numeral'; // library for formating number

// const courseValue = numeral(1000).format('$0,0.00');
// debugger;
// console.log(`I would pay ${courseValue} for this awsome course!`); // eslint-disable-line no-console

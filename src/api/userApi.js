import 'whatwg-fetch'; 
// import what working group fetch - support browser that yet to support Fetch natively
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

// This is similar to repository pattern 
// This centralized API proxy abstracts away HTTP API and handle AJAX calls

// this is the only public function exported

export function getUsers() {
    return get('users');
}

export function deleteUser(id) {
    return del(`users/${id}`);
}

// all functions below are private 

// the actual call that use Fetch occurs in the get function
function get(url) {
    return fetch(baseUrl + url).then(onSuccess, onError);
  }

// delete is a reserved word - cannot be used for function name
function del(url) {
    const request = new Request(baseUrl + url, {
        method: `DELETE`
    });
    return fetch(request).then(onSuccess, onError);
}


function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(error); // eslint-disable-line no-console
}
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

// all functions below are private 

// the actual call that use Fetch occurs in the get function
function get(url) {
    console.log('URL: ' + baseUrl + url); // eslint-disable-line no-console
    return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}

function onError(error) {
    console.log(error); // eslint-disable-line no-console
}
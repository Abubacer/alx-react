// import jquery
import $ from 'jquery';
// import header styling
import './header.css'

// add the logo and the H1 title
$('body').append(`<div id="logo"></div>`);
$('body').append(`<h1>Holberton Dashboard</h1>`);
console.log('Init header');
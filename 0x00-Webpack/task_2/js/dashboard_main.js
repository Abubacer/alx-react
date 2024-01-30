// import jquery and lodash
import $ from 'jquery';
import _ from 'lodash';

// import css styling
import '../css/main.css';

// add elements to the body
$('body').append(`<div id="logo"></div>`);
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('Copyright - Holberton School');

// tracks the number of times the button element has been clicked:
// 1.bind the click event on the button to lodash debounce
$('button').on('click', _.debounce(updateCounter, 500));
// 2.init the count
let count = 0;
// 3.update the clicks counter
function updateCounter() {
        count++;
        $('#count').text(`${count} clicks on the button`);
}
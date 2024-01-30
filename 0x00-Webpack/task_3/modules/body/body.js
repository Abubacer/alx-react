// import jquery and lodash
import $ from 'jquery';
import _ from 'lodash';
// import body styling
import './body.css'


// add elements to the body
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

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

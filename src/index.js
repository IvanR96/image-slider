import _ from 'lodash';
import './style.css';


var dropdownBtn = document.querySelector('.dropbtn');

  // Get the dropdown content element
  var dropdownContent = document.querySelector('.dropdown-content');

  // Add event listener to the dropdown button
  dropdownBtn.addEventListener('click', function() {
    // Toggle the "open" class on the dropdown content
    dropdownContent.classList.toggle('open');
  });
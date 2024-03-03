import _ from 'lodash';
import './style.css';


var dropdownBtn = document.querySelector('.dropbtn');

  
  var dropdownContent = document.querySelector('.dropdown-content');

  
  dropdownBtn.addEventListener('click', function() {
    
    dropdownContent.classList.toggle('open');
  });
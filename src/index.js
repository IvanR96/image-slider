import _ from 'lodash';
import './style.css';


const dropdownBtn = document.querySelector('.dropbtn');

  
  const dropdownContent = document.querySelector('.dropdown-content');

  
  dropdownBtn.addEventListener('click', function() {
    
    dropdownContent.classList.toggle('open');
  });

  // convert to rb file
import _ from 'lodash';
import './style.css';


const div = document.getElementById('content');

const para = document.createElement('p');

para.textContent = "This is a js Test!";

div.appendChild(para);
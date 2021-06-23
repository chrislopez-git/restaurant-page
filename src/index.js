import startScreen from './start.js';
import menuScreen from './menu.js';
import contactScreen from './contact.js';
import aboutScreen from './about.js';
import './style.css';

console.log("hello nice to meet you!");
startScreen();

// navbar event listeners
document.getElementById("home").addEventListener("click", startScreen); 
document.getElementById("menu").addEventListener("click", menuScreen); 
document.getElementById("contact").addEventListener("click", contactScreen); 
document.getElementById("about").addEventListener("click", aboutScreen); 

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
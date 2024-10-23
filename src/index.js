import './styles.css';
import { loadHome } from './modules/home.js';
import { loadMenu } from './modules/menu.js';
import { loadCareers } from './modules/careers.js';
import { loadAbout } from './modules/about.js'

loadHome(); // Load the home content initially

// Event listeners for buttons to switch content
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('homeButton').addEventListener('click', loadHome);
    document.getElementById('menuButton').addEventListener('click', loadMenu);
    document.getElementById('careersButton').addEventListener('click', loadCareers);
    document.getElementById('aboutButton').addEventListener('click', loadAbout);
});
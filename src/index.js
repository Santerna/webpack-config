import appImage from './assets/app.png';
import './styles/index.scss';

// Create heading node
const heading = document.createElement('h1');
heading.textContent = 'Interesting!';

const img = document.createElement('img');
img.src = appImage;

// Append heading node to the DOM
const app = document.querySelector('#root');
app.append(heading, img);
import 'reset-css';

import pathToImg from './assets/images/swirl-24.png';
import './style.css';

const img = document.createElement('img');
img.setAttribute('src', pathToImg);
img.setAttribute('alt', 'swirl');
const imgParent = document.getElementsByClassName('swirl')[0];
imgParent.append(img);
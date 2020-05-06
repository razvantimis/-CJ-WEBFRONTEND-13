import { Header } from './src/Header.js';
import { HomePage } from './src/HomePage.js'

const appDOM = document.getElementById('app');

const header = new Header(appDOM);
header.render();

const homePage = new HomePage(appDOM);
homePage.render();

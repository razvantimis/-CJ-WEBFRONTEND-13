import { FetchApi } from './classes/FetchApi';
import { HomePage } from './page/HomePage';
import { AboutPage } from './page/AboutPage';

export class App {
  constructor(appDOM) {
    this.appDOM = appDOM;
    this.fetchApi = new FetchApi('http://localhost:3000');
    this.homePage = new HomePage(this.fetchApi);
    this.aboutPage = new AboutPage();

    this.pageUrl = 'home'
    this.render();
  }

  renderContent() {
    this.contentDOM.innerHTML = "";
    switch (this.pageUrl) {
      case 'home': {
        const homeDOM = this.homePage.render();
        this.contentDOM.appendChild(homeDOM);
        break;
      }
      case 'about': {
        const aboutDOM = this.aboutPage.render();
        this.contentDOM.appendChild(aboutDOM);
        break;
      }
    }
  }

  switchPage({ target }) {
    const pageUrl = target.href.split("#")[1]
    this.pageUrl = pageUrl;
    this.renderContent()
  }

  renderHeader() {
    const header = document.createElement('header');
    header.classList.add('app-header');

    header.innerHTML = `
        <a href="#home" class="homeBtn">Home</a>
        <a href="#about" class="aboutBtn">About</a>
    `
    const links = header.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', this.switchPage.bind(this))
    })
    return header;
  }

  render() {
    const appHeader = this.renderHeader();

    this.contentDOM = document.createElement('div');
    this.contentDOM.classList.add('app-content')
    this.renderContent();

    this.appDOM.appendChild(appHeader);
    this.appDOM.appendChild(this.contentDOM);
  }
}



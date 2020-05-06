import { Header } from './Header.js';
import { HomePage } from './HomePage.js'
import { AboutPage } from './AboutPage.js'

class App {
  constructor(appDOM) {
    this.appDOM = appDOM;
    this.pageContent = document.createElement('div');
  }

  navigationEvent() {
    const links = document.querySelectorAll('header > a');
    console.log(links)
    links[0].addEventListener('click', (event) => {
      this.renderPage(event.target.hash);
    })
    links[1].addEventListener('click', (event) => {
      this.renderPage(event.target.hash);
    })
  }

  renderPage(hash) {
    // sa stergem ce avem inaite
    this.pageContent.innerHTML = "";
    // this.pageContent.childNodes[0].remove()
    switch (hash) {
      case '#home': {
        const homePage = new HomePage(this.pageContent);
        homePage.render();
        break;
      }
      case '#about': {
        const aboutPage = new AboutPage(this.pageContent);
        aboutPage.render();
        break;
      }
    }

  }

  render() {
    const header = new Header(this.appDOM);
    header.render();
    this.navigationEvent();

    this.renderPage(window.location.hash);

    this.appDOM.appendChild(this.pageContent)
  }
}

export { App }

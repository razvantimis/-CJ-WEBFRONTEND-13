class AboutPage {
  constructor(appDOM) {
    this.appDOM = appDOM;
  }

  render() {
    const aboutDOM = document.createElement('div');
    aboutDOM.classList.add('about-page');

    aboutDOM.innerHTML = `
    <h2>About</h2> 
    Ceva despre noi 
    `

    this.appDOM.appendChild(aboutDOM);
  }
}

export { AboutPage }
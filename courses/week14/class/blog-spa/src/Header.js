class Header {
  constructor(appDOM) {
    this.appDOM = appDOM;
  }

  render() {
    /*
      <header>
        <a href="./index.html" class="homeBtn">Home</a>
        <a href="./index.html" class="aboutBtn">About</a>
      </header>
    */

    const header = document.createElement('header');

    header.innerHTML = `
        <a href="./index.html#home" class="homeBtn">Home</a>
        <a href="./index.html#about" class="aboutBtn">About</a>
    `;

    this.appDOM.appendChild(header);
  }
}

export { Header }
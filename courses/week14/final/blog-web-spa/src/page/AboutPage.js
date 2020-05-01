export class AboutPage {

  render() {
    this.aboutDOM = document.createElement('div');
    this.aboutDOM.classList.add('about-page')
    this.aboutDOM.innerHTML = `Ceva despre voi`
    return this.aboutDOM;
  }
}
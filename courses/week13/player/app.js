// un div ( Player ), iar daca apasam arrow up, sa il miscam
class Player {
  constructor() {
    this.div = this.afisare();
    this.miscare();
  }

  miscare() {
    console.log('miscare', this)
    document.addEventListener('keyup', (event) => {
      console.log(this)
      if (event.keyCode === 40) { // key down
        // logica de miscare
        const oldTop = parseInt(this.div.style.top);
        this.div.style.top = `${oldTop + 20}px`;
        console.log('arrow down', this.div.style.top)
      }
    })
  }

  afisare() {
    const div = document.createElement('div');
    div.style.width = "20px";
    div.style.height = "20px";
    div.style.backgroundColor = "red";
    div.style.position = "absolute";
    div.style.top = "20px"
    div.style.left = "20px"

    document.body.appendChild(div);

    return div;

  }
}

const player1 = new Player();


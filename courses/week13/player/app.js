/*
 Player ( un simplu div ), 
 iar daca apasam arrow down, sa il miscam in jos
 */
class Player {
  constructor() {
    this.div = Player.afisare();
    this.miscare();
  }

  // logica de miscare
  miscare() {
    console.log('miscare', this)
    document.addEventListener('keyup', (event) => {
      // aici avem un arrow function, 
      // aceste arrow functi sunt speciale pentru
      // ca copiaza contextul de mai sus 
      // ( in cazul nostru, this din metoda miscare())
      console.log(this)
      if (event.keyCode === 40) { // key down
        // logica de miscare
        const oldTop = parseInt(this.div.style.top);
        this.div.style.top = `${oldTop + 20}px`;
        console.log('arrow down', this.div.style.top)
      }
    })
  }

  // afisarea div-ului
  static afisare() {
    const div = document.createElement('div');
    const { style } = div;
    style.width = "20px";
    style.height = "20px";
    style.backgroundColor = "red";
    style.position = "absolute";
    style.top = "20px"
    style.left = "20px"

    document.body.appendChild(div);



    return div;

  }
}

const player1 = new Player();


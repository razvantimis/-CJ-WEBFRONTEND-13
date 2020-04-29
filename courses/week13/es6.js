// es6 - 2015
// class
// let,const
// arrow function

// es = ECMAScript



// hosting se aplica la functii si la var
console.log(name);
run();

function run() {
  // code
}
var name = "nichita"
// es6 declarati - scope block - {}

let name = "alex"
const age = 23;

function show() {
  if (true) {
    let a = 10;
  }
  console.log(a);
}
show()

// functii - evitam repetarea codului
function run(param1, param2) {

}

// es6 arrow function
const fn1 = function () { }

var numeFunctie = () => {
  console.log(this) // preia context-ul de mai sus
  // cod
}

var returneaza3 = () => 3

// class - nu se aplica hosting pe clase
class Food {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  init(width) {
    console.log(this)
  }
}

// mostenirea cu extends
class Pizza extends Food {
  constructor(x, size) {
    super(x);
    // este acelasi lucru cu super(x,y) - 
    // super este defapt constructorul de la Food
    // { this.x = x;  this.y = y; }

    this.size = "xxl"
  }

  init() {
    console.log('te')
  }

  eat() {
    console.log('cu mana')
  }
}
const food1 = new Pizza(1, 10);





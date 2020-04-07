function Person() {
    // console.log(this);
    // this.name = "Alex"
}
Object.prototype.name = "Razvan";
const person1 = new Person();
console.log(person1)
console.log(person1.name);
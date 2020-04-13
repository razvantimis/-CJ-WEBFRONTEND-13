// callback function
document.body.addEventListener('click', function () {
  // this este contextul unde se excuta functie, 
  // in cazul acesta va fi document.body deci this = document.body
  console.log(this);
});
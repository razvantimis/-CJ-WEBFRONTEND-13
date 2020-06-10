// function start(callback) {

//   if (1 = 1) {
//     callback()
//   }
// }

// start(function () {
//   console.log('my fn')
// })


function start(callback) {

  if (1 = 1) {
    const isValid = callback()
  }
}

function myFn() {
  console.log('my fn')
  return true
}

start(myFn)
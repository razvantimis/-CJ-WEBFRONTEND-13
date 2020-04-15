var apiURL = "https://games-world.herokuapp.com";
// promise callback
// function getGamesList(callbackFunction) {
//   fetch(apiURL + "/games", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded"
//     }
//   }).then(function (response) {
//     return response.json();
//   }).then(function (arrayOfGames) {
//     callbackFunction(arrayOfGames);
//   });
// }

// getGamesList(function (arrayOfGames) {

//   console.log(arrayOfGames)
// })

//async await

async function getGamesList() {
  const response = await fetch(apiURL + "/games", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  });
  const arrayOfGames = response.json();

  return arrayOfGames;
}


async function startApp() {
  const arrayOfGames = await getGamesList();
  console.log(arrayOfGames)
  for (var i = 0; i < arrayOfGames.length; i++) {
    createDomElement(arrayOfGames[i]);
  }
}

startApp();

// getGamesList().then(function (arrayOfGames) {
//   for (var i = 0; i < arrayOfGames.length; i++) {
//     createDomElement(arrayOfGames[i]);
//   }
// })

function createDomElement(gameObj) {
  var container1 = document.querySelector('.container');
  const gameELement = document.createElement("div");
  gameELement.innerHTML = `<h1>${gameObj.title}</h1> 
                      <img src="${gameObj.imageUrl}" />
                      <p>${gameObj.description}</p> 
                      <button class="delete-btn" id="${gameObj._id}">Delete Game</button>
                      <button class="update-btn" id="${gameObj._id}">Edit Game</button>`;

  container1.appendChild(gameELement);
}
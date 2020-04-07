async function fetchGame() {
    const response = await fetch('https://games-world.herokuapp.com/games')
    return response.json();
}

async function startApp() {
    const data = await fetchGame();
    console.log(data)
}
startApp()
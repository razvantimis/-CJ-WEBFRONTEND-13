async function fetchGame() {
    const response = await fetch('https://games-world.herokuapp.com/games')
    console.log(await response.json())

}
console.log("start")

console.log("end")

// async function startApp() {
//     const data = await fetchGame();
//     console.log(data)
// }
// startApp()
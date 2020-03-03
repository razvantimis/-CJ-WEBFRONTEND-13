
// <div>
//    <h1> Title {title number} </h1>
//    <p> This is content <p>
// </div>

function addParagraph(text, element) {
    const newP = document.createElement("p");
    newP.innerText = text;
    element.appendChild(newP);
}

function addTitle(title, element) {
    const h1 = document.createElement("h1");
    h1.innerText = title;
    element.appendChild(h1);
}

function creatBox(count, color) {
    const containerBox = document.createElement('div');
    containerBox.classList.add('box');
    containerBox.style.background = color;

    addTitle("title " + count, containerBox);
    addParagraph("This is content " + count, containerBox);

    // event
    containerBox.addEventListener('click', function () {
        containerBox.style.background = getRandomColor();
    });

    return containerBox;
}

const colors = ['red', 'blue', 'green', 'yellow'];
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

for (let count = 0; count < 10; count++) {
    const color = getRandomColor();
    const box = creatBox(count, color);

    document.body.querySelector('.box-list').appendChild(box);
}
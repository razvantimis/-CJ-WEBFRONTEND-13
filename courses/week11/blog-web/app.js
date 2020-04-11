// post, comment
// aici cream un obiect cu ajutorul clasei Post
const post1 = new Post(1, "alex", "12/03/2020", "Titlu 1", "buna, primul post");
const post2 = new Post(1, "razvan", "12/03/2020", "Titlu 2", " buna, a doi lea post");

const com1 = new Comment(1, "razvan", "foarte tare")
const com2 = new Comment(2, "alex", "foarte rau")

// adaugam comment la un obiect post
post1.addCommentToList(com1)
post2.addCommentToList(com2)

const listPost = [post1, post2]

// afisam posturile in HTML
for (let i = 0; i < listPost.length; i++) {
    // obtinem reprezentarea postului din HTML
    const postNode = listPost[i].display();
    document.getElementById('listOfPost').appendChild(postNode);
}
// post, comment, user

function Post(id, author, date, title, text) {
    this.id = id
    this.author = author;
    this.title = title;
    this.text = text;
    this.date = date;
    this.commentList = [];
}
// creaza reprezentare unei post in HTML
Post.prototype.render = function () {


    const containerListComment = document.createElement('div');
    containerListComment.classList.add('comment-list')

    // parcurgem lista de comentari
    for (let i = 0; i < this.commentList.length; i++) {
        const comment = this.commentList[i];

        const commentNode = comment.render();
        containerListComment.appendChild(commentNode);

    }

    const containerPost = document.createElement('div');
    containerPost.classList.add('post')

    containerPost.innerHTML = `
    <h1>${this.title}</h1>
    <p> ${this.text}</p>
    `
    containerPost.appendChild(containerListComment)
    return containerPost;
}

// adauga commentariu in memory
Post.prototype.addCommentToList = function (comment) {
    this.commentList.push(comment);
}




function Comment(id, user, text) {
    this.id = id;
    this.user = user;
    this.text = text;
}
// creaza reprezentare unui Comment in html
Comment.prototype.render = function () {
    const containerComment = document.createElement('div');
    containerComment.setAttribute("id", this.id)
    containerComment.innerHTML = `
    <span>${this.user}</span>
    <b>${this.text}</b>
    `
    return containerComment;
}




const post1 = new Post(1, "alex", "12/03/2020", "Titlu 1", "buna, primul post");
const post2 = new Post(1, "razvan", "12/03/2020", "Titlu 2", " buna, a doi lea post");

const com1 = new Comment(1, "razvan", "foarte tare")
const com2 = new Comment(2, "alex", "foarte rau")
com2.toString()

post1.addCommentToList(com1)
post2.addCommentToList(com2)

const listPost = [post1, post2]

for (let i = 0; i < listPost.length; i++) {
    const postNode = listPost[i].render();
    document.getElementById('listOfPost').appendChild(postNode);
}
class Post {
  constructor(id, author, title, text, data) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.text = text;
    this.data = data;
  }

  // sa returneze reprezentarea html a unui Post
  render() {
    const containerPost = document.createElement('div');
    containerPost.classList.add('post')

    containerPost.innerHTML = `
      <h1>${this.title}</h1>
      <p> ${this.text}</p>
      `
    return containerPost;


  }
}

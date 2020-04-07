async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return response.json();
}
async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
}

async function startApp() {
    const users = await fetchUsers();
    const posts = await fetchPosts();
    console.log(users)
    console.log(posts)
}
startApp()
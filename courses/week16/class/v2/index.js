const appDOM = document.getElementById('app');
/*
https://babeljs.io/en/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=DwIwrgLhD2B2AEcDCAbAlgYwNYF4DeAFAJTw4B88EAFmgM4B0tAphAMoQCGETBe86WJgBMAXJQBOYJvAC-RGWQBQ8FfAAyaQYuAB6cFDhkgA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.4.3
*/
// versiune - react
function Post() {
  const post1Title = React.createElement('h1', null, "Post1")
  const post1Content = React.createElement('p', null, "Text post")
  const post1 = React.createElement('div', null, post1Title, post1Content)
  return post1
}

// versiune jsx
function Post() {
  return (
    <div>
      <h1>Post1</h1>
      <p>text post</p>
    </div>
  )
}


const posts = [Post(), Post()]
const myApp = React.createElement("div", null, posts);

ReactDOM.render(myApp, appDOM)

// versiune dom
function Post() {
  const title = document.createElement('h1')
  title.innerText = "Post1"
  const content = document.createElement('p')
  content.innerText = "Content"

  const post = document.createElement('div');

  post.appendChild(title);
  post.appendChild(content);

  return post;


}

const posts = [Post(), Post()]

const myApp = document.createElement('div');
posts.forEach(post => {
  myApp.appendChild(post);
})
appDOM.appendChild(myApp)






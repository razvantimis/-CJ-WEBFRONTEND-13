function FetchApi(baseServerUrl) {
  this.baseServerUrl = baseServerUrl;
}

FetchApi.prototype.getPosts = function () {
  return fetch(`${this.baseServerUrl}/posts`).then(
    function (response) {
      return response.json()
    }
  )
}

FetchApi.prototype.getPostById = async function (postId) {
  const response = await fetch(`${this.baseServerUrl}/posts/${postId}`);
  const postServer = await response.json();
  return postServer;
}
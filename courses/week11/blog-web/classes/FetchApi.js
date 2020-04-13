function FetchApi(baseServerUrl) {
  this.baseServerUrl = baseServerUrl;
}

FetchApi.prototype.getPosts = function () {
  console.log('getPosts')


  return fetch(`${this.baseServerUrl}/posts`).then(
    function (response) {
      return response.json()
    }
  )
}
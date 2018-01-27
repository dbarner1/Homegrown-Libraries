function apiRequest(type) {
  var BASE_URL = 'http://example-site.com'
  var PATH = '/insert-path-here'

  var API_KEY_PARAM = 'INSERT_HERE';
  var PARAMS = API_KEY_PARAM + OTHER_PARAMS;

  var url = BASE_URL + PATH + '.json?'+ PARAMS;

  fetch(url)
    .then(response => response.json())
    .then(function(response) {
      let responseReceived = response;
    })
    .catch(error => console.error("No data returned"));

    return responseReceived;
}

export {apiRequest};

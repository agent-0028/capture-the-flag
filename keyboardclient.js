const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

var GameClient = require('game-client');

var defaultClient = GameClient.ApiClient.instance;

// Configure API Endpoint
defaultClient.basePath = "http://td-capture-the-flag.herokuapp.com/api" // https://example.com/api

// Configure Bearer access token for authorization: token
var token = defaultClient.authentications['token'];
token.accessToken = "chris@testdouble.com" // alice@example.com

var api = new GameClient.GameApi()

api.getPlayer().then(function(data) {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data, null, '  '));
}, function(error) {
  console.error(error);
});

process.stdin.on('keypress', (str, key) => {
  if (key.name === 'up') {
    api.postMoves('north')
  }
  if (key.name === 'right') {
    api.postMoves('east')
  }
  if (key.name === 'down') {
    api.postMoves('south')
  }
  if (key.name === 'left') {
    api.postMoves('west')
  }
});

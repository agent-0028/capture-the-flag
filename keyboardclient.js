const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

var GameClient = require('game-client');

var defaultClient = GameClient.ApiClient.instance;

// Configure API Endpoint
defaultClient.basePath = "http://td-capture-the-flag.herokuapp.com/api" // https://example.com/api

// Configure Bearer access token for authorization: token
var token = defaultClient.authentications['token'];
token.accessToken = process.env.PLAYER_EMAIL

var api = new GameClient.GameApi()

api.getPlayer().then(function(data) {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data, null, '  '));
}, function(error) {
  console.error(error);
});

process.stdin.on('keypress', (str, key) => {
  if (key.name === 'up') {
    api.postMoves('north').then(function(data) {
      console.log('Moved North. Returned data: ' + JSON.stringify(data, null, '  '));
    }, function(error) {
      console.error(error);
    });
  }
  if (key.name === 'right') {
    api.postMoves('east').then(function(data) {
      console.log('Moved East. Returned data: ' + JSON.stringify(data, null, '  '));
    }, function(error) {
      console.error(error);
    });
  }
  if (key.name === 'down') {
    api.postMoves('south').then(function(data) {
      console.log('Moved South. Returned data: ' + JSON.stringify(data, null, '  '));
    }, function(error) {
      console.error(error);
    });
  }
  if (key.name === 'left') {
    api.postMoves('west').then(function(data) {
      console.log('Moved West. Returned data: ' + JSON.stringify(data, null, '  '));
    }, function(error) {
      console.error(error);
    });
  }
  if (key.name === 'q') {
    process.exit()
  }
});

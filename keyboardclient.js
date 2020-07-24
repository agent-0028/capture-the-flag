const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

var keybindings = {
  vim: {
    N: 'k',
    E: 'l',
    S: 'j',
    W: 'h'
  },
  arrow: {
    N: 'up',
    E: 'right',
    S: 'down',
    W: 'left'
  },
  gamer: {
    N: 'w',
    E: 'd',
    S: 's',
    W: 'a'
  }
}

var k = keybindings[(process.env.PLAYER_KEYS || 'arrow')]

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
  if (key.name === k.N) {
    api.postMoves('north').then(function(data) {
      console.log('Moved North. Returned data: ' + JSON.stringify(data, null, '  '));
    }, function(error) {
      console.error(error);
    });
  }
  if (key.name === k.E) {
    api.postMoves('east').then(function(data) {
      console.log('Moved East. Returned data: ' + JSON.stringify(data, null, '  '));
    }, function(error) {
      console.error(error);
    });
  }
  if (key.name === k.S) {
    api.postMoves('south').then(function(data) {
      console.log('Moved South. Returned data: ' + JSON.stringify(data, null, '  '));
    }, function(error) {
      console.error(error);
    });
  }
  if (key.name === k.W) {
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

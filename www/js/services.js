angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Trip to Bora Bora',
    lastText: '$1570/$5000',
    face: 'img/ben.png',
    date: 'Nov 26th'
  }, {
    id: 1,
    name: 'Boyfriend\'s birthday gift',
    lastText: '$10/$150',
    face: 'img/max.png',
    date: 'Oct 4th'
  }, {
    id: 2,
    name: 'Yoga Retreat',
    lastText: '$380/$400',
    face: 'img/adam.jpg',
    date: 'Dec 6th'
  }, {
    id: 3,
    name: 'Grouse Grind Gondola Pass',
    lastText: '$120/$120',
    face: 'img/perry.png',
    date: 'Dec 9th'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

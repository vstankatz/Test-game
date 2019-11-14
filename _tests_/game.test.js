import { Game } from './../src/game.js';
import { Character } from './../src/game.js'

describe('Game', () => {

  test('should take in the variable', () => {
    var newGame = new Game("Name", "Setting");
    expect(newGame.character).toEqual("Name");
    expect(newGame.setting).toEqual("Setting");
  });


  test('should give the character name and setting', () => {
      var newGame = new Game("Gimly", "Mordor");
      expect(newGame.whereAmI()).toEqual("Gimly is in the Mordor");
  });

});

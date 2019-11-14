import { Character } from './../src/game.js'


describe('Character', () => {
  test('should take in the variable', () => {
    var newCharacter = new Character("Type", "Name", "Skills");
    expect(newCharacter.type).toEqual("Type");
    expect(newCharacter.name).toEqual("Name");
    expect(newCharacter.skills).toEqual("Skills");
})
});

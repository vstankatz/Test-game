export class Game {
  constructor(character, setting) {
    this.character = character;
    this.setting = setting;
  }

  whereAmI() {
    return this.character + " is in the " + this.setting;
  }

}


export class Character {
  constructor(type, name, skills) {
    this.type = type;
    this.name = name;
    this.skills = skills;
  }
}


export class Skills extends Character{
  constructor(strength, speed, kindness){
    super(name)
    this.strength = 0;
    this.speed = 0;
    this.kindness = 0;
  }

  addStength() {
    for (var i = 0; i < this.name.length; i++) {
      this.stength += 1;
    }
  }


}

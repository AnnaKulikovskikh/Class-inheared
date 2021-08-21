export default class Character {
  constructor(name, type, health, level, attack, defend) {
    if (name.length > 2 && name.length < 11 && typeof name == 'string') {
      this.name = name;
    } else {
      throw new Error('Unimplemented');
    }
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defend = defend;
  }
}

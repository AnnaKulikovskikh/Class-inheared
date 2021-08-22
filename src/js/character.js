export default class Character {
  constructor(name) {
    if (name.length > 2 && name.length < 11 && typeof name === 'string') {
      this.name = name;
    } else {
      throw new Error('Unimplemented');
    }
    this.health = 100;
    this.level = 1;
  }
}

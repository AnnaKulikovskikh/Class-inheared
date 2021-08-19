export default class Undead extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Undead'; 
    this.attack = 25;
    this.defend = 25;
  }
}
  
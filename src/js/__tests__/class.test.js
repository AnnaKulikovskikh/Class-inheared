import Character from '../character';
import Bowerman from '../bowerman';
import Swordsman from '../swordsman';
import Magicial from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
import Daemon from '../daemon';

test('creation bowerman', () => {
  const hero1 = new Bowerman('Hood');
  expect(hero1.type).toBe('Bowerman');
});

// test('should sum', () => {
//   const result = sum([1, 2, 3]);

//   expect(result).toBe(6);
// });
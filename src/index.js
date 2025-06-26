
import Bowman from './js/bowman.js';
import Swordsman from './js/swordsman.js';
import Magician from './js/magician.js';
import Daemon from './js/daemon.js';
import Undead from './js/undead.js';
import Zombie from './js/zombie.js';

const bowman = new Bowman('Luis', 'Bowman');
const bowmanLevelUp = bowman.levelUp();
const bowmanDamage = bowman.damage(20);

const swordsman = new Swordsman('Kael', 'Swordsman');
const swordsmanLevelUp = swordsman.levelUp();
const swordsmanDamage = swordsman.damage(20);

const magician = new Magician('Jasper', 'Magician');
const magicianLevelUp = magician.levelUp();
const magicianDamage = magician.damage(20);

const daemon = new Daemon('David', 'Daemon');
const daemonLevelUp = daemon.levelUp();
const daemonDamage = daemon.damage(20);

const undead = new Undead('Eve', 'Undead');
const undeadLevelUp = undead.levelUp();
const undeadDamage = undead.damage(20);

const zombie = new Zombie('Frank', 'Zombie');
const zombieLevelUp = zombie.levelUp();
const zombieDamage = zombie.damage(20);

console.log(bowmanLevelUp);
console.log(bowmanDamage);

console.log(swordsmanLevelUp);
console.log(swordsmanDamage);

console.log(magicianLevelUp);
console.log(magicianDamage);

console.log(daemonLevelUp);
console.log(daemonDamage);

console.log(undeadLevelUp);
console.log(undeadDamage);

console.log(zombieLevelUp);
console.log(zombieDamage);


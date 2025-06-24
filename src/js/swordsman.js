import Character  from './character.js';

export default class Swordsman extends Character {
    constructor(name, type) {
        super(name, type, 100, 1, 40, 10);
        if (this.type !== 'Swordsman') {
            throw new Error('Недопустимый тип персонажа. Выберите один из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
        }
    }
}
import Character  from './character.js';

export default class Undead extends Character {
    constructor(name, type) {
        super(name, type, 100, 1, 25, 25);
        if (this.type !== 'Undead') {
            throw new Error('Недопустимый тип персонажа. Выберите один из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
        }
    }
}
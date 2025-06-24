import Character  from './character.js';

export default class Magician extends Character {
    constructor(name, type) {
        super(name, type, 100, 1, 10, 40);
        if (this.type !== 'Magician') {
            throw new Error('Недопустимый тип персонажа. Выберите один из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
        }
    }
}
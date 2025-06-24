import Character  from './character.js';

export default class Zombie extends Character {
    constructor(name, type) {
        super(name, type, 100, 1, 40, 10);
        if (this.type !== 'Zombie') {
            throw new Error('Недопустимый тип персонажа. Выберите один из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
        }
    }
}
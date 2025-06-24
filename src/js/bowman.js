
import Character  from './character.js';

export default class Bowman extends Character {
    constructor(name, type) {
        super(name, type, 100, 1, 25, 25);
        if (this.type !== 'Bowman') {
            throw new Error('Недопустимый тип персонажа. Выберите один из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
        }
    }
}
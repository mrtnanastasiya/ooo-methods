import Character  from './character.js';

export default class Zombie extends Character {
    constructor(name, type) {
        super(name, type);
        
        this.health = 15;
        this.attack = 40;
        this.defence = 10;
    }
}
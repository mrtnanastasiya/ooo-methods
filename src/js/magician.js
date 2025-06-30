import Character  from './character.js';

export default class Magician extends Character {
    constructor(name, type) {
        super(name, type);
        
        this.health = 95;
        this.attack = 10;
        this.defence = 40;
    }
}
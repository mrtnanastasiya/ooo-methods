
export default class Character {
    constructor(name, type, health = 100, level = 1, attack, defence) {
        if (new.target === Character) {
            throw new Error('Нельзя создать экземпляр абстрактного класса');
        }
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Имя должно быть строкой длиной от 2 до 10 символов');
        }

        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }
}
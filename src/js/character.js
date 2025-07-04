
export default class Character {
    constructor(name, type) {
        const types = [
            "Bowman",
            "Swordsman",
            "Magician",
            "Daemon",
            "Undead",
            "Zombie",
        ];

        if (!types.includes(type)) {
            throw new Error(
                `Тип должен быть одним из перечисленных: ${types.join(", ")}`
            );
        }

        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Имя должно быть строкой длиной от 2 до 10 символов');
        }

        this.name = name;
        this.type = type;

        this.health = undefined;
        this.level = 1;

        this.attack = undefined;
        this.defence = undefined;
    }

    
    levelUp() {
        if (this.health === 0) {
            throw new Error('Нельзя повысить уровень умершего персонажа');
        }

        this.level++;

        this.attack += Math.round(this.attack * 0.2);
        this.defence += Math.round(this.defence * 0.2);

        this.health = 100;

        // return {
        //     name: this.name,
        //     type: this.type,
        //     health: this.health,
        //     level: this.level,
        //     attack: this.attack,
        //     defence: this.defence
        // };
    }

    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100);
        } else {
            this.health = 0
        }
    }
         // return {
        //     name: this.name,
        //     type: this.type,
        //     health: this.health,
        //     level: this.level,
        //     attack: this.attack,
        //     defence: this.defence
        // };
}

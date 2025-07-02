import Magician from '../magician.js';
import { describe, test, expect, beforeEach } from '@jest/globals';

describe('Проверка персонажа Magician', () => {
    let character;
    
        beforeEach(() => {
            character = new Magician('Jasper', 'Magician', 95, 1, 10, 40);
        });
        
    test('Проверка создания персонажа', () => {
        expect(character).toEqual({
            name: 'Jasper',
            type: 'Magician',
            health: 95,
            level: 1,
            attack: 10,
            defence: 40
        });
    });

    test('Должно выдаваться сообщение об ошибке из-за недопустимого имени', () => {
        expect(() => new Magician('', 'Magician')).toThrow();
    });

    test('Должно выдаваться сообщение об ошибке из-за недопустимого типа символа', () => {
        expect(() => new Magician('Jasper', 'InvalidType')).toThrow();
    });

    test('Должен повышаться уровень, атака и защита при вызове функции LevelUp(), а здоровье не равно 0', () => {
        const initialLevel = character.level;
        const initialAttack = character.attack;
        const initialDefence = character.defence;

        character.levelUp();

        expect(character.level).toBe(initialLevel + 1);
        expect(character.attack).toBe(initialAttack + Math.round(initialAttack * 0.2));
        expect(character.defence).toBe(initialDefence + Math.round(initialDefence * 0.2));
    });

    test('Должна выдаваться ошибка при попытке повысить уровень умершего персонажа', () => {
        character.health = 0; // Устанавливаем здоровье персонажа в 0, чтобы его считать мертвым
        expect(() => character.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
    });

     test('Пересчитывается здоровье после получения урона', () => {
        const initialHealth = character.health;
        const damagePoints = 20;
        const expectedHealth = initialHealth - damagePoints * (1 - character.defence / 100);
        character.damage(damagePoints);
        expect(character.health).toBe(expectedHealth);
    });

    test('Проверка уровня жизни, если health = 0', () => {
        character.health = 0;
        character.damage(10);
        expect(character.health).toBe(0); 
    });
});
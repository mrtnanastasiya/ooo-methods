import Magician from '../magician.js';
import { describe, test, expect } from '@jest/globals';

describe('Проверка создания персонажа Magician', () => {
    test('Проверка создания персонажа', () => {
        const character = new Magician('Jasper', 'Magician');
        expect(character).toEqual({
            name: 'Jasper',
            type: 'Magician',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40
        });
    });

    test('Должно выдаваться сообщение об ошибке из-за недопустимого имени', () => {
        expect(() => new Magician('', 'Magician')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
    });

    test('Должно выдаваться сообщение об ошибке из-за недопустимого типа символа', () => {
        expect(() => new Magician('Jasper', 'InvalidType')).toThrow('Недопустимый тип персонажа. Выберите один из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    });
});
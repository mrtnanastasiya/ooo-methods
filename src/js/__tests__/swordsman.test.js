import Undead from '../undead.js';
import { describe, test, expect } from '@jest/globals';

describe('Проверка создания персонажа Undead', () => {
    test('Проверка создания персонажа', () => {
        const character = new Undead('Eve', 'Undead');
        expect(character).toEqual({
            name: 'Eve',
            type: 'Undead',
            health: 100,
            level: 1,
            attack: 25,
            defence: 25
        });
    });

    test('Должно выдаваться сообщение об ошибке из-за недопустимого имени', () => {
        expect(() => new Undead('', 'Undead')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
    });

    test('Должно выдаваться сообщение об ошибке из-за недопустимого типа символа', () => {
        expect(() => new Undead('Eve', 'InvalidType')).toThrow('Недопустимый тип персонажа. Выберите один из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    });
});
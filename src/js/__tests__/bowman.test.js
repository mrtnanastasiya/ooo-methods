import Bowman from '../bowman.js';
import { describe, test, expect } from '@jest/globals';

describe('Проверка создания персонажа Bowman', () => {
    test('Проверка создания персонажа', () => {
        const character = new Bowman('Luis', 'Bowman');
        expect(character).toEqual({
            name: 'Luis',
            type: 'Bowman',
            health: 100,
            level: 1,
            attack: 25,
            defence: 25
        });
    });

    test('Должно выдаваться сообщение об ошибке из-за недопустимого имени', () => {
        expect(() => new Bowman('', 'Bowman')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
    });

    test('Должно выдаваться сообщение об ошибке из-за недопустимого типа символа', () => {
        expect(() => new Bowman('Luis', 'InvalidType')).toThrow('Недопустимый тип персонажа. Выберите один из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    });
});
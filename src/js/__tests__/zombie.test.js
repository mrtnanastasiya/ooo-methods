import Zombie from '../zombie.js';
import { describe, test, expect } from '@jest/globals';

describe('Проверка создания персонажа Zombie', () => {
    test('Проверка создания персонажа', () => {
        const character = new Zombie('Frank', 'Zombie');
        expect(character).toEqual({
            name: 'Frank',
            type: 'Zombie',
            health: 100,
            level: 1,
            attack: 40,
            defence: 10
        });
    });

    test('Должно выдаваться сообщение об ошибке из-за недопустимого имени', () => {
        expect(() => new Zombie('', 'Zombie')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
    });

    test('Должно выдаваться сообщение об ошибке из-за недопустимого типа символа', () => {
        expect(() => new Zombie('Frank', 'InvalidType')).toThrow('Недопустимый тип персонажа. Выберите один из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    });
});
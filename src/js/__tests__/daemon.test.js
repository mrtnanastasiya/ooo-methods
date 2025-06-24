import Daemon from '../daemon.js';
import { describe, test, expect } from '@jest/globals';

describe('Проверка создания персонажа Daemon', () => {
    test('Проверка создания персонажа', () => {
        const character = new Daemon('David', 'Daemon');
        expect(character).toEqual({
            name: 'David',
            type: 'Daemon',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40
        });
    });

    test('Должно выдаваться сообщение об ошибке из-за недопустимого имени', () => {
        expect(() => new Daemon('', 'Daemon')).toThrow('Имя должно быть строкой длиной от 2 до 10 символов');
    });

    test('Должно выдаваться сообщение об ошибке из-за недопустимого типа символа', () => {
        expect(() => new Daemon('David', 'InvalidType')).toThrow('Недопустимый тип персонажа. Выберите один из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    });
});
import Character from '../character.js';
import { describe, test, expect } from '@jest/globals';

describe('Character', () => {
    test('Выдает ошибку при попытке создать экземпляр абстрактного класса', () => {
    expect(() => {
        new Character('Name', 'Type');
    }).toThrow('Нельзя создать экземпляр абстрактного класса');
    });
});
import { add, subtract } from './calculator';
import { test } from 'vitest';

test('should add properly two numbers', () => {
    add(2, 3);
});

test('should subtract properly two numbers', () => {
    subtract(5, 3);
});
import { add, subtract } from './calculator';
import { test } from 'vitest';

test('should run add function', () => {
    add(2, 3);
});

test('should run subtract function', () => {
    subtract(5, 3);
});
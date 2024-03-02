import { expect, describe, test } from '@jest/globals';
import {testable} from '../index';

describe('Dummy test', () => {
    test('Testable method returns true.', async () => {
        expect(testable()).toBe(true);
    });
});

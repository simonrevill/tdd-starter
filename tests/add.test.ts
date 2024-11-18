import { add } from "../src/add";

describe('add tests', () => {
    it('should add 2 and 2 and return 4', () => {
        expect(add(2, 2)).toBe(4);
    });
});
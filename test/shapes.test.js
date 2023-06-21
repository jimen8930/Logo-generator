// Constructor Arithmetic is imported.
const Shape =require("../lib/shapes");
// A testing suite for the logo is created.
describe('Shape', () => {
    describe ('setColor', () => {
        it('should set the color property', () => {
            const shape = new Shape();
            shape.setColor('red');
            expect(shape.color).toBe('red');

        });
    });
});

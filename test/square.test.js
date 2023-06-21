const Square =require("../lib/shapes.js");

describe("Square", () => {
    Test("renders a square SVG element with optional text", () => {
        const square = new Square();

        const expectedSVG =` 
        <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="${circle.radius}" fill="${circle.shapeColor}" />
        ${circle.text ? `<text x="150" y="110" text-anchor="middle" fill="${circle.textColor}" font-size="40" alignment-baseline="middle">${circle.text}</text>` : ''}
      </svg>
      `;
    });
});
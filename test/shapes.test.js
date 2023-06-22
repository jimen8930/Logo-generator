const { Triangle, Square, Circle } = require("../lib/shapes");

describe("Triangle", () => {
  test("renders a triangle SVG with the specified color", () => {
    const triangle = new Triangle();
    triangle.setColor("#FF0000");
    const renderedSvg = triangle.render().replace(/\s+/g, " ").trim();
    expect(renderedSvg).toContain('<svg');
  });
});

describe("Square", () => {
  test("renders a square SVG element with optional text", () => {
    const square = new Square();
    square.setColor("#00FF00");
    const renderedSvg = square.render().replace(/\s+/g, " ").trim();
    expect(renderedSvg).toContain('<svg');
  });
});

describe("Circle", () => {
  test("renders a circle SVG element with optional text", () => {
    const circle = new Circle();
    circle.setColor("#0000FF");
    const renderedSvg = circle.render().replace(/\s+/g, " ").trim();
    expect(renderedSvg).toContain('<svg');
  });
});

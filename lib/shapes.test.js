const { Circle } = require("./shapes");

const shape2 = new Circle();
shape.setColor("white");
expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`);
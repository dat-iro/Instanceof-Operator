class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(instance) {
    let area = 0;
    if(instance instanceof Square) {
      area = instance.side * instance.side;
    } else if(instance instanceof Rectangle) {
      area = instance.width * instance.height;
    } else if (instance instanceof Circle) {
      area = instance.radius * instance.radius * Math.PI
    }
    return area;
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
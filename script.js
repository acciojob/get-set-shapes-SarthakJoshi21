class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get width() {
    return this._width;
  }

  set width(width)   
 {
    if (width <= 0) {
      throw new Error("Width must be a positive integer");
    }
    this._width = width;
  }

  get height() {
    return this._height;
  }

  set height(height) {
    if (height <= 0) {
      throw new Error("Height must be a positive integer");
    }
    this._height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  getPerimeter() {
    return 4 * this.width;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
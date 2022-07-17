class Shape {
  public x?: number;
  public y?: number;
  public color?: string;

  constructor(x?: number, y?: number, color?: string) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  clone(): Shape {
    return new Shape(this.x, this.y, this.color);
  }
}

class Rectangle extends Shape {
  public width?: number;
  public height?: number;

  constructor(source: Rectangle) {
    super(source.x, source.y, source.color);
    this.width = source.width;
    this.height = source.height;
  }

  override clone(): Shape {
    return new Rectangle(this);
  }
}

export function clientCode(): void {
  const shape = new Shape(5, 15, 'blue');
  const rectangle = new Rectangle(shape);
  rectangle.width = 100;
  rectangle.height = 30;

  const rectangle1 = rectangle.clone();
  console.log(rectangle);
  console.log(rectangle1);

  rectangle.width = 160;
  const rectangle2 = rectangle.clone();
  console.log(rectangle2);
  console.log(rectangle2.clone());
}

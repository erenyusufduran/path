void main(List<String> args) {}

abstract class Shape {
  double calculateArea();
  double calculatePerimeter();

  void hello() {
    print("I am from shaping class!");
  }
}

class Square extends Shape {
  int edge;

  Square(this.edge);

  @override
  double calculateArea() {
    return (this.edge * this.edge).toDouble();
  }

  @override
  double calculatePerimeter() {
    return (this.edge * 4).toDouble();
  }

  @override
  void hello() {
    super.hello();
  }
}

class Rectengle extends Shape {
  int width;
  int length;

  Rectengle(this.width, this.length);

  @override
  double calculateArea() {
    return (this.width * this.length).toDouble();
  }

  @override
  double calculatePerimeter() {
    return ((this.width + this.length) * 2).toDouble();
  }

  @override
  void hello() {
    print("I am from rectengle class"); 
  }
}

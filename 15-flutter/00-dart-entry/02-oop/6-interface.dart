void main(List<String> args) {}

abstract class Animals {}

abstract class Flyers {
  void fly();
}

abstract class Barkers {
  void bark();
}

abstract class Runners {
  void run();
}

// normally can't inherit 2 class, but with implements keyword it takes as a interface.
class Dog implements Barkers, Runners, Animals {
  @override
  void bark() {
    // TODO: implement bark
  }

  @override
  void run() {
    // TODO: implement run
  }
}

class Bird implements Flyers, Animals {
  @override
  void fly() {
    // TODO: implement fly
  }
}

class Human implements Runners {
  @override
  void run() {
    // TODO: implement run
  }
}

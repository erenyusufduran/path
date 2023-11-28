class Stack<T> {
  List<T> _list = <T>[];

  void push(T newElement) {
    _list.add(newElement);
  }

  T pop() {
    return _list.removeLast();
  }
}

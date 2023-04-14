export abstract class Sorter {
  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;

  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}

/*
 * Interfaces
 * - Sets up a contract between different classes.
 * - Use when we have very different objects that we want to work together.
 * - Promotes loose coupling
 *
 * INheritance / Abstract Classes
 * - Sets up a contract between different classes.
 * - Use when we are trying to build up a definition of an object.
 * - Strongly couples classes together.
 */

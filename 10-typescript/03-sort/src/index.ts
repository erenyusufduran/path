import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 2, -1, 0]);
const charactersCollection = new CharactersCollection("Xazayb");

const sorter = new Sorter(numbersCollection);
const stringSorter = new Sorter(charactersCollection);

// sorter.sort();
// console.log(numbersCollection.data);

// stringSorter.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.add(23);

const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
console.log(linkedList.print());

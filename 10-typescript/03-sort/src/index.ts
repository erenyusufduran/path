import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 2, -1, 0]);
const charactersCollection = new CharactersCollection("Xazayb");

const sorter = new Sorter(numbersCollection);
const stringSorter = new Sorter(charactersCollection);

sorter.sort();
console.log(numbersCollection.data);

stringSorter.sort();
console.log(charactersCollection.data);

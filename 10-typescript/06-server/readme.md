## Integration Issues

### Cons

- Type definition files alone can't express what is going on in the JS world accurately.
- Type definition files provided to us aren't always accurate.
- Inputs to a server (or any program with external inputs) are not guaranteed to exist, or be of the correct type.

### Pros

- Addressing these type issues with Typescript can force us to write better code.

---

> Messaging TS and Express to work better together will take a lot of time + effort.

- Must get one of two outcomes
  - Get better type safety (help TS do a better job of catching errors)
  - Significantly enhance the developer experience

---

- Node executes our code
- Class definition read in - decorators are executed
- Decorators associate route configuration info with the method by using metadata
- All method decorators run
- Class decorator of @controller runs last
- Class decorator reads metadata from each method, adds complete route definitons to router

## Metadaata

- Proposed feature to be added to JS (and thus, TS)
- Snippets of info that can be tied to a method, property, or class definiton
- Can be used for super custom stuff
- Typescript will (optionally) provide type information as metadata
- Read and written using the reflect-metadata package

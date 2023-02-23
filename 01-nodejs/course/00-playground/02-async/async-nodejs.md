# Call Stack, Callback Queue & Event Loop

## Asynchronous Node.js

    const x = 1;
    const y = x + 2;
    console.log("Sum is: " , y);

### **Call Stack**

1. Firstly main() function gets pushed onto the call stack.
2. log("Sum is 3")

---

    const listLocations = (locations) => {
        locations.forEach((location) => {
            console.log(location)
        })
    }
    const myLocations = ["Philly", "NYC"];
    listLocations(myLocations);

### **Call Stack**

1. Once again the first thing the main function gets pushed onto the call stack.
2. listLocations([...])
3. forEach(...)
4. anonymous("Philly")
5. console.log("Philly")
6. Then before 5th and after 4th steps are exits call stack.
7. anonymous("NYC");
8. console.log("NYC");
9. Then before 8th and after 7th steps are exits call stack.
10. forEach exits call stack.
11. listLocation exits call stack.
12. main() function exits call stack.

---

    setTimeout(() => {
        console.log("Two seconds!");
    }, 2000);
    setTimeout(() => {
        console.log("Zero seconds!");
    }, 1000);
    console.log("Finishing up");

### **Call Stack**

1. Once again the first thing the main function gets pushed onto the call stack.
2. setTimeout(..., 2000)
3. 2nd step is exits the call stack and goes to Node APIs and waiting there for 2 seconds.
4. setTimeout(..., 0) comes call stack and goes to Node APIs.
5. In 4rd steps setTimeout function is a callback, so it goes from Node APIs to Callback Queue. So it is ready to be executed. But before it can be executed, it needs to be added onto the call stack.
6. console.log("Finishing up") and then pop off the call stack.
7. main() function is done so from here, main gets removed.
8. In this step call stack is fully empty. So it will look at for callback queue.
9. So it takes the item from event loop.
10. console.log("Zero seconds!") and then removed.
11. Then program waits for Node APIs.
12. After two sec setTimeout(..., 2000) comes to the callback queue.
13. Event loop notice that and it notices the call stack is empty, which means it's ready to run. It takes that callback, bringing it up to the call stack, and executes it.
14. console.log("Two seconds!") and then removed.

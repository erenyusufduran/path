# Dijkstra's Algorithm

Finds the shortest path between two vertices on a graph.

- *What's the fastest way to get from point A to point B?*

> Edsger Dijkstra was a Dutch programmer, physicist, essayist. He helped to advance the field of *computer science* from an **art** to an academic discipline.

> What is the shortest way to travel from *Rotterdam to Groningen*, in general: from given city to given city. *It is the algorithm for the shortest path*, which I designed in about twenty minutes. One morning I was shopping in *Amsterdam* with my youngest fiancee, and tired, we sat down on the cafe to drink a cup of coffee and I was just thinking about whether I could do this, and I then designed the algorithm for the shortest path. As I said, it was a twenty-minute invention. Eventually that algorithm became, to my great amazement, one of the cornerstones of my fame. - **Edsger Dijkstra**

### Why is it Useful?
- GPS - finding fast route
- Network Routing - finds open shortest path for data
- Biology - used to model the spread of viruses among humans
- Airline Tickets - finding cheapest route to your destination
- Many others..

### The Approach
1. Every time we look to visit a new node, we pick the node with the smallest known distance to visit first.
2. Once we've moved to the node we're going to visit, we look at each of its neighbors
3. For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking *from the starting node*.
4. If the new total distance to a node is less than the previous total, we store the new shorter distance for that node.

### Dijkstra Pseudo Code
1. Function should accept a starting and ending vertex.
2. Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0.
3. After setting a value in the distances object, add each vertex with a priority of infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin.
4. Create another object called previous and set each key to be every vertex in the adjacency list with a value of null.
5. Start looping as long as there is anything in the priority queue.
    1. Dequeue a vertex from the priority queue.
        - If that vertex is the same as the ending vertex - we are done!
        - Otherwise loop through each value in the adjacency list at the vertex.
        - Calculate the distance to that vertex from the starting vertex.
        - If the distance is less than what is currently stored in our distances object:
            - Update the distances object with new lower distance.
            - Update the previous object to contain that vertex.
            - Enqueue the vertex with the total distance from the start node.
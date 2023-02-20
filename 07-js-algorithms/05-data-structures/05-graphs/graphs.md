# GRAPHS

A **graph data structure** consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected **graph** or a set of ordered pairs for directed **graph**.

- Nodes + Connections

### Uses for Graphs
- Social Networks
- Location / Mapping
- Routing Algorithms
- Visual Hierarchy
- File System Optimizations
- **EVERYWHERE!**

### Graph Terms
- **Vertex** - a node
- **Edge** - connection between nodes
- **Weighted/Unweighted** - values assigned to distances between vertices
- **Directed/Undirected** - directions assigned to distanced between vertices

### BIG O
- **|V|** - number of vertices
- **|E|** - number of edges

|   Operation   | Adjacency List   | Adjacency Matrix |
|---------------|------------------|------------------|
| Add Vertex    |       O(1)       |    O(\|V**2\|)   |
|    Add Edge   |       O(1)       |       O(1)       |
| Remove Vertex | O(\|V\| + \|E\|) |    O(\|V**2\|)   |
|  Remove Edge  |     O(\|E\|)     |       O(1)       |
|     Query     | O(\|V\| + \|E\|) |       O(1)       |
|    Storage    | O(\|V\| + \|E\|) |    O(\|V**2\|)   |

|               Adjacency List              |            Adjacency Matrix            |
|:-----------------------------------------:|:--------------------------------------:|
| Can take up less space (in sparse graphs) | Takes up more space (in sparse graphs) |
|      Faster to iterate over all edges     |    Slower to iterate over all edges    |
|   Can be slower to lookup spesific edge   |     Faster to lookup spesific edge     |

- Most data in the real-world tends to lend itself to sparser and/or larger graphs. We will use **Adjacency List**.

### Adding a Vertex
1. Write a method called addVertex, which accepts a name of a vertex
2. It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array.

### Adding an Edge
1. This func should accept two vertices, we can call them vertex1 and vertex2
2. The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
3. The function should find in the adjacency list the key of vertex2 and push vertex1 to the array

### Removing an Edge
1. This func should accept two vertices, we can call them vertex1 and vertex2
2. The function should reassign the key of vertex1 to be an array that does not contain vertex2
3. The function should reassign the key of vertex2 to be an array that does not contain vertex1

### Removing a Vertex
1. This func should accept a vertex to remove
2. The function should loop as long as there are any other vertices in the adjacency list for that vertex
3. Inside of loop, call our **removeEdge** function with the vertex we are removing and any values in the adjacency list for that vertex
4. Delete the key in the adjacency list for that vertex

---

## Graph Traversal

### Uses
- Peer to peer networking
- Web crawlers
- Finding **closest** matches/recommendations
- Shortest path problems
    - GPS Navigation
    - Solving mazes
    - AI (shortest path to win the game)

### Depth First Traversal
**Recursive**
1. The function should accept a starting node
2. Create a list to store the end result, to be returned at the very end
3. Create an object to store visited vertices
4. Create a helper function which accepts a vertex
    1. The helper func should return early if the vertex is empty
    2. The helper func should place the vertex it accepts into the visited object and push that vertex into the result array
    3. Loop over all of the values in the adjacencyList for that vertex
    4. If any of those values have not been visited, recursively invoke the helper function with that vertex

### Depth First Traversal
**Iterative**
1. The function should accept a starting node
2. Create a stack to help use keep track of vertices (use a list/array)
3. Create a list to store the end result, to be returned at the very end
4. Create an object to store visited vertices
5. Add the starting vertex to the stack, and mark it visited
6. While the stack has something in it:
    - Pop the next vertex from the stack
    - If that vertex hasn't been visited yet:
        1. Mark it as visited
        2. Add it to the result list
        3. Push all of its neighbors into the stack
7. Return the result array.

### Breadth First Traversal
1. This function should accept a starting vertex
2. Create a queue and place the starting vertex in it
3. Create an array to store the nodes visited
4. Create an object to store nodes visited 
5. Mark the starting vertex as visited
6. Loop as long as there is anything in the queue
7. Remove the first vertex from the queue and push it into the array that stores nodes visited
8. Loop over each vertex in the adjacency list for the vertex you are visiting.
9. If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
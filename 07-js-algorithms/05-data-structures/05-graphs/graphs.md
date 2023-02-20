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
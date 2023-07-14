# Algorithms

### Contents


| 1. **[Introduction To Algorithms](#Introduction_to_Algorithms)**                        |
| :-------------------------------------------------------------------------------------- |
| 1.1  [Priori Analysis and Priori Testing](#Priori)                                      |
| 1.2  [Characteristics of Algorithm](#CharacteristicsAlgorithm)                          |
| 1.3  [How Write and Analyze Algorithm](#WriteAnalyzeAlgorithm)                          |
| 1.4  [Frequency Count Method](#FrequencyCountMethod)                                    |
| 1.5  [Time Complexity #1](#TimeComplexity1)                                             |
| 1.5.1 [Time Complexity Example #2](#TimeComplexity2)                                    |
| 1.5.2 [Time Complexity of While and If #3](#TimeComplexity3)                            |
| 1.6  [Classes of Functions](#ClassOfFunctions)                                          |
| 1.7  [Compare Class of Functions](#CompareClassOfFunctions)                             |
| 1.8  [Asymptotic Notations Big O - Omega - Theta #1](#Asymptotic1)                      |
| 1.8.1 [Asymptotic Notations Big O - Omega - Theta #2](#Asymptotic2)                     |
| 1.9 [Properties of Asymptotic Notations](#PropOfAsymptotic)                             |
| 1.10  [Comparison of Functions #1](#Comparison1)                                        |
| 1.10.1  [Comparison of Functions #2](#Comparison2)                                      |
| 1.11 [Best Worst and Average Case Analysis](#BestWorstAverageCase)                      |
| 1.12 [Disjoint Sets Data Structure - Weighted Union and Collapsing Find](#DisjointSets) |

---

<a id="Introduction_to_Algorithms"></a>
## Introduction To Algorithms

- **FIRST DESIGN, THEN WRITE THE PROGRAM**

    |               Algorithm                |                  Program                  |
    | :------------------------------------: | :---------------------------------------: |
    |                 Design                 |              Implementation               |
    |            Domain knowledge            |                Programmer                 |
    | Any Language (English, Math Notations) | Programming Language (C, C++, Javascript) |
    |     Independent from Hardware & OS     |       Dependent from Hardware & OS        |
    |                Analyze                 |                  Testing                  |


First you know designing, make your design perfect and throught so that you can understand what you are going to construct, what you are going to develop then you start the **development**. You can not develop anything, you can not construct anything on trial and error basis. **How your program works?**


<a id="Priori"></a>
## Priori Analysis and Posteriori Testing

  |   **Priori Analysis**   | **Posteriori Testing** |
  | :---------------------: | :--------------------: |
  |        Algorithm        |        Program         |
  | Independent on Language |   Language dependent   |
  |  Hardware independent   |   Hardware dependent   |
  |  Time & Space Function  |   Watch time & Bytes   |

<a id="CharacteristicsAlgorithm"></a>
## Characteristics of Algorithm

1. **Input**: Some algorithm may not take any input also, but algorithm can take *0 or more* input.
2. **Output**: Algotihm must generate at least one output. Otherwise it's no use of writing a quarter it. It must generate some result. If it doesn't return anything, we say void; but it does something definitely.
3. **Definiteness**: Every statement should be an ambitious and it should have a single an exact meaning. You can not write any statement which can not be understood or which can not be solved. *If the human can not solve it we **can't ask our computers to solve***.
4. **Finiteness**: Algorithm is just like a function. A function will have some limited set of strips and it will stop and returns the result. *It must have finite set of statements*.
5. **Effectiveness**: You should not write **unneccessary statements** in an algorithm whatever the statement you write the objective is that should do something. So some purpose in the procedure in the steps of an algorithm.

<a id="WriteAnalyzeAlgorithm"></a>
## How Write and Analyze Algorithm

If we compare the below code with JS program, there is no data type of parameters. We don't decide at algorithm time. When we write program, then we decide the data types. Important thing is the algoritm's understandable or not.

```js
algorithmSwap(a,b) {
  temp = a;
  a = b;
  b = temp;
}
```

### How to analyze and Algorithm?

1. **Time**: How much time it is taking? If the procedure is very long and time-consuming or the procedure is very fast and quickly get results.
2. **Space**: We need to know how much memory space will consume. So that is the second criteria which we will analyze an algorithm.
3. **Network Consumption**
4. **Power Consumption**
5. **CPU Registers Consuming**
6. Depend on the project this criterias can be increase.

```js
algorithmSwap(a,b) {
  temp = a;
  a = b;
  b = temp;
}
```
Let's analyze this function. Every statement in the record takes one unit of time. If suppose the algorithm is calling another algorithm it's using another procedure. Then we have to analyze that also in detail.
1. **Time**: So it takes 3 units of time. It is **constant**. **`O(1)`**
2. **Space**: There is *a, b and temp*. So we have 3, it is **contant**. **`O(1)`**

- You have to analyze and design and make a complete plan, so that your mission is succesful. **Go into each and every minor detail you have to take effect**.


<a id="FrequencyCountMethod"></a>
## Frequency Count Method




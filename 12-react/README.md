# React is a library. 

There is two kind of things and they are *Library and Frameworks*. 

If you take everything **ALL-IN-ONE-KIT**, it would be a framework.
- All ingredients are included.
- But, you are stuck with the kit's ingrediends.
- Angular, Vue.js
  
If you are taking **SEPERTE INGREDIENTS**, it will be an library.
- You have freedom to choose the best ingredients.
- But, you need to research and buy all ingredients seperately.

## React 3rd Party Library Ecosystem

1. **Routing (for SPAs)** - *React Router*, *React Location*
2. **HTTP Requests** - *fetch*, *AXIOS*
3. **Remote State Management** - *React Query*, *SWR*, *Apollo*
4. **Global State Management** - *Context API*, *Redux*, *Zustand*
5. **Styling** - *CSS Modules*, *Styled Components*, *tailwindcss*
6. **Form Management** - *React Hook Form*, *FORMIK*
7. **Animations/Transitions** - *Motion*, *react-spring*
8. **UI Components** - *chakra*, *mantine*

### Frameworks Built on Top of React

- **React frameworks offer many other features:** Server-side rendering (SSR), Static site generation (SSG), Better Developer Experience (DX)

  1. **Nextjs**
  2. **Remix**
  3. **Gatsby**

---

## Summary of How React Works

- A **component** is like a blueprint for a piece of UI that will eventually exist on the screen. When we use a component, React creates a component instance, which is like an actual physical manifestation of a component, containing props, state and more. A component instance, when rendered, will return a **React Element**.

- **Rendering** only means *calling component functions* and calculating what DOM elements need to be inserted, deleted or updated. It has nothing to do with writing to the DOM. Therefore, **each time a component instance is rendered and re-rendered, the function is called again.**

- Only the **initial app render** and **state updates** can cause a render, which happens for the **entire application**, not just one single component.

- When a component instance gets re-rendered, **all its children will get re-rendered as well.** This doesn't mean that all children will get updated in the DOM, thanks to reconcilliation, which check which elements have actually changed between two renders. But all this re-rendering can still have an impact on performance.

- One of the main parts of reconcilliation is *diffing*. **Diffing** is how React decides which DOM elements need to be added or modified. If, berween renders, a certain React element **stays at the same position in the element tree**, the corresponding DOM element and component state will stay the same. If the element **changed to a different position**, or if it's a **different element type**, the DOM element and state will be destroyed.

- Giving elements a key prop allows React to distinguish between multiple component instances. **When a key stays the same across renders,** the element is kept in the DOM. This is why we need to use keys in lists. **When we cange the key between renders,** the DOM element will be destroyed and rebuilt. We use this a a **trick to reset state**.

- **Never declare a new component inside another component!** Doing so will re-create the nested component every time the parent component re-renders. React will always see the nested components as **new**, and therefore **reset its state** each time parent state is updated.

- The logic that produces JSX output for a component instance (`render logic`) is not allowed to **produce any side effects:** no API calls, no timers, no object or variable mutations, no state updated. **Side effects are allowed in event handlers** and **useEffect**.

- The DOM is updated in the commit phase, **but not by React, but by a `renderer` called ReactDOM.** That's why we always need to include both libraries in a React web app project. We can use other renderers to use React on different platforms, for example to build mobile or native apps.

- Multiple state udpates inside an event handler function are **batched**, so they happen all at once, **causing only one re-render**. This means we **can not access a state variable immediately after updating it:** state updates are **asynchronous.** Since React 18, batching also happens in **timeouts, promises, and native event handlers**.

- When using event handlers, we get access to a **synthetic event object**, not the browser's native object, so that **events work the same way across al browsers**. The difference is that **most synthetic events bubble,** including focus, blue, and change, which do not bubble as native browser events. Only the scroll event does not bubble.

---

## Hooks

- Special built-in functions that allow us to **`hook` into React internals:**
  - Creating and accessing **state** from Fiber tree
  - Registering **side effects** in Fiber tree
  - Manual **DOM selections**
- Always start with **`use`**
- Enable easy **reusing of non-visual logic:** We can compose multiple hooks into our own **custom hooks**
- Give **function components** the ability to own state and run side effects at different lifecycle points.

### Rules of Hooks

1. **Only call hooks at the top level.**
   - Do **NOT** call hooks **inside conditionals, loops, nested functions**, or after an **early return**.
   - This is necessary to ensure that hooks are always called in the **same order** (hooks rely on this)
2. **Only call hooks from React functions.**
   - Only call hooks inside a **function component** or a **custom hook**.

### useState

1. Creating State
    - Simple
    - Based on function (lazy evaluation)
      - Function must be **pure** and accept **no arguments**. Called only on **initial render**.
2. Updating State
    - Simple
    - Based on current state

### useRef

Current property set to the initial property of 23. Then with <code>myRef.current = 1000</code> we can change it to mutable.

**Updating refs don't causes re-render.**

- `Box` (object) with a **mutable**.current property that is **persisted across renders** (`normal` variables are always reset.)

1. Creating a variable that stays the same between renders (e.g. previous state, setTimeout id, etc.)
2. Selecting and storing DOM elements.

- Refs are usually for **data that is NOT rendered:** usually only appear in event handlers or effects, not in JSX (otherwise use state)
- Do **NOT** write or read `.current` in render logic (like state)
  
  ---

### Need to Store Data?
  - Will data change at some point?
    - **YES**: Should it re-render component?
      - **YES**: State (useState)
      - **NO**: Ref (useRef)
    - **NO**: Regular const variable

  ---

### Custom Hooks

#### Need to Reuse:
  - UI: Component
  - Logic
    - Does Logic contain any hooks?
      - **NO**: Regular Function
      - **YES**: Custom Hooks

Allows us to reuse **non-visual logic** in multiple components.

One custom hook should have **one purpose**, to make it **reusable** and **portable** (even across multiple projects)

**Rules of hooks** apply to custom hooks too.

### useReducer

useReducer hook is basically more advanced and more complex way of managing state instead of the useState hook.

State management with *useState* is not enough in certain situations:
1. When components have **a lot of state variables and state updates**, spread across many event handlers **all over the component.**
2. When **multiple state updates** need to happen **at the same time** (as a reaction the the same event, like 'starting a game')
3. When updating one piece of state **depends on one or multiple other pieces of state**.

- An alternative way of setting state, ideal for **complex state** and **related pieces of state**.
- Stores related pieces of state in a **state** object.
- useReducer needs **reducer** function containing **all logic to update state**. Decouples state logic from component.
- **reducer** pure function that takes current *state* and *action*, **and returns the next state**.
- **action** object that describes **how to update state**.
- **dispatch** function to trigger state updates, by *`sending` actions* **from event handlers** to the reducer.
  
> Creation Projects with vite - `npm create vite@latest`

## Routing

- With routing, we match **different URLs** to **different UI wivews** (React components)
- This enables users to **navigate between different applications screens**.
- Keeps the UI **in sync** with the current browser URL.

### Single Page Application

- Application that is **executed entirely on the client** (browsers)
- **Routes:** different URLs correspond to different views
- **Javascript** is used to update the page
- **The page is never reloaded**
- Feels like a **native app**

### Storing state Management

1. Easy way to store state in a **global place**, accessible to **all components** in the app.
2. Good way to **pass data** from one page into the next page.
3. Makes it possible to **bookmark and share** the page with the exact UI state it had at the time.
   - `www.example.com/app/cities/lisbon?lat=38.728&lbg=-9.141`

## Context API

Context API basically allows components everywhere in the three to read state that a context shares.

When you have a small sized application like `worldwise project`, and performance is never going to be an issue, then the context API is a great tool indeed.

- System to pass data throughout the app **without manually passing props** down the tree.
- Allows us to '**broadcast**' **global state** to the entire app.
  1. **Provider:** gives all child components access to value
  2. **Value::** data that we want to make available (usually state and functions)
  3. **Consumers:** all components that read the provided context value

### State Management

Giving each piece of state the right **home**.

#### 1. State Accessibility
  - **Local State**
      - Needed only by **one or few components**
      - Only accessible in **component and child components**
  - **Global State**
      - Might be needed by **many components**
      - Accessible to **every component** in the applicaiton.
#### 2. State Domain
  - **Remote State** (useContext)
    - All aplication data **loaded from a remote server** (API)
    - Usually **asynchronous**
    - Needs re-fetching, updating
  - **UI State** (useState, useReducer)
    - **Everything else**
    - Theme, list filters, form data, etc.
    - Usually **synchronous** and stored in the application.

### Placement Options

| **🤔 Where to place state?** |              **Tools**               |          **When to Use?**           |
| :-------------------------: | :----------------------------------: | :---------------------------------: |
|    **_Local Component_**    |     useState, useReducer, useRef     |             Local State             |
|   **_Parent Component_**    |     useState, useReducer, useRef     |          Lifting up State           |
|        **_Context_**        | Context API + useState or useReducer | Global State (preferably UI state)  |
|   **_3rd-party library_**   |   Redux, React Query, SWR, Zustand   |     Global state (remote or UI)     |
|          **_URL_**          |             React Router             | Global state, passing between pages |
|        **_Browser_**        |    Local Storage, session storage    |   Storing data in user's browser    |

---

|              |               Local State               |                      Global State                       |
| :----------: | :-------------------------------------: | :-----------------------------------------------------: |
|   UI State   |      useState, useReducer, useRef       |       Context API + useState, Redux, React Router       |
| Remote State | fetch + useEffect + useState/useReducer | Context API, Redux, **React Query**, **SWR**, RTK Query |

## Performance Optimization Tools

|        **1. Prevent Wasted Renders**u        | **Improve App Speed / Responsiveness** |     **Reduce Bundle Size**      |
| :------------------------------------------: | :------------------------------------: | :-----------------------------: |
|                     memo                     |                useMemo                 | Using fewer 3rd-party packages  |
|                   useMemo                    |              useCallback               | Code splitting and lazy loading |
|                 useCallback                  |             useTransition              |
| Passing elements as children or regular prop |

### When does a Components Instance **Re-Render**?

A component instance only gets re-rendered in 3 different situations:
- **State Changes**
- **Context Changes**
- **Parent Re-Renders**
  - Creates the false impression that **changing props** re-renders a component. This is **NOT** true.

> **Remember:** a render does **not mean that the DOM actually get updated,** it just means the component function gets called. But this can be an expensive operation.

     - Wasted render: a render that didn't produce any change in the DOM.
     - Only a problem when they happen too frequently or when the component is very slow.

> **Children** props doesn't re-render when parent re-renders.

### **Memoization**

**Memoization:** Optimization technique that executes a pure function once, and saves the result in memory. If we try to execute the function again with the **same arguments as before**, the previously saved result will be returned, **without executing the function again**.

    Memoize components with memo
    Memoize objects with useMemo
    Memoize functions with useCallback

### The memo function

Used to create a component that will **not re-render when its parent re-renders,** as long as the **props stay the same between renders**.

- **Regular Behaviour** (NO MEMO)
  - Components re-renders -> Child re-renders
- **Memoized Child With Memo**
  - Components re-renders -> Memoized child does NOT re-render with **SAME PROPS**.

**Only affects props!** A memoized componenet will still re-render when its **own state changes** or when a **context that it's subscribed to changes**.

Only makes sense when the component is heavy (slow rendering), **re-renders often**, and does so **with the same props**.

#### **An Issue With MEMO**

- In React, everything is **re-created on every render** (including objects and functions)
- In JavaScript, two objects or functions that look the same, **are actually different** ({} != {})
- If objects or functions are passed as props, the child component will always see them as **new props on each re-render**.
- **If props are different between re-rends, *memo* wil not work.**

> We need to memoize objects and functions, to make them stable (preserve) between re-renders (memoized {} == memoized {})

### useMome & useCallback

- Used to memoize values **useMemo** and functions **useCallback** **between renders**.
- Values passed into useMemo and useCallback will be stored in memory *(cached)* and **returned in subsequent re-renders, as long as dependencies** *(inputs)* **stay the same**.
- useMemo and useCallback have a **dependency array** (like useEffect): whenever one **dependency changes**, the value will be re-created.
- Only use them for one of the three **use cases!**
   1. Memoizing props to prevent wasted renders (together with `memo`)
   2. Memoizing values to avoid expensive re-calculations on every render.
   3. Memoiznig values that are used in dependency array of another hook.

### Optimizing Bundle Size with Code Splitting

- **Bundle:** Javascript file containing the **entire application code**. Downloading the bundle will load **the entire app at once**, turning it into a SPA.
- **Bundle size:** Amount of JavaScript users have to download to start using the app. One of the most important things to be optimized, so that the bundle takes **less time to download**.
- **Code splitting:** Splitting bundle into multiple parts that can be **downloaded over time** `(lazy loading)`

### Don't Optimize **PREMATURELY!**

- Don't opzimize anything if there is nothing to optimize..
- Don't wrap all components in *memo()*
- Don't wrap all values in *useMemo()*
- Don't wrap all functions in *useCallback()*
- Don't optimize context if it's not slow and doesn't have many consumers.
  
  ---
- Find performance bootlenecks using the **Profiler** and **visual inspection (laggy UI)**
- Fix those real performance issues
- Memoize expensive re-renders
- Memoize expensive calculations
- Optimize context if it has many consumers and changes often
- Memoize context value + child components
- Implement code splitting + lazy loading for SPA routes.

## useEffect Rules and Best Practices

### Dependency Array Rules
- Every **state variable**, **prop** and **context value** used inside the effect **MUST** be included in the dependency array.
- All **reactive values** must be included! That means any **function** or **variable** that reference **any other** reactive value.
- Dependencies choose themselves: **NEVER** ignore the exhaustive-deps ESLint rule!
- Do **NOT** use **objects or arrays** as dependencies (objects are recreated on each render, and React sees new object as **different**)
    
    ```js
     {} !== {}
    ```

### Removing **Unnecessary** Dependencies
#### Function Dependencies
- Move function **into the effect**
- If you need the function in multiple places, **memoize it** *(useCallback)*
- If the function doesn't reference any reactive values, move it **out of the component**
#### Object Dependencies
- Instead of including the entire object, include **only the properties you need** (primitive values)
- If that doesn't work, use the same strategies as for functions (**moving** or **memoizing** object)
#### Other Strategies
- If you have **multiple related reactive values** as dependencies, try using a **reducer** *(useReducer)*
- You don't need to include setState (from useState) and dispatch (from useReducer) in the dependencies, as **React guarantees them to be stable** across renders.

### When **NOT** to Use an Effect
- Effects should be used as a **last resort**, when no other solution makes sense. React calls them an `escape hatch` to step outside of React.

#### Three Cases Where Effects are Overused:
1. **Responding to a user event.** An event handler function should be used instead.
2. **Fetching data on component mount.** This is fine in small apps, but in real-world app, a library like React Query should be used.
3. **Synchronizing state changes with one another** (setting state based on another state variable). Try to use derived state and event handlers.

## Redux

- 3rd-party library to manage **global state**
- **Standalone** library
- All global state is stored in one **globally accessible store**, which is easy to update using **actions** *(like useReducer)*
- It's conceptually similar to using the Context API + useReducer
- For Global UI States, redux is ideal use case. For Remote Global States, we have better tools.

### The **Mechanism** of the *useReducer* Hook

```js
Event Handler -> dispatch -> reducer -> Next State -> Re-Render // useReducer
Event Handler -> Action Creator Function -> store -> Next State -> Re-Render // Redux
```

- In store there are multiple reducer.

Redux is start by calling an action creator in a component and then dispatch the action that resutled from the action creator. This action will then reach the store where the right reducer will pick it up and update the state according to the instructions. This then triggers a re-render of the UI where the cycle finishes. 

Big goal of all this is to make the state update logic **seperate** from the rest of the application.

### What is Redux Middleware? *(Redux Thunk)*

Where to make an **asynchronous API call** in Redux?
- Store can't execute asynchronous operations and reducers need to be pure functions aswell.
- We can make asynchronous operations in component and then dispatch it, but fetching data in components is not ideal.
- We can do it in **MIDDLEWARE** where between dispatch and store.
- **Middleware** is a function that sits between dispatching the action and the store. Allows us to run code **after** dispatching, but **before** reaching the reducer in the store.
  - Perfect for asynchronous code.
  - API calls, timers, logging, etc.
  - The place for side effects.

### Redux Toolkit

- The **modern and preferred** way of writing Redux code.
- An **opinionated** approach, forcing us to use Redux best practices.
- Allows us to write **a lot less code** to archieve the same result (less *boilerplate*)
- Gives us 3 big things:
    1. We can write code that **mutates** state inside reducers.
    2. Action creators are **automatically** created
    3. **Automatic** setup of thunk middleware and DevTools

### Redux vs. Context API

We should **not** use these solutions **for remote states**

|                         Context API + useReducer                         |                              REDUX                              |
| :----------------------------------------------------------------------: | :-------------------------------------------------------------: |
|                             Built into React                             |        Requires additional package (larger bundle size)         |
|                   Easy to set up a **single context**                    |                More work to set up **initially**                |
| Additional state *slide* requires new context. (Provider Hell in App.js) | Once set up, it's easy to create **additional state**, *slices* |
|                  **No** mechanism for async operations                   |          Supports **middleware** for async operations.          |
|                  Performance optimization is a **pain**                  |           Performance is optimized **out of the box**           |
|                           Only React DevTools                            |                       Excellent DevTools                        |

### When to Use Context API or Redux?

|                         Context API + useReducer                         |                              REDUX                              |
| :----------------------------------------------------------------------: | :-------------------------------------------------------------: |
|                             Built into React                             |        Requires additional package (larger bundle size)         |
|                   Easy to set up a **single context**                    |                More work to set up **initially**                |
| Additional state *slide* requires new context. (Provider Hell in App.js) | Once set up, it's easy to create **additional state**, *slices* |
|                  **No** mechanism for async operations                   |          Supports **middleware** for async operations.          |
|                  Performance optimization is a **pain**                  |           Performance is optimized **out of the box**           |
|                           Only React DevTools                            |                       Excellent DevTools                        |

## How to **Plan** & **Build** a React Application

1. Gather application **requirements and features**
2. Divide the application into **pages**
    - Think about the **overall** and **page-level** UI.
    - Break the desired UI into **components**
    - Design and build a **static** version 
3. Divide the application into **feature categories**
    - Think about **state management + data flow**
4. Decide on what **libraries** to use (technology decision)

### Project Requirement From the Business

- #### <u>1. Step</u>
  - Very simple application, where users can order **one or more pizzas from a menu**
  - Requires **no user accounts** and no login: users just input their names before using the app.
  - The pizza menu can change, so it should be **loaded from an API**.
  - Users can add multiple pizzas to a **cart** before ordering
  - Ordering requires just the **user's name**, **phone number**, and **address**
  - If possible, **GPS location** should also be provided, to make delivery easier.
  - User's can **mark their order as *priority*** for an additional 20% of thhe cart price.
  - Orders are made by sending a POST request with the order data (user data + selected pizzas) to the API.
  - Payments are made on delivery, so **no payment processing** is necessary in the app.
  - Each order will get a **unique ID** that should be displayed, so the **user can later look up their order** based on the ID.
  - Users should be able to mark their order as *priority* order **even after it has been placed**.
- #### <u>2. & 3. Step *(Features & Pages)*</u>

  | Feature Categories |             Necessary Pages             |
  | :----------------: | :-------------------------------------: |
  |        User        |             Homepage **/**              |
  |        Menu        |          Pizza Menu **/menu**           |
  |        Cart        |             Cart **/cart**              |
  |       Order        |   Placing a new order **/order/new**    |
  |                    | Looking up an order **/order/:orderID** |

- #### <u>3. & 4. Step *(State Management & Technology Decisions)*</u>
    1. **User** -> Global UI state (no accounts, so start in app)
    2. **Menu** -> Global remote state (menu is fetched from API)
    3. **Cart** -> Global UI state (no need for API, just stored in app)
    4. **Order** -> Global remote state (fetched and submitted to API)
  ---
  - ***Routing*** - **React Router** - The standard for React SPAs
  - ***Styling*** - **tailwindcss** - Trendy way of styling applications
  - ***Remote State Management*** - **React Router** New way of fetching data right inside React Router (v6.4 +) that is worth exploring (**render-as-you-fetch** instead of **fetch-on-render**). Not really state **management**, as it doesn't persist state.
  - ***UI State Management*** - **Redux** - State is fairly complex. Redux has many advantages for UI state.

## Client-Side Rendering (CSR) **OR** Server-Side Rendering (SSR)?

|                      **CSR With Plain React**                      |            **SSR With Framework (Next.js, Remix)**            |
|:------------------------------------------------------------------:|:-------------------------------------------------------------:|
|             Used to build **single***page applications             |           User to build **multi**-page applications           |
|               All HTML is rendered on the **client**               |            Some HTMTL is rendered in the **server**           |
|       All JS needs to be downloaded before apps start running      |      **More performant**, less JS needs to be downloaded      |
|      **One perfect use case:** apps that are used *internally*     | The **React team** is moving more and more in this direction. |
| As tools inside companies, that are entirely hidden behind a login |                                                               |
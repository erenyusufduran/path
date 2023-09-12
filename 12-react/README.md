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

## Frameworks Built on Top of React

**React frameworks offer many other features:** Server-side rendering (SSR), Static site generation (SSG), Better Developer Experience (DX)

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

## Section #1

- <a href="https://react.dev/?ref=jonas.io">React</a> (Documentation that you should keep open at all times)

- <a href="https://create-react-app.dev/?ref=jonas.io">Create React App</a> (This is how we'll setup our first app)

- <a href="https://vitejs.dev/guide/?ref=jonas.io">Vite: Getting Started</a> (For real-world React apps)

- <a href="https://gist.githubusercontent.com/gaearon/0275b1e1518599bbeafcde4722e79ed1/raw/db72dcbf3384ee1708c4a07d3be79860db04bff0/example.html">Adding React URL to an HTML Document</a> (For the "Pure React" lecture)

## Section #2

- <a href="">Writing Resilient Components</a> (By Dan Abramov from the React team)

- <a href="">Things I think about when I write React code</a> (GitHub repository)

- <a href="">A (Mostly) Complete Guide to React Rendering Behavior</a> (By Mark Erikson from the redux team)

- <a href="">A Visual Guide to React Rendering</a> (A multi-part series, check out the other ones)

- <a href="">Inside Fiber: in-depth overview of the new reconciliation algorithm in React</a>

- <a href="">A Cartoon Intro to Fiber</a> (YouTube video)

- <a href="">What Is React Fiber? React.js Deep Dive</a> (YouTube video)

- <a href="">The React and React Native Event System Explained</a>

- <a href="">Under the hood of event listeners in React</a>

- <a href="">A DIY guide to build your own React</a>

- <a href="">useSyncExternalStore First Look</a>

- <a href="">Under the hood of React's hooks system</a>

- <a href="">Why Do React Hooks Rely on Call Order?</a> (By Dan Abramov)

- <a href="">So you think you know everything about React refs</a>

- <a href="">react-use: Reusable React Hook Library</a> (GitHub repository)

- <a href="">react-hookz: React hooks done right</a> (GitHub repository)


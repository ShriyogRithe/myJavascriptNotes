// let [counter, setCounter] = useState(0)

// function increaseCounter() {// by this counter will not directly jump to increased by 5 bcz it will send by batches 
//     setCounter(counter);
//     setCounter(counter);
//     setCounter(counter);
//     setCounter(counter);
//     setCounter(counter);
// }

// function increaseCounter() {// use callback to setCounter  
//     setCounter((previousValue) => previousValue + 1);
//     setCounter((previousValue) => previousValue + 1);
//     setCounter((previousValue) => previousValue + 1);
//     setCounter((previousValue) => previousValue + 1);
//     setCounter((previousValue) => previousValue + 1);
// }

/////////======================================================================================================


// make a container at center 
// <div className="flex items-center justify-center min-h-screen bg-gray-900">
//   <div className="w-full max-w-md text-white px-4 py-4 text-center bg-gray-800 rounded-xl shadow-lg">
//     Password Generator
//   </div>
// </div>

//
/* <div class="wrapper">
  <div class="box">
    Password Generator
  </div>
</div>


.wrapper {
    display: flex;                 // Use flexbox 
    justify-content: center;      // Center horizontally 
    align-items: center;          // Center vertically 
    height: 100vh;                // 100% of the viewport height 
    background-color: #1a1a1a;    // Dark background 
  }
  
  .box {
    padding: 20px 30px;
    background-color: #333;       ///Slightly lighter background 
    color: white;
    font-size: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    text-align: center;
  }
    */


  //////////////////////////////////======================================================================================================


//  How many Hooks are in React?
// In the latest version of React, v18.3.1, a total of 15 React Hooks are available.
// Let’s begin by stating some of the most widely used ones.

// useState
// useEffect
// useContext
// useReducer
// useMemo
// useRef
// useCallback
// useId
// useDebugValue
// useDeferredValue
// useImperativeHandle
// useInsertionEffect
// useLayoutEffect
// useSyncExternalStore
// useTransition
// Two new hooks on the horizon are currently in an experimental state and outside the scope of this article.

// useActionState
// useOptimistic
// https://www.uxpin.com/studio/blog/react-hooks/#:~:text=A%20React%20Hook%20is%20a,easier%20to%20read%20and%20write.



  //////////////////////////////////======================================================================================================


// Randomlly shuffled numbers
// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// const arr = Array.from({ length: 18 }, (_, i) => i + 1);
// const shuffled = shuffle(arr);

// console.log(shuffled);

//////////////////////////////////======================================================================================================

/*
import { useEffect, useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  // Effect 1: runs when count changes
  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);

  // Effect 2: runs once on mount
  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  // Effect 3: runs on every render (no dependency array)
  useEffect(() => {
    console.log('Rendered or re-rendered');
  });

  return (
    <div>
      <p>Count: {count}</p>
      <p>User: {user?.name}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
*/

/*
🧠 Behavior Based on Dependencies
1. 🟢 useEffect(() => { ... })
No dependency array

Runs after every render

r
Copy
Edit
Initial Render ─▶ useEffect runs
Re-render ──────▶ useEffect runs
2. 🔵 useEffect(() => { ... }, [])
Empty dependency array

Runs only once (like componentDidMount)

arduino
Copy
Edit
Initial Render ─▶ useEffect runs
Re-render ──────▶ ❌ No run
3. 🟡 useEffect(() => { ... }, [a, b])
Runs when a or b changes

css
Copy
Edit
Initial Render ─▶ useEffect runs
a or b changes ─▶ useEffect runs again
Other updates ──▶ ❌ No run
*/

/*
List of 10000 rendering unoptimzatable
🔹 1. Windowing / Virtualization

Instead of rendering all items at once, render only what’s visible in the viewport.

Use libraries like:

react-window
 (lightweight)

react-virtualized
 (more features)
This drastically reduces DOM nodes.

import { FixedSizeList as List } from "react-window";

function MyList({ items }) {
  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={35}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>{items[index]}</div>
      )}
    </List>
  );
}

🔹 2. Memoization

Use React.memo for list items to avoid unnecessary re-renders.

Pass stable props (avoid creating new objects/functions inside render).

const ListItem = React.memo(({ item }) => {
  return <div>{item.name}</div>;
});

🔹 3. Key Prop Optimization

Ensure stable and unique key values (like IDs).

Avoid using array indices as keys (causes re-renders when list changes).

🔹 4. Lazy Loading / Pagination

Load and render only a subset of items at once.

For example, show first 50, then fetch/render more as the user scrolls.

🔹 5. Avoid Inline Functions & Objects

Passing inline objects/functions to many items creates new references → causes re-renders.
Instead, use useCallback / useMemo.

const handleClick = useCallback((id) => {
  console.log(id);
}, []);

🔹 6. Batching & Suspense (React 18+)

React automatically batches updates, but ensure you don’t trigger too many state updates inside loops.

If fetching data per item, wrap with React.Suspense.

🔹 7. CSS Instead of JS for Heavy Layout

If animations/transitions are needed, prefer CSS animations over JS calculations in render.
*/

/*
🪛 Debugging Steps
1. Check if the Parent is Re-rendering

If the parent re-renders, the child may also re-render (depending on props).

Use React DevTools Profiler to record renders → see which components re-render and why.

2. Verify Prop Identity (Objects/Functions)

Even if the “value” seems unchanged, object and function references are new each render.

<Child data={{ x: 1 }} />  // new object every render
<Child onClick={() => doSomething()} />  // new function every render


Fix: wrap with useMemo or useCallback.

const memoizedData = useMemo(() => ({ x: 1 }), []);
const handleClick = useCallback(() => doSomething(), []);

3. Wrap Child in React.memo

If the child doesn’t need to re-render when props are shallowly equal, memoize it.

const Child = React.memo(function Child({ data }) {
  console.log("Render child");
  return <div>{data.value}</div>;
});

4. Check Derived Props / Context

If the child consumes context, it re-renders whenever context changes.

Same with derived props like Math.random() or Date.now().

Move stable values out of render.

5. Check State & Closures

Ensure you’re not passing props derived from frequently-changing state unnecessarily.

Example issue:

<Child filter={items.filter(i => i.active)} /> // new array every render


✅ Fix with useMemo.

6. Profiler “Why did this render?”

With React DevTools Profiler, right-click a component → "Why did this render?".
It will tell you which props or context triggered it.

7. Check for Unintentional Global Updates

If using Redux/Zustand/Context → confirm child isn’t subscribed to global state updates unnecessarily.

Split context / selectors so only necessary parts re-render.
*/


/* 
Web core vitals 
CLS : content layout shift 
LCP : largent conentful paint 
FID : First Input Delay 
*/


/* 
toast machine coding question 
container ---> fixed 
toast-container --> relative 
toast span  ---> absolute
animation : slide 1s 1
@keyframes silde {
0% {
transform : translateX(100%);
},
100% {
transform : translateX(100%);
}
}

*/


/* 

conical-gradient
style={{
          // background: `conic-gradient(red 0% ${range}%, black ${range}% 100%)`,
        }}
*/




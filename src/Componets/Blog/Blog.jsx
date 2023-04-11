import React from "react";
import './Blog.css'

const Blog = () => {
  return (
    <div className="blog">
      
      <div>
        <h1>1: When is the Context Api used?</h1>
        <p>Ans: The Context API in React can be used in various situations where we need to pass data from a parent component to its deeply nested child components. The Context API is particularly useful when:

          Multiple components need to access the same data: If we have multiple components that need to access the same data, we can use the Context API to avoid prop drilling, which can become unwieldy as our component tree grows deeper.

           </p>
      </div>
      
      <div>
        <h1>2: What is custom HOOK ?</h1>
        <p>Ans: In React, a custom hook is a JavaScript function that starts with the prefix "use"  and follows the rules of the Hooks API. Custom hooks allow we to reuse logic across components by extracting it into a reusable function.

           </p>
      </div>
      

      <div>
        <h1>3: What is useEffect ?</h1>
        <p>Ans: useEffect is a built-in hook in React that allows we to perform side effects in our functional components. Side effects refer to any operation that affects something outside the scope of the current function, such as manipulating the DOM, fetching data from an API, or setting up event listeners.

          </p>
      </div>
     
      <div>
        <h1>4: What is useMemo ?</h1>
        <p>Ans: useMemo is a built-in hook in React that allows you to optimize the performance of your functional components by memoizing the result of expensive calculations. Memoization is a technique that involves caching the result of a function call so that subsequent calls with the same inputs can be returned from the cache instead of re-executing the function.</p>
      </div>

    </div>
  );
};

export default Blog;
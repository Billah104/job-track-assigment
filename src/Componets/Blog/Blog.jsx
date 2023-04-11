import React from "react";

const Blog = () => {
  return (
    <div>
      {/* context api */}
      <div>
        <h1>1: When is the Context Api used?</h1>
        <p>Ans: Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context. </p>
      </div>
      {/* custom  hook */}
      <div>
        <h1>2: What is custom HOOK ?</h1>
        <p>Ans: When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. </p>
      </div>
      {/* useEffect */}

      <div>
        <h1>3: What is useEffect ?</h1>
        <p>Ans: useEffect is a React Hook that lets you synchronize a component with an external system.</p>
      </div>
      {/* useMemo */}
      <div>
        <h1>4: What is useMemo ?</h1>
        <p>Ans: useMemo is a hook that is used in the functional component of React that returns a memoized value.</p>
      </div>
    
    </div>
  );
};

export default Blog;
import React, { useEffect, useState } from 'react'

function UseEffectDependency() {
    const [count, setCount] =useState(0);

    useEffect(() => {
        console.log("Count changed:", count);
    }, [count]);

  return (
    <div>
    <h2>Example 3: Dependency</h2>  

    <p>Count: {count}</p>

    <button onClick={() => setCount(count + 1)}>
        Increase
    </button>
    </div>
  );
}

export default UseEffectDependency;

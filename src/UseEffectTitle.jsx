import React, { useEffect, useState } from 'react'

function UseEffectTitle() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    },[count]);

  return (
    <div>
    <h2>Example 4: Document Title</h2>  

    <p>Count: {count}</p>

    <button onClick={() => setCount(count + 1)}>
        Increase
    </button>
    </div>
  );
}

export default UseEffectTitle;

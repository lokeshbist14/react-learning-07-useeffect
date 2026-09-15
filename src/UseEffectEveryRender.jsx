import React, {useEffect, useState} from 'react'

function UseEffectEveryRender() {
    const [count,setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect is running");
    });

  return (
    <div>
    <h2>Example 2: Every Render</h2>  

    <p>Count: {count}</p>

    <button onClick={() => setCount(count + 1)}>
        Increase
    </button>
    </div>
  );
}

export default UseEffectEveryRender;

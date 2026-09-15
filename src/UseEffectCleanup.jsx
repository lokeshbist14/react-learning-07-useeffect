import React, { useEffect } from "react";

function UseEffectCleanup() {
  useEffect(() => {
    console.log("Component started");

    return () => {
      console.log("Component cleanup");
    };
  }, []);

  return (
    <div>
      <h2>Example 5: Cleanup</h2>
      <p>Open the browser console.</p>
    </div>
  );
}

export default UseEffectCleanup;
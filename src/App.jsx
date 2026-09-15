import React, { useEffect } from "react";
import UseEffectEveryRender from "./UseEffectEveryRender";
import UseEffectDependency from "./UseEffectDependency";
import UseEffectTitle from "./UseEffectTitle";
import UseEffectCleanup from "./UseEffectCleanup";
import UseEffectTimer from "./UseEffectTimer";
import UseEffectTimerControl from "./UseEffectTimerControl";
import UseEffectFetch from "./UseEffectFetch";
import UseEffectProject from "./UseEffectProject";

function App() {
  useEffect(() => {
    console.log("App loaded!");
  }, []);

  return (
    <div>
      {/* Example 1 */}
      <h1>useEffect</h1>
      <p>Check the browser console.</p>
      <br />

      {/* Example 2 */}
      <UseEffectEveryRender />
      <br />

      {/* Example 3 */}
      <UseEffectDependency />
      <br />

      {/* Example 4 */}
      <UseEffectTitle />
      <br />

      {/* Example 5 */}
      <UseEffectCleanup />
      <br />

      {/* Example 6 */}
      <UseEffectTimer />
      <br />

      {/* Example 7 */}
      <UseEffectTimerControl />
      <br />

      {/* Example 8 */}
      <UseEffectFetch />
      <br />

      {/* Example 9 */}
      <UseEffectProject />
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";

function UseEffectTimerControl() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) {
      return;
    }

    const timer = setInterval(() => {
      setSeconds((previousSeconds) => previousSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [running]);

  return (
    <div>
      <h2>Example 7: Start / Stop Timer</h2>

      <p>Seconds: {seconds}</p>

      <button onClick={() => setRunning(true)}>
        Start
      </button>

      <button onClick={() => setRunning(false)}>
        Stop
      </button>

      <button onClick={() => setSeconds(0)}>
        Reset
      </button>
    </div>
  );
}

export default UseEffectTimerControl;
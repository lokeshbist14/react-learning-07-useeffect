import React, { useEffect, useState } from 'react'

function UseEffectTimer() {
        const [seconds, setSeconds] = useState(0);

        useEffect(() => {
            const timer = setInterval(() => {
                setSeconds((previousSeconds) => previousSeconds + 1);
            }, 5000);

            return() => {
                clearInterval(timer);
            };
        }, []);

  return (
    <div>
      <h2>Example 6: Timer</h2>

      <p>Seconds: {seconds}</p>
    </div>
  );
}

export default UseEffectTimer;

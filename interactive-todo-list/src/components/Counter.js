import React, { useState } from "react";

const calculateTimePart = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds];
};

const formatTimePart = (timePart) => `${timePart}`.padStart(2, 0);

function Counter() {
  const [count, setCount] = useState(0);

  setTimeout(() => {
    setCount(count + 1);
  }, 1000);

  const [hh, mm, ss] = calculateTimePart(count);

  return (
    <h4>
      You have used {formatTimePart(hh)}:{formatTimePart(mm)}:
      {formatTimePart(ss)} time on this website!
    </h4>
  );
}
export default Counter;

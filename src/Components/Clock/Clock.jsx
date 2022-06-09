import { useEffect, useState } from "react";
import "./Clock.css";
const Clock = () => {
  const [today, setToday] = useState(new Date());
  const [clockFormat, setClockFormat] = useState(true);
  const hour = today.getHours();
  const minute = today.getMinutes();
  const minutes = minute / 10 < 1 ? `0${minute}` : minute;
  const wish = `Good ${
    (hour < 4 && "evening") ||
    (hour < 12 && "morning") ||
    (hour < 16 && "afternoon") ||
    (hour < 21 && "evening") ||
    "evening"
  }`;
  const hours = hour % 12 || 12;
  const hourAndMinutes = hour + ":" + minutes;
  const hourAndMinutesIn24 = hours + ":" + minutes;

  useEffect(() => {
    let timer = setTimeout(() => {
      setToday(() => new Date());
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [today]);

  const name = localStorage.getItem("username");
  return (
    <>
      <div className="clock-container">
        <div
          onClick={() => {
            console.log("cli");
            setClockFormat((prev) => !prev);
          }}
          className="hourandminute"
        >
          {clockFormat ? hourAndMinutes : hourAndMinutesIn24}
          <p className="tooltip">
            {clockFormat
              ? "Change to  12 hour format"
              : "Change to 24 hour format"}
          </p>
        </div>
        <div>
          {wish} , {name}
        </div>
      </div>
    </>
  );
};
export { Clock };

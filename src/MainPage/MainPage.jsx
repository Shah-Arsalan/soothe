import { Clock, Focus, Weather } from "../Components";
import "./MainPage.css";

const MainPage = () => {
  return (
    <>
      <div className="clock-focus-container">
        <Clock />
        <Focus />
        <Weather />
      </div>
    </>
  );
};

export { MainPage };

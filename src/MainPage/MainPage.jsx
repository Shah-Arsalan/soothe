import { Clock, Focus, Quotes, Weather } from "../Components";
import "./MainPage.css";

const MainPage = () => {
  return (
    <>
      <div className="clock-focus-container">
        <Clock />
        <Focus />
        <Weather />
        <Quotes />
      </div>
    </>
  );
};

export { MainPage };

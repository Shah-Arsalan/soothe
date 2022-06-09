import "./LandingPage.css";
import { useState } from "react";

const LandingPage = ({ setUserName }) => {
  const [name, setName] = useState("");
  console.log(name);
  return (
    <>
      <div className="name-input">
        <div className="welcome-message">Hey , Enter your name</div>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          className=""
          autoComplete="off"
          autoFocus
        />
        {name.length > 0 && (
          <button
            onClick={() => {
              localStorage.setItem("username", name);
              setUserName(name);
            }}
            className="primary-button"
          >
            Enter Soothe{" "}
          </button>
        )}
      </div>
    </>
  );
};

export { LandingPage };

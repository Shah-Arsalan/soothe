import { useState } from "react";
import "./Focus.css";

const Focus = () => {
  const [focus, setFocus] = useState("");
  const focusMessage = localStorage.getItem("focus");
  const [focusState, setFocusState] = useState(
    JSON.parse(localStorage.getItem("activeFocusState"))
  );
  const [check, setCheck] = useState(JSON.parse(localStorage.getItem("check")));

  const deleteHandler = () => {
    localStorage.removeItem("focus");
    setFocus("");
    localStorage.setItem("activeFocusState", false);
    setFocusState(false);
  };

  const editHandler = () => {
    localStorage.removeItem("focus");
    localStorage.setItem("activeFocusState", false);
    setFocusState(false);
  };
  //   const item = localStorage.getItem("check");
  //   console.log("item is : ", item);
  //   console.log("upar", typeof check);
  console.log("check value", typeof check);

  return (
    <>
      {!focusState && (
        <div className="focus-container">
          <p>Your focus for today would be to?</p>
          <input
            value={focus}
            onChange={(e) => {
              setFocus(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                localStorage.setItem("focus", focus);
                localStorage.setItem("activeFocusState", true);
                localStorage.setItem("check", false);
                setFocusState(true);
                setCheck(false);

                // window.location.reload(false);
              }
            }}
            type="text"
            className="mainpage-input"
            autoComplete="off"
            autoFocus
          />
        </div>
      )}
      {focusState && (
        <div className="focus-message">
          <div className="checkbox-container">
            <input
              checked={check}
              type="checkbox"
              className="check"
              id="checkbox"
              onChange={() => {
                localStorage.setItem("check", !check);
                setCheck((prev) => !prev); // type conversion string to boolean
              }}
            />
            {/* <p className={check ? "strike" : ""}>{focusMessage}</p> */}
            <label className={check ? "strike" : ""} htmlFor="checkbox">
              {focusMessage}
            </label>
          </div>
          <div>
            <i onClick={editHandler} class="far fa-edit icon"></i>
            <i onClick={deleteHandler} class="fas fa-times icon"></i>
          </div>
        </div>
      )}
    </>
  );
};

export { Focus };

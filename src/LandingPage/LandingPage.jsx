import "./LandingPage.css";
import { useData } from "../Context/data-context";

const LandingPage = ({ setUserName }) => {
  const {name , setName} = useData();
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
          onKeyPress={(e) => {
						if (e.key === "Enter") {
							localStorage.setItem("username", name);
              setUserName(name);
							window.location.reload(false);
						}
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

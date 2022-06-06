import { useEffect, useState } from "react";
import "./App.css";
import { LandingPage } from "./LandingPage/LandingPage";
import { MainPage } from "./MainPage/MainPage";

function App() {
  const [userName, setUserName] = useState(false);
  useEffect(() => {
    console.log("aralan");
    const newUser = localStorage.getItem("username");
    setUserName(newUser);
  }, [userName]);
  return (
    <div className="App">
      {userName ? <MainPage /> : <LandingPage setUserName={setUserName} />}
    </div>
  );
}

export default App;

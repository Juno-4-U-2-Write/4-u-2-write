import Timer from "./Timer";
import Instructions from "./Instructions";
import Form from "./Form";
import Prompts from "./Prompts";
import AddPrompt from "./AddPrompt";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import TimerContext from "../contexts/TimerContext";
import { FaSun, FaMoon } from "react-icons/fa";

const Main = ({ POTD, setPOTD, prompts, darkMode, handleToggle }) => {
  // !STATE ZONE
  const { time } = useContext(TimerContext);
  const navigate = useNavigate();

  // !USE EFFECT
  // *forces redirect to home if they got here without choosing a time (navigated directly, refreshed, etc) or if we're out of prompts
  useEffect(() => {
    if (time === "placeholder" || !time || !prompts) {
      navigate("/");
    }
    // comment to make eslint not angry with us:
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // !RETURN

  return (
    <div className={!darkMode ? "home lightMode" : "home darkMode"}>
      <main className="Main">
        <header>
          <div className="Main__leftHeader">
            {/* Notification Clock */}
            <Timer />
            {/* //writing prompt */}
            <div className="Main__nav">
              <button
                className="lightBtn home__lightModeBtn"
                onClick={handleToggle}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
              <Link className="lightBtn" to="/">
                Back↩
              </Link>
            </div>
          </div>
          <div className="Main__rightHeader">
            <Prompts prompts={prompts} POTD={POTD} setPOTD={setPOTD} />
          </div>
        </header>
        {/* Writing area */}
        <Form />
        <Instructions />
        <AddPrompt />
      </main>
    </div>
  );
};

export default Main;

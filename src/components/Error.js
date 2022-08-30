import { Link } from "react-router-dom";
import { useState } from "react";
const Error = () => {
  const [darkMode, setDarkMode] = useState(true);
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <section className={!darkMode ? "lightMode Error" : "darkMode Error"}>
      <button className="myButton" onClick={handleToggle}></button>
      <h1>404!</h1>
      <p>please stop tying nonsense!</p>
      <Link className="darkBtn" to={`/`}>
        learn to type you morron!
      </Link>
    </section>
  )
};

export default Error;

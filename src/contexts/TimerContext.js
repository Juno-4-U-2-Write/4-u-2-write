import { createContext, useState } from "react";

const TimerContext = createContext();

export function TimerProvider({ children }) {
  const [time, setTime] = useState(null);
  return (
    <TimerContext.Provider value={{ time, setTime }}>
      {children}
    </TimerContext.Provider>
  );
}
export default TimerContext;

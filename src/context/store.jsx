import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [mobile, setMobile] = useState(null);
  const cursorHover = React.useRef(null);
  const [cursorType, setCursorType] = useState("");

  const cursorChangeHandler = (cursorType) => {
    setCursorType(cursorType);
  };

  const values = React.useMemo(
    () => ({
      cursorHover,
      mobile,
      setMobile,
      cursorType,
      cursorChangeHandler
    }),
    [mobile, cursorHover, cursorType]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    console.error("Error deploying App Context!!!");
  }

  return context;
}

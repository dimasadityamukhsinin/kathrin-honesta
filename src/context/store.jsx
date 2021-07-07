import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [mobile, setMobile] = useState(false);
  // Detect cursor hover
  const cursorHover = React.useRef(null);
  const [cursorType, setCursorType] = useState("");

  // Detect cursor
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

  return context;
}

import React, { createContext, useContext, useState } from "react";

const defaultState = {
  cursorHoverOn: () => {},
  cursorHoverOff: () => {},
  cursorDefaultState: () => {},
};

const AppContext = createContext(defaultState);

export function AppWrapper({ children }) {
  const [mobile, setMobile] = useState(null);
  const cursorSel = React.useRef(null);
  const cursorTrailSel = React.useRef(null);
  const cursorHover = React.useRef(null);
  const [cursorType, setCursorType] = useState("");

  const cursorChangeHandler = (cursorType) => {
    setCursorType(cursorType);
  };

  const values = React.useMemo(
    () => ({
      cursorSel,
      cursorTrailSel,
      cursorHover,
      mobile,
      setMobile,
      cursorType,
      cursorChangeHandler
    }),
    [mobile, cursorSel, cursorTrailSel, cursorHover, cursorType]
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

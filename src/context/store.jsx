import React, { createContext, useContext } from "react";

const defaultState = {
  cursorHoverOn: () => {},
  cursorHoverOff: () => {},
  cursorDefaultState: () => {},
};

const AppContext = createContext(defaultState);

export function AppWrapper({ children }) {
  return (
    <AppContext.Provider
      value={{
        cursorSel: React.useRef(null),
        cursorTrailSel: React.useRef(null),
        cursorHover: React.useRef(null),
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    console.error("Error deploying App Context!!!");
  }

  return context;
}

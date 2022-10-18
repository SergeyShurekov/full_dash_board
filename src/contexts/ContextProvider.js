import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false
}

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [activeNav, setActiveNav] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false)

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  }

  const handleClickClose = () => {
    setIsClicked({ initialState });
  }

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value)
  }

  return (
    <StateContext.Provider value={{ activeMenu, setActiveMenu, activeNav, setActiveNav, isClicked, setIsClicked, handleClick, handleClickClose, screenSize, setScreenSize, setMode, currentMode, setCurrentMode, themeSettings, setThemeSettings }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
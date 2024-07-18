import { createContext, useReducer } from 'react';

export const BgThemeContext = createContext();

const bgThemeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_BG_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
}

export function BgThemeProvider({ children }) {
  const [state, dispatch] = useReducer(bgThemeReducer, {
    theme: '#94A3B8',
  });

  const changeBgTheme = (theme) => {
    dispatch({ type: 'CHANGE_BG_THEME', payload: theme });
  };

  return (
    <BgThemeContext.Provider value={{...state, changeBgTheme}}>
      {children}
    </BgThemeContext.Provider>
  );
}

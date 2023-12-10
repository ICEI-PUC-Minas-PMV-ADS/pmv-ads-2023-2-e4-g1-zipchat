import { create } from "zustand";

const getFromLocalStorage = () => {
  if(typeof window !== 'undefined'){
    const value = localStorage.getItem("theme");
    return value || 'light'
  }
};

const useThemeProvider = create((set) => {
  return {
    theme: getFromLocalStorage(),
    sideBarOpened: false,
    toggleTheme: () => {
      set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        return {theme: newTheme}
      })
    },
    setSideBarOpened: () => {
      set((state) => {
        const newState = !state.sideBarOpened;
        console.log(newState)
        return {sideBarOpened: newState}
      })
    }

  }
});

export {useThemeProvider}
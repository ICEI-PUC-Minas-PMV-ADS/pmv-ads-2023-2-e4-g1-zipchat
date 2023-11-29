import { create } from "zustand";

const Themes = {
  dark: {
    color: 'white',
    Background: '#343541',
    sidebarBackground: 'rgb(3 7 18)',
    buttonBackground: 'rgb(3 7 18)',
    headerBackground: '#343541',
    borderTop: "rgb(75 85 99)",
    backgroundInput: '#40414f',
    borderColorInput: 'rgba(31, 41, 55, .5)',
    backgroundSidebar: "rgb(17, 24, 39)",
    activeButton: 'rgb(3 7 18)',
    link: '#3685CD',
    backgroundColorForm: "#343541",
    backgroudColorForm: '#40414f',
    buttonForm: '#343541'
  },
  light: {
    color: 'black',
    Background: 'white',
    sidebarBackground: '#018266',
    buttonBackground: '#00A884',
    borderTop: "rgba(75, 85, 99, .2)",
    headerBackground: '#00A884',
    backgroundInput: 'white',
    borderColorInput: "rgba(31, 41, 55, .2)",
    backgroundSidebar: '#018266',
    activeButton: '#00A884',
    link: 'blue',
    backgroundColorForm: "#E8E8E8",
    backgroudColorForm: 'white',
    buttonForm: '#00A884'
  }
}

const useThemeProvider = create((set) => {
  return {
    theme: Themes.light,
    toggleTheme: () => {
      set((state) => {
        const newTheme = state.theme === Themes.light ? Themes.dark : Themes.light
        return {theme: newTheme}
      })
    }
  }
})


export {useThemeProvider}
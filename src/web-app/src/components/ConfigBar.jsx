import React from "react";
import { useThemeProvider } from "../zustang/ThemeProvider";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";
import IconLogoutBoxLine from "./icons/IconLogout";

function ConfigBar({logout}) {
  const { theme, toggleTheme } = useThemeProvider();

  return (
    <div className={`flex items-center justify-between py-1 px-4 `}>
      <div className="flex-1 truncate">
        <span>Olá Vinicius !</span>
      </div>
      <div
        onClick={toggleTheme}
        className=" flex items-center justify-evenly flex-1 "
      >
        {theme === "dark" ? (
          <IconSun widht={26} height={26} />
        ) : (
          <IconMoon widht={26} height={26} />
        )}
      </div>
        <div onClick={logout} className="">
          <IconLogoutBoxLine widht={16} height={16} />
        </div>
    </div>
  );
}

export default ConfigBar;

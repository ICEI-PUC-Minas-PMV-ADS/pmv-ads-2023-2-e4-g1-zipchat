import React from "react";
import IconRobot from "./icons/IconRobot";
import { useThemeProvider } from "../zustang/ThemeProvider";

function ChatMessageLoading() {
  const {theme} = useThemeProvider();
  return (
    <div className={`py-5 ${theme === 'dark' ? 'bg-gray-600/50' : 'bg-gray-600/10'}`}>
      <div className="max-w-4xl m-auto flex items-center">
        <div className="w-10 h-10 flex justify-center items-center mx-4 md:ml-0 rounded bg-green-900">
          <IconRobot width={24} height={24} />
        </div>
        <div className="flex-1 text-base ">
          <div className="w-2 h-4 bg-slate-300 animate-blink"></div>
        </div>
      </div>
    </div>
  );
}

export default ChatMessageLoading;

import React from "react";
import ChatMessageInput from "./ChatMessageInput";
import { useThemeProvider } from "../zustang/ThemeProvider";

function Footer({onSendMessage, disabled}) {
  const {theme} = useThemeProvider()
  
  return (
    <div className={`w-full border-t p-2 ${theme === 'dark' ? 'border-t-gray-600 ': 'border-t-gray-200'}`}>
      <div className="max-w-4xl m-auto">
        <ChatMessageInput
        onSend={onSendMessage}
        disabled={disabled}
        />

        <div className={`pt-3 text-center text-xs ${theme === 'dark' ? 'text-gray-300 ' :  'text-black/40'}`}>
          Kore wa toku ni no nani mo nai chatto desu.
          <a className="underline" href="https://www.google.com/search?q=tradutor"> Honyaku </a>
        </div>
      </div>
    </div>
    
  );
}

export default Footer;
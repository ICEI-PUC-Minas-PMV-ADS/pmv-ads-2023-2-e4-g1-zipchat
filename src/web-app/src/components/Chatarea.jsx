import React from "react";
import ChatPlaceholcer from "./ChatPlaceholder";
import ChatMessage from "./ChatMessage";
import { useThemeProvider } from "../zustang/ThemeProvider";
import ChatMessageLoading from "./ChatMessageLoading";


function Chatarea({chat, loading}) {
  const {theme} = useThemeProvider();
  
  return (
    <div className={`flex-auto h-0 overflow-y-scroll ${theme === 'dark' ? '' :  'text-black'}`}>
      {!chat ? (
        <ChatPlaceholcer />
      ) : (
        chat.messages && chat.messages.length > 0 ? (
          chat.messages.map((item, index) => (
            <div key={index} className="">
              <ChatMessage
                key={item.id}
                item={item}
              />
            </div>
          ))
        ) : (
          <ChatPlaceholcer />
        )
      )}
      {loading && <ChatMessageLoading />}

    </div>
  );
}

export default Chatarea;
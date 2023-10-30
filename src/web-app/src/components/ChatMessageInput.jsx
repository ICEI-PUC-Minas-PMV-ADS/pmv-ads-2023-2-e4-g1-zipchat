import React, { useEffect, useRef, useState } from "react";
import IconSend from "./icons/IconSend";
import { useThemeProvider } from "../zustang/ThemeProvider";

function ChatMessageInput({onSend, disabled}) {
  const [text, setText] = useState('');

  const TextEl= useRef(null);

  /* controla tamanho textarea */
  useEffect(() => {
    if(TextEl.current){
      TextEl.current.style.height = '0px';
      let scrollHeight = TextEl.current.scrollHeight;
      TextEl.current.style.height = scrollHeight + 'px';
    }
  }, [text, TextEl])

  const handleSendMessage = () => {
    if(!disabled && text.trim() !== ''){
      onSend(text);
      setText('')
    }
  }

  /*mandar mensagem com enter */
  const handleTextKeyUp = (e) => {
    if(e.code.toLowerCase() === 'enter' && !e.shiftKey){
      e.preventDefault();

      handleSendMessage();
    }
  }

  const {theme} = useThemeProvider();

  return (
    <div className={`flex border   p-2 rounded-md ${disabled && 'opacity-50'} ${theme === 'dark' ? 'bg-gpt-lightgray border-gray-800/50 ' : 'bg-dfdfdd text-black border-gray-800/20'}`}>

      <textarea className={`flex-1 border-0 bg-transparent resize-none outline-none h-7 max-h-48 overflow-y-auto `}
      ref={TextEl}
      placeholder="Digite uma mensagem"
      value={text}
      onChange={e => setText(e.target.value)}
      onKeyUp={handleTextKeyUp}
      disabled={disabled}
      >

      </textarea>

      <div onClick={handleSendMessage} className={`self-end p-1 cursor-pointer rounded ${text.length ? 'opacity-100 hover:bg-black/20' : 'opacity-20'}`}>
        <IconSend width={14} height={14} />
      </div>

    </div>
  );
}

export default ChatMessageInput;

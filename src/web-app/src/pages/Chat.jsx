import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Chatarea from "../components/Chatarea";
import Footer from "../components/Footer";
import { useThemeProvider } from "../zustang/ThemeProvider";
import { v4 as uuidv4 } from "uuid";
import SideBarChatButton from "../components/SideBarChatButton";
import { redirect, useNavigate } from "react-router-dom";
import { get, post} from '../services/httpAgent'

import { getDecodedAccessToken, removeAccessToken } from '../services/tokenService'
import { getAnamneses, dtoAnamneses, sendAnamnese } from "../services/anamneseService"

function Chat() {
  const navigate = useNavigate();
  const { theme } = useThemeProvider();

  const [chatActive, setChatActive] = useState({});
  const [AILoading, setAILoading] = useState(false);
  const [AiResponse, setAIResponse] = useState('');

  /**********simulando chat************************** */
  const [chatList, setChatList] = useState([]);
  const [booted, setBooted] = useState(false);
  const [chatActiveId, setChatActiveId] = useState("");

  const decodedToken = getDecodedAccessToken();
  const userName = decodedToken.email;
  const {setSideBarOpened} = useThemeProvider();

  
  useEffect(() => {
    setChatActive(chatList.find(item => item.id === chatActiveId));
  }, [chatActiveId, chatList]);

  useEffect(() => {
    if(!booted) {
      getLastChats();
    }
  }, [booted])

  useEffect(() => {
    if(AiResponse) {
      getAiResponse();
    }
  }, [AiResponse])

  
  const getLastChats = () => {
    getAnamneses(userName).
    then(response=>{
      setBooted(true)
      const lastChats = dtoAnamneses(response)
      console.log(lastChats)
      setChatList(lastChats)
    })
  }


  const getAiResponse = () => {
    setTimeout(() => {
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId);
      if(chatIndex > -1){
        chatListClone[chatIndex].messages.push({
          id: uuidv4, author: 'ai', body: AiResponse
        })
      }
      setChatList(chatListClone);
      setAILoading(false);
    }, 2000)
  }

  /************************************************* */

  /***********funcionalidade de botões *************8 */

  /* apagar conversas */
  const handleClearConversations = () => {
    if (AILoading) return;
    setChatActiveId("");
    setChatList([]);
  };

  /* nova conversa */
  const handleNewChat = () => {
    if (AILoading) return;
    setChatActiveId("");
    setSideBarOpened()
  };

  const sendUserMessage = async (message) => {
    sendAnamnese(username, message)
    .then((response) => {
      setAIResponse(response.data.resultadoIA)
    })    
  }

  /* manda mensagem*/
  const handleSendMessage = async (message) => {
    if (!chatActiveId) {
      let newChatid = uuidv4();
      setChatList([
        {
          id: newChatid,
          title: message,
          messages: [{ id: uuidv4, author: "me", body: message }],
        },
        ...chatList,
      ]);

      setChatActiveId(newChatid);

      await sendUserMessage(message)
    } else {
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex(
        (item) => item.id === chatActiveId
      );
      chatListClone[chatIndex].messages.push({
        id: uuidv4(),
        author: "me",
        body: message,
      });

      setChatList(chatListClone);
    }

    setAILoading(true);
  };

  const handleLogOut = () => {
    removeAccessToken()
    navigate('/')
  };
  
  const handleSelectChat = (id) => {
    if(AILoading) return;
    let item = chatList.find(item => item.id === id)
    if(item){
      setChatActiveId(item.id)
      setChatActive(chatList.find(item => item.id === chatActiveId));
      console.log(chatList)
    }
    //TODO: set text
  
  };

  const handleDeleteChat = (id) => {
    if(AILoading) return 
    let chatListClone = [...chatList];
    const chatIndex = chatListClone.findIndex(item => item.id === id);
    chatListClone.splice(chatIndex, 1);
    setChatList(chatListClone);
    setChatActiveId("");
  };

  return (
    <main
      className={`flex min-h-screen ${
        theme === "dark" ? "bg-gpt-gray" : "bg-white"
      }`}
    >
      <Sidebar
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
        onLogOut={handleLogOut}
      >
        {chatList.map(item => (
          <SideBarChatButton
          key={item.id}
          chatItem={item}
          active={item.id === chatActiveId}
          onClick={handleSelectChat}
          onDelete={handleDeleteChat}
          />
        ))}
      </Sidebar>

      <section className="flex flex-col w-full text-white">
        <Header
          title={chatActive ? chatActive.title : 'ZipChat'}
          newChatClick={handleNewChat}
        />

        <Chatarea chat={chatActive} loading={AILoading} appointment={true}/>

        <Footer onSendMessage={handleSendMessage} disabled={AILoading} />
      </section>
    </main>
  );
}

export default Chat;
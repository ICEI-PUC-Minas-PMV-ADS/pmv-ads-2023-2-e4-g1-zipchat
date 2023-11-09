import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Chatarea from "../components/Chatarea";
import Footer from "../components/Footer";
import { useThemeProvider } from "../zustang/ThemeProvider";
import { v4 as uuidv4 } from "uuid";
import SideBarChatButton from "../components/SideBarChatButton";
import { post} from "../../agent"

const exemploChat = {
  id: "1",
  title: "Exemplo de Chat",
  messages: [
    {
      id: "1",
      author: "me",
      body: "Olá, como você está?",
    },
    {
      id: "2",
      author: "ai",
      body: "Oi! Estou bem, obrigado. Como posso ajudar você hoje?",
    },
  ],
};



function Chat() {
  const { theme } = useThemeProvider();

  const [chatActive, setChatActive] = useState({});
  const [AILoading, setAILoading] = useState(false);
  const [AiResponse, setAIResponse] = useState('');

  /**********simulando chat************************** */
  const [chatList, setChatList] = useState([]);
  const [chatActiveId, setChatActiveId] = useState("");

  useEffect(() => {
      setChatActive(chatList.find(item => item.id === chatActiveId));
  }, [chatActiveId, chatList]);

  useEffect(() => {
    if(AiResponse) {
      getAiResponse();
    }
  }, [AiResponse])

  const getAiResponse = () => {
    setTimeout(() => {
      console.log(chatActiveId)
      console.log(AiResponse)
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
  const {setSideBarOpened} = useThemeProvider();

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

  const sendAnamnese = async (message) => {
    post('anamnese', {
      "emissor": "vinicius",
      "texto": message,
      "data": "2023-10-01T17:08:24.968Z"
    })
    .then((response) => {
      console.log(response);
      setAIResponse(response.data.resultadoIA)
    })
  }

  /* manda mensagem*/
  const handleSendMessage = async (message) => {
    console.log("chatActiveId",chatActiveId)
    if (!chatActiveId) {
      // Creating new chat
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

      await sendAnamnese(message)
    } else {
      // updating existing chat
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

  const handleLogOut = () => {};
  /************************************************** */

  /***********************funções no SideBarChatButton *********8 */

  /*** indica chat ativo na barra lateral */
  const handleSelectChat = (id) => {
    if(AILoading) return;
    let item = chatList.find(item => item.id === id)
    if(item) setChatActiveId(item.id)
  };

  const handleDeleteChat = () => {

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

        <Chatarea chat={chatActive} loading={AILoading}/>

        <Footer onSendMessage={handleSendMessage} disabled={AILoading} />
      </section>
    </main>
  );
}

export default Chat;

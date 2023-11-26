import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Chatarea from "../components/Chatarea";
import Footer from "../components/Footer";
import { useThemeProvider } from "../zustang/ThemeProvider";
import { v4 as uuidv4 } from "uuid";
import SideBarChatButton from "../components/SideBarChatButton";
import { post, get} from "../../agent"
import { redirect, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
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
  const navigate = useNavigate();
  const { theme } = useThemeProvider();

  const [chatActive, setChatActive] = useState({});
  const [AILoading, setAILoading] = useState(false);
  const [AiResponse, setAIResponse] = useState('');

  /**********simulando chat************************** */
  const [chatList, setChatList] = useState([]);
  const [chatActiveId, setChatActiveId] = useState("");

  const access_token = localStorage.getItem('access_token');

  const decodedToken = jwtDecode(access_token);

  // Acesse o nome do usuário a partir do token decodificado
  const userName = decodedToken.name.split(" ")[0];
  
  const getLastChats = () => {
    get(`anamnese/usuario/${userName}`).then(response => {
      let lastChats = response.data.map(message => ({
        id: message.id,
        title: message.sintomas,
        messages:[
        {
          author: 'me',
          body: message.sintomas
        },
        {
          author: 'ia',
          body: message.resultadoIA          
        }
      ]
      }));
      setChatList(lastChats)
    })
  }

  useEffect(() => {
      setChatActive(chatList.find(item => item.id === chatActiveId));
  }, [chatActiveId, chatList]);

  useEffect(() => {
    if(chatList.length == 0) {
      console.log("Getting previews messages...")
      getLastChats();
    }
  }, [chatList])

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
      "emissor": `${userName}`,
      "texto": message,
      "data": new Date().toISOString
    })
    .then((response) => {
      console.log(response);
      setAIResponse(response.data.resultadoIA)
    })
  }

  /* manda mensagem*/
  const handleSendMessage = async (message) => {
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

  const handleLogOut = () => {
    localStorage.removeItem('access_token');
    navigate('/')
  };
  /************************************************** */

  /***********************funções no SideBarChatButton *********8 */

  /*** indica chat ativo na barra lateral */
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
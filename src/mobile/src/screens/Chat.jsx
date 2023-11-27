import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";

import { ModalConten } from "../components/chat/ModalContent";
import { Header } from "../components/chat/Header";
import { ChatArea } from "../components/chat/ChatArea";
import { Footer } from "../components/chat/Footer";
import { SidebarChatButton } from "../components/chat/SidebarChatButton";
import { useThemeProvider } from "../theme/themeProvider";
import { post } from "../agent";

export default function Chat() {
  
  const [AiResponse, setAIResponse] = useState('');
  
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
        body: "Tudo ótimo, em que posso te ajudar",
      }
    ],
  };

  const [modalVisibility, setModalVisibility] = useState(false);
  const [chatActive, setChatActive] = useState({});
  const [AILoading, setAILoading] = useState(false);
  const [chatList, setChatList] = useState([]);
  const [chatActiveId, setChatActiveId] = useState("");

  useEffect(() => {
    const checkChatList = chatList.find(item => item.id === chatActiveId);
    setChatActive(checkChatList === undefined ? {} : checkChatList);
  }, [chatActiveId, chatList]);

  useEffect(() => {
    if(AILoading) getAIResponse();
  }, [AILoading]);

  // apagar todas as conversas! no banco de dados??
  const handleClearConversations = () => {
    if(AILoading) return;
    setChatActiveId("");
    setChatList([]);
    setModalVisibility(false);
  };

  //criar nova conversa
  const handleNewChat = () => {
    if(AILoading) return;
    setChatActiveId("");
    setModalVisibility(false);
  };

  // funções da sidebar--------------------------
  const handleSelectChat = (id) => {
    if(AILoading) return;
    let item = chatList.find(item => item.id === id);
    if(item) setChatActiveId(item.id);
    setModalVisibility(false);
  };

  const handleDeleteChat = (id) => {
    // esta função acontece somente no front, sem efeitos no back
    let chatListClone = [...chatList];
    const chatIndex = chatListClone.findIndex(item => item.id === id);
    chatListClone.splice(chatIndex, 1);
    setChatList(chatListClone);
    setChatActiveId("");
    setModalVisibility(false);
  };
  //---------------------------------------------

  //requição para a  API
  const getAIResponse = () => {
    setTimeout(() => {
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId);
      if(chatIndex > -1){
        chatListClone[chatIndex].messages.push({
          id: uuidv4(),
          author: 'ai',
          body: 'Resposta da AI'
        })
      }
      setChatList(chatListClone);
      setAILoading(false);
    }, 2000);
  };

  // recebe mensagem do input e cria a conversa
  const handleSendMessage = async (message) => {
    if(!chatActiveId){
      // Creating new chat
      let newChatId = uuidv4();
      setChatList([{
        id: newChatId,
        title: message,
        messages: [
          {id: uuidv4(), author: "me", body: message}
        ]
      }, ...chatList]);
      setChatActiveId(newChatId);

      await sendAnamnese(message)

    } else {
      //updating existing chat
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId);
      chatListClone[chatIndex].messages.push({
        id: uuidv4(),
        author: 'me',
        body: message
      })
      setChatList(chatListClone);
    }

    setAILoading(true);
  };

  const {theme} = useThemeProvider();

  return (
    <View style={[styles.container, {backgroundColor: theme.Background}]}>
      
      <Modal
        animationType="slide"
        visible={modalVisibility}
        transparent={false}
        onRequestClose={() => setModalVisibility(false)}
      >
        <ModalConten
          onClose={setModalVisibility}
          onClear={handleClearConversations}
          onNewChat={handleNewChat}
          modalVisibility={modalVisibility}
        >
          {
            chatList.map(item => (
              <SidebarChatButton 
              key={item.id}
              chatItem={item}
              active={item.id === chatActiveId}
              onClick={handleSelectChat}
              onDelete={handleDeleteChat}
              />
            ))
          }
        </ModalConten>
      </Modal>

      <View style={styles.section}>
        <Header
          openSidebarClick={() => setModalVisibility(true)}
          title={chatActive ? chatActive.title : 'ZipChat'}
          newChackClick={handleNewChat}
          modalVisibility={modalVisibility}
        />

        <ChatArea chat={chatActive} loading={AILoading}/>

        <Footer
        onSendMessage={handleSendMessage}
        disabled={AILoading}
        />
      </View>

      <StatusBar style="auto"  hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  section: {
    flex: 1,
  },
});

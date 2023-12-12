import React from "react";
import IconUser from "./icons/IconUser";
import IconRobot from "./icons/IconRobot";
import { useThemeProvider } from "../zustang/ThemeProvider";
import AppointmentFor from './AppointmentForm'

function ChatMessage({ item }) {
  const [showModal, setShowModal] = React.useState(false)
  
  const { theme } = useThemeProvider();
  return (
    <div
      className={`py-5 ${
        item.author === "ai" &&
        `${theme === "dark" ? "bg-gray-600/50" : "bg-gray-600/10"}`
      }`}
    >
      <div className="max-w-4xl m-auto flex">
        <div
          className={`text-white w-10 h-10 flex justify-center items-center mx-4
          md:ml-0 rounded ${
            item.author === "ai" ? "bg-green-900" : "bg-blue-900"
          } `}
        >
          {item.author === "me" && <IconUser width={24} height={24} />}
          {item.author === "ai" && <IconRobot width={24} height={24} />}
        </div>

        <div className="flex-1 text-base whitespace-pre-wrap">
          {item.body}
          {item.author === "ai" && (
            <h4
              onClick={() => setShowModal(true)}
              className={`mt-3   w-fit py-2 px-5 cursor-pointer  rounded-3xl transition-all ${
                theme === "dark"
                  ? "text-link-color hover:bg-gray-600"
                  : "text-blue-900 hover:bg-gray-300"
              }`}
            >
              Clique aqui para marcar uma consulta
            </h4>
          )}
        </div>
      </div>
      {showModal && <AppointmentFor onClose={setShowModal} />}
    </div>
  );
}

export default ChatMessage;

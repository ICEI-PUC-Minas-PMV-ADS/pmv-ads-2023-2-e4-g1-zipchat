import React, { useState } from "react";
import { useThemeProvider } from "../zustang/ThemeProvider";
import IconChatLeft from "./icons/IconChatLeft";
import IconTrash from "./icons/IconTrash";
import IconClose from "./icons/IconClose";
import IconCheck from "./icons/IconCheck";

function SideBarChatButton({ chatItem, active, onClick, onDelete }) {
  const [deleting, setDeleting] = useState(false);

  const { theme } = useThemeProvider();

  /*** seleciona um chat */
  const handleClickButton = () => {
    if (!deleting) {
      onClick(chatItem.id);
    }
  };

  const handleConfirmButton = () => {
    if (deleting) onDelete(chatItem.id);
    setDeleting(false);
  };

  const handleCancelButton = () => {
    setDeleting(false);
  };

  return (
    <div
      onClick={handleClickButton}
      className={`flex items-center rounded-md p-3 text-sm cursor-pointer ${
        theme === "dark" ? "hover:bg-gray-500/10" : "hover:bg-what-grenn/30"
      }
    ${
      theme === "dark"
        ? `${active ? "bg-gray-500/20" : "bg-transparent"}`
        : `${active ? "bg-what-grenn/40" : "bg-transparent"}`
    }
    `}
    >
      <div className="mr-3">
        {!deleting && <IconChatLeft width={16} height={16} />}
        {deleting && <IconTrash width={16} height={16} />}
      </div>

      <div className="flex-1 text-sm overflow-x-hidden">
        <p className="w-full bg-transparent text-sm truncate">
          {!deleting && chatItem.title}
          {deleting && `Delete "${chatItem.title}" `}
        </p>
      </div>

      {active && !deleting && (
        <div className="flex">
          <div
            onClick={() => setDeleting(true)}
            className="cursor-pointer opacity-60 hover:opacity-100"
          >
            <IconTrash width={16} height={16} />
          </div>
        </div>
      )}

      {deleting && (
        <div className="flex">
          <div
            onClick={handleConfirmButton}
            className="cursor-pointer opacity-60 hover:opacity-100 mr-2"
          >
            <IconCheck width={16} height={16} />
          </div>
          <div
            onClick={handleCancelButton}
            className="cursor-pointer opacity-60 hover:opacity-100"
          >
            <IconClose width={16} height={16} />
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBarChatButton;

import React from "react";
import IconClose from "./icons/IconClose";
import IconAdd from "./icons/IconAdd";
import SidebarButton from "./SidebarButton";
import IconTrash from "./icons/IconTrash";
import { useThemeProvider } from "../zustang/ThemeProvider";
import ConfigBar from "./ConfigBar";

function Sidebar({children, onClear, onNewChat, onLogOut}) {
  const {theme, setSideBarOpened, sideBarOpened} = useThemeProvider();

  return (
    <section className={`fixed left-0 top-0 bottom-0 text-white ${sideBarOpened ? 'w-screen bg-gray-600/75' : 'w-0'} md:w-64 md:static`}>
      <div className={` transition-all duration-200 flex h-screen ${sideBarOpened ? 'ml-0' : '-ml-96'} md:ml-0`}>

        <div className={`flex flex-col w-64 p-1 ${theme === 'dark' ? 'bg-gray-900 ' : 'bg-what-gree-darker'}`}>
          
          <div onClick={onNewChat} className={`flex items-center p-3 rounded-md text-sm cursor-pointer border border-white/20 ${theme === 'dark' ? 'hover:bg-gray-500/20' : 'hover:bg-what-grenn/20'}`}>
            <IconAdd width={16} height={16} className="mr-3"/>
            Nova Conversa
          </div>

          <nav className="flex-1 pt-2 overflow-y-auto">
            {children}
          </nav>

          {/*apagar conversar */}
          <div className={`border-t  pt-2 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'}`}>
            <SidebarButton 
            icon={<IconTrash width={16} height={16}/>}
            label="Apagar todoas as conversas"
            onClick={onClear}
            />
          </div>

          <div className={`border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-100'}`}>
              <ConfigBar
                logout={onLogOut}
              />
          </div>

        </div>

        {/* fechar sidebar mobile*/}
        <div onClick={setSideBarOpened} className="flex justify-center items-center w-10 h-10 md:hidden">
          <IconClose width={24} height={24}/>
        </div>

      </div>
    </section>
  )
}

export default Sidebar;
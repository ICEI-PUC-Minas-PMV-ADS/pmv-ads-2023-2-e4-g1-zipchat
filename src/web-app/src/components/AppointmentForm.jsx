import React, { useState } from "react";
import { useThemeProvider } from "../zustang/ThemeProvider";
import IconClose from "./icons/IconClose";
import Calendar from "react-calendar";

import IconCalendar from "./icons/IconCalendar";

function AppointmentForm({ onClose }) {
  const [showCalendar, setShowCalendar] = useState(false)
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    medico: "",
    especialidade: "",
    date: ""
  })
  const [date, setDate] = useState(new Date());

  const { theme } = useThemeProvider();

  const handleInput = (fieldName, value) => {
    setForm({...form, [fieldName]: value})
  }

  const handleForm = () => {
    const values = Object.values(form)
    const emptyValue = values.some(value => value === "")
    if(emptyValue) {
      setErrorMessage("Por favor, preencha todos os campos.");
      return
    }
    
    setErrorMessage("");
    showCalendar(false)
  }

  return (
    <div className={`fixed left- inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center`}>
    <div className={`w-[600px] h-[500px] bg-slate-200 rounded-2xl flex relative`}>
      <div className="p-1 flex flex-col flex-1 relative">
        <div onClick={() => onClose(false)} className="self-end cursor-pointer">
          <IconClose width={26} height={26} />
        </div>

        <div className={`flex-1 mt-1 rounded-bl-2xl rounded-br-2xl  ${showCalendar ? "backdrop-blur-sm" : ""} ${theme === 'dark' ? 'bg-gpt-gray' : 'bg-white'}`}>
          <h4 className="text-center text-2xl">Marcar consulta</h4>

          <div className="h-3/6 justify-evenly flex flex-col relative">
            <input
              name="medico"
              type="text"
              placeholder="Médico"
              className={`text-lg outline-none ml-5  rounded-sm p-3 pb-1 w-4/5 border-b-2 ${theme === 'dark' ? 'bg-gpt-gray' : 'bg-white'}`}
              value={form.medico}
              onChange={(e) => handleInput("medico", e.target.value)}
            />

            <input
              name="especialidade"
              type="text"
              placeholder="Especialidade"
              className={`text-lg outline-none ml-5  rounded-sm p-3 pb-1 w-4/5 border-b-2 ${theme === 'dark' ? 'bg-gpt-gray' : 'bg-white'}`}
              value={form.especialidade}
              onChange={(e) => handleInput("especialidade", e.target.value)}

            />

            {/* <div className="flex ml-5 flex-row items-center">
              <h4 className={`${theme === 'dark' ? 'white' : 'text-gray-500'}`}>Data: </h4>
              <div onClick={() => setShowCalendar(true)} className="cursor-pointer ml-4">
                <IconCalendar width={30} height={30} className={`${theme === 'dark' ? 'white' : 'text-gray-500'}`} />
              </div>
            </div> */}

            {showCalendar && (
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 border bg-white border-1 p-2 flex items-center rounded-3xl flex-col backdrop-blur-sm`}>
                <Calendar onChange={(date) => handleInput("date", date)} value={date} className="w-full flex flex-col items-center text-black" />
                <h4
                  onClick={() => setShowCalendar(false)}
                  className="p-2 cursor-pointer px-5 text-black"
                >
                  Fechar
                </h4>
              </div>
            )}
          </div>
          {errorMessage && (
              <p className="text-red-500 text-center mt-2">{errorMessage}</p>
            )}
          <button onClick={handleForm} className={` text-lg transition-all text-white py-2 px-10 rounded-md mt-4 mx-auto block
          
          ${theme === 'dark' ? 'bg-gpt-lightgray hover:bg-gpt-lightgray/40' : 'bg-what-gree-darker hover:bg-what-grenn'}`}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default AppointmentForm;

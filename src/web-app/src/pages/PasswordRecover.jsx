import React, { useRef, useState } from "react";
import IconEye from "../assets/icons/IconEye";
import IconEyeInvisible from "../assets/icons/IconEyeInvisible";
import IconExclamationCircle from "../assets/icons/IconExclamationCircle";
import IconArrowBackOutline from "../assets/icons/IconArrowBackOutline";
import passRecorverImg from '../assets/DesignPass.png';

function PasswordRecover() {
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showExlamation, setShowExlamation] = useState(false);

  const sendFormDataExample = (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      setPassword("");
      setConfirmPass("");
      return setShowExlamation(true);
    }

    setShowExlamation(false);

    const data = new FormData(e.target);

    const formValues = {
      username: data.get("email"),
      password: data.get("confirmPassword"),
    };
    // RESTANTE DO CÓDIGO
    console.log(formValues);
  };

  const nameInputRef = useRef();

  const passwordNotIgual = () => {
    return (
      <div className="relative">
        {showExlamation && (
          <IconExclamationCircle width={21} height={21} className="absolute right-4 top-1/2 transform -translate-y-1/2" />
        )}
      </div>
    );
  };

  return (
    <section className="flex border-2 items-center w-full  justify-center h-screen md:h-[80vh]  bg-colors-whatsapp-green max-w-screen-xl ">
      <div className="flex w-full md:w-3/6 flex-col items-center ">

     
        <h1 className="md:text-3xl lg:text-5xl text-4xl mt-10 mb-14 lg:mb-4 font-bold text-white">
          Esqueceu senha?
        </h1>

        <form
          onSubmit={sendFormDataExample}
          className="flex flex-col w-4/5 lg:w-3/5"
        >

          <div className="flex items-center  mt-3">
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              className="text-lg  bg-white rounded-3xl p-3 w-full"
            />
          </div>

          <div className="flex  items-center mt-3">
            <input
              name="password"
              type={"password"}
              placeholder={
                showExlamation ? "Senhas não são iguais" : "Nova senha"
              }
              className="text-lg bg-white rounded-3xl p-3 w-full"
              value={password}
              ref={nameInputRef}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordNotIgual()}
          </div>

          <div className="flex  items-center mt-3">
            <input
              name="confirmPassword"
              type={"password"}
              placeholder={
                showExlamation ? "Senhas não são iguais" : "Confirme nova senha"
              }
              className="text-lg bg-white rounded-3xl p-3 w-full"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
            {passwordNotIgual()}
          </div>

          <button
            className="mt-12 transition-all duration-300 hover:bg-colors-whatsapp-green-button/80 p-3 md:w-full bg-colors-whatsapp-green-button rounded-lg text-white font-bold text-xl"
            type="submit"
          >
            Enviar
          </button>
        </form>

        <div onClick={""} className="font-bold flex justify-center cursor-pointer p-2  mt-8 text-white">
          <IconArrowBackOutline width={24} height={24}className="mr-5"/>
          <span >Voltar Login</span>
        </div>
      </div>

      <div className=" w-4/6 h-full max-h-screen hidden md:flex flex-col items-center bg-white">
       
        <div className=" overflow-y-hidden flex items-center justify-center w-full h-full ">
          <img
            alt=" cell phone image"
            src={passRecorverImg}
            className="h-full md:h-3/4 md:self-end object-fill w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default PasswordRecover;

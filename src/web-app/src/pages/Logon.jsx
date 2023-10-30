import React, { useRef, useState } from "react";
import IconEye from "../assets/icons/IconEye";
import IconEyeInvisible from "../assets/icons/IconEyeInvisible";
import IconExclamationCircle from "../assets/icons/IconExclamationCircle";
import design from "../assets/Design03.png";
import './telas.css';

function Logon() {
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
      name: data.get("name"),
      usuário: data.get("usuario"),
      username: data.get("email"),
      password: data.get("confirmPassword"),
    };

    console.log(formValues);
  };

  const nameInputRef = useRef();

  const passwordNotIgual = () => {
    return (
      <>
        {showExlamation && (
          <IconExclamationCircle width={21} height={21} className="ml-auto" />
        )}
      </>
    );
  };

  return (
    <section className="flex items-center h-screen justify-center">
      <div className="flex border-2 items-center w-full  justify-center h-screen md:h-[80vh]  bg-white max-w-screen-xl ">
        <div className="flex w-full md:w-3/6 flex-col items-center ">
          <h1 className="md:text-3xl lg:text-5xl text-4xl mt-10 mb-14 lg:mb-4 font-bold text-what-grenn">
            Cadastro
          </h1>

          <form
            onSubmit={sendFormDataExample}
            className="flex flex-col w-4/5 lg:w-3/5"
          >
            <div className="flex items-center  mt-3 lg:mt-1">
              <input
                name="name"
                type="text"
                placeholder="Nome"
                className="text-lg rounded-3xl p-3 w-full"
              />
            </div>

            <div className="flex  items-center mt-3 lg:mt-1">
              <input
                name="usuario"
                type="text"
                placeholder="Usuário"
                className="text-lg rounded-3xl p-3 w-full"
              />
            </div>

            <div className="flex  items-center mt-3 lg:mt-1">
              <input
                name="email"
                type="email"
                placeholder="E-mail"
                className="text-lg rounded-3xl p-3 w-full"
              />
            </div>

            <div className="flex  items-center mt-3 lg:mt-1">
              <input
                name="password"
                type={"password"}
                placeholder={showExlamation ? "Senhas não são iguais" : "Senha"}
                className="text-lg rounded-3xl p-3 w-full"
                value={password}
                ref={nameInputRef}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordNotIgual()}
            </div>

            <div className="flex  items-center mt-3 lg:mt-1">
              <input
                name="confirmPassword"
                type={"password"}
                placeholder={
                  showExlamation ? "Senhas não são iguais" : "Confirme Senha"
                }
                className="text-lg rounded-3xl p-3 w-full"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
              />
              {passwordNotIgual()}
            </div>

            <button
              className="mt-12 lg:mt-4 transition-all duration-300 hover:bg-colors-whatsapp-green-button/80 p-1 md:w-5/5 bg-what-grenn rounded-lg text-white font-bold text-xl"
              type="submit"
            >
              Cadastro
            </button>
          </form>

          <div className="text-blue-link mt-8 lg:mt-3">
            <span>Já tem uma conta? Log in</span>
          </div>
        </div>

        <div className=" w-4/6 h-full max-h-screen hidden md:flex flex-col items-center bg-what-grenn">
          <div className="p-4 text-white text-6xl ml-auto font-bold">
            <h1>Criar nova conta</h1>
          </div>
          <div className=" overflow-y-hidden flex items-center justify-center w-full h-full ">
            <img
              alt=" cell phone image"
              src={design}
              className="h-full md:h-3/4 lg:h-full md:self-end object-fill w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Logon;

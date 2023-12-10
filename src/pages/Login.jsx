import React, { useState } from "react";
import IconCircleUser from "../assets/icons/IconCircleUser";
import IconLockCircle from "../assets/icons/IconLockCircle";
import IconEye from "../assets/icons/IconEye";
import IconEyeInvisible from "../assets/icons/IconEyeInvisible";
import zipchatLogo from "../assets/zipchat02.png";
import design from "../assets/Design.png";
import './telas.css';
import { redirect, useNavigate } from "react-router-dom";
import { userAutentication } from '../services/authenticationService'

function Login() {
  const [hasLenght, setHasLength] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const sendFormDateExample = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
  
    const formValues = {
      email: data.get("email"),
      password: data.get("password"),
    };
  
    userAutentication(formValues)
    .then((authSuccess) => {
        if (authSuccess) {
           navigate('/chat')
        } else {
            console.log('Falha na autenticação');
        }
    })
    .catch((error) => {
        console.error('Erro na autenticação:', error);
        setError("Credenciais inválidas. Verifique seu e-mail e senha."); 
    });

  };

  return (
    <section className="flex items-center h-screen justify-center">
    <div className="flex border-2 items-center w-full  justify-center h-screen md:h-[80vh]  bg-white max-w-screen-xl ">
      <div className="flex w-full md:w-3/6 flex-col items-center ">
        <div className="flex items-center justify-center">
          <img src={zipchatLogo} alt="logo" width={170} className="lg:w-2/5"/>
        </div>

        <h1 className="md:text-3xl lg:text-2xl text-4xl lg:mt-2 mb-14 lg:mb-4 font-bold text-what-grenn">
          Bem-vindo de volta
        </h1>

        <form onSubmit={sendFormDateExample} className="flex flex-col w-4/5 md:w-3/5">
          <div className="flex  items-center p-2 ">
            <IconCircleUser className="mr-3" width={20} height={20} />
            <input
              name="email"
              placeholder="E-mail"
              className="text-lg"
            />
          </div>

          <div className="flex  items-center p-2 mt-5">
            <IconLockCircle width={20} height={20} className="mr-3" />
            <input
              name="password"
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className="text-lg"
              value={hasLenght}
              onChange={(e) => setHasLength(e.target.value)}
            />
            {!showPass && (
              <IconEyeInvisible
                onClick={() => setShowPass(true)}
                width={21}
                height={21}
                className="ml-auto"
              />
            )}
            {showPass && (
              <IconEye
                onClick={() => setShowPass(false)}
                width={21}
                height={21}
                className="ml-auto"
              />
            )}
          </div>

          <div
            onClick={() => {navigate('/recorver')}}
            className="ml-auto text-blue-link  mt-8 cursor-pointer"
          >
            <span>Esqueceu password</span>
          </div>

          <button
            className="mt-12 transition-all duration-300 hover:bg-colors-whatsapp-green-button/80 p-1 md:w-5/5 bg-what-grenn rounded-lg text-white font-bold text-xl"
            type="submit"
          >
            Login
          </button>
        </form>
        {error && (
            <div className="text-red-500 mt-4 text-lg">
              {error}
            </div>
          )}
        <div onClick={() => {navigate('/logon')}} className="text-blue-link mt-8 cursor-pointer">
          <span>Não tem conta? Cadastre</span>
        </div>
      </div>

      <div className=" w-4/6 relative h-full hidden md:flex items-center">
        <div className="absolute h-3/6 w-4/6 bg-what-grenn right-0 top-0"></div>
        <div className="z-10">
          <img alt="cell phone image" src={design} className="" />
        </div>
      </div>
    </div>
    </section>
  );
}

export default Login;

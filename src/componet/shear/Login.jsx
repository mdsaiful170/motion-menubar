import { motion } from "framer-motion";
import { Button } from "./button";
import { useState } from "react";
import { LoginForm, RegisterForm } from "./Form";
const Login = ({ isloginopen, toggler }) => {
  const [activefrom, setActiveFrom] = useState("login");
  const fromHandeler = (form) => {
    setActiveFrom(form);
  };
  return (
    <>
      <motion.div
        className=" top-0 bg-[#ECE3CA]/50 dark:bg-darkBg/5 backdrop-blur shadow border-e border-e-bgcolor  dark:border-white/10 p-4 fixed right-0 w-3/4 lg:w-1/3 h-screen z-[99]"
        inherit={{ x: "-100%" }}
        animate={{ x: isloginopen ? "0" : "100%" }}
      >
        <button
          className="p-1 px-2 bg-darkBg rounded-full absolute right-4"
          onClick={toggler}
        >
          <i className="ri-close-line text-lg font-bold text-white "></i>
        </button>

        <div className="flex  items-center flex-col  justify-center h-full space-y-4 ">
          <div className="space-x-4 mx-auto">
            <Button
              onClick={() => fromHandeler("login")}
              className={`${
                activefrom === "login" ? "bg-darkBg text-white" : ""
              }`}
            >
              login
            </Button>
            <Button
              onClick={() => fromHandeler("register")}
              className={`${
                activefrom === "register" ? "bg-darkBg text-white" : ""
              }`}
            >
              register
            </Button>
          </div>
          {/* form login */}
          {activefrom === "login" && <LoginForm />}
          {/* form register */}
          {activefrom === "register" && <RegisterForm />}
        </div>
      </motion.div>
    </>
  );
};

export default Login;

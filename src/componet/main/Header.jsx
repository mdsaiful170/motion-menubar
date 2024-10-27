import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { Menus } from "../../data";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import MenusList from "./MenusList";
import MobileMenus from "./MobileMenus";
import Login from "../shear/Login";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("dark") || "light");
  const themeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const [isOpen, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const loginToggler = () => setShowLogin((pre) => !pre);
  const menuHandler = () => setOpen((pre) => !pre);
  useEffect(() => {
    localStorage.setItem("dark", theme);
    document.querySelector("html").classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
      <header className="shadow fixed left-0 right-0 top-0 bg-[#f4efe2] dark:bg-[#202020]  z-50">
        <nav className="flex items-center container mx-auto py-4 px-4 lg:px-0 justify-between ">
          <a href="">
            <h2 className=" sm:text-3xl text-lg   from-teal-500 dark:from-teal-400 to-darkBg  dark:to-slate-200  bg-gradient-to-r text-transparent bg-clip-text font-rubik font-normal">
              InterStellar
            </h2>
          </a>
          <ul className="lg:flex hidden items-center gap-x-7">
            {Menus.map((menuList) => (
              <MenusList menu={menuList} key={menuList.name} />
            ))}
          </ul>
          <div className="flex items-center gap-x-2 lg:gap-x-4">
            <button
              onClick={themeHandler}
              className="p-2 bg-bgcolor/5   dark:text-white dark:bg-darkBg/5 backdrop-blur-lg border dark:border-darkGreen/25 border-bgcolor  font-bold text-headingcolor rounded-lg"
            >
              {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
              {theme === "light" ? false : true}
            </button>
            <button
              className="lg:text-base text-sm text-nowrap font-semibold  px-6 py-2 bg-bgcolor/15 border-bgcolor backdrop-blur rounded-lg dark:bg-darkBg/5 dark:border-darkGreen/25 border b dark:text-white text-headingcolor"
              onClick={loginToggler}
            >
              Sign Up
            </button>
            <button
              onClick={menuHandler}
              className="p-2 bg-bgcolor/5 lg:hidden border dark:border-darkGreen/25 border-bgcolor dark:text-white backdrop-blur-lg dark:bg-darkBg/5 font-bold text-headingcolor rounded-lg"
            >
              {isOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
            <div>
              <MobileMenus isOpen={isOpen} />
            </div>
            <div>
              <Login isloginopen={showLogin} toggler={loginToggler} />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

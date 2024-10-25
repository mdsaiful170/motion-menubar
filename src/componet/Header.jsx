import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { Menus } from "../data";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import MenusList from "./MenusList";
import MobileMenus from "./MobileMenus";
const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("dark") || "light");
  const themeHandler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const [isOpen, setOpen] = useState(false);
  const menuHandler = () => setOpen((pre) => !pre);
  useEffect(() => {
    localStorage.setItem("dark", theme);
    document.querySelector("html").classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
      <header className=" bg-bgcolor/25 dark:bg-darkBg/25 ">
        <nav className="flex items-center container mx-auto py-4 px-4 lg:px-0 justify-between ">
          <a href="">
            <h2 className="lg:text-4xl sm:text-2xl text-xl from-teal-500 dark:from-teal-400 to-darkBg  dark:to-slate-200  bg-gradient-to-r text-transparent bg-clip-text font-rubik font-normal  md:text-3xl  ">
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
              className="p-2 bg-bgcolor   dark:text-white dark:bg-darkBg  font-bold text-headingcolor rounded-lg"
            >
              {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
              {theme === "light" ? false : true}
            </button>
            <button className="lg:text-base text-sm text-nowrap font-semibold  px-6 py-2 bg-bgcolor rounded-lg dark:bg-darkBg dark:text-white text-headingcolor">
              Sign Up
            </button>
            <button
              onClick={menuHandler}
              className="p-2 bg-bgcolor lg:hidden    dark:text-white dark:bg-darkBg  font-bold text-headingcolor rounded-lg"
            >
              {isOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
            <div>
              <MobileMenus isOpen={isOpen} />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

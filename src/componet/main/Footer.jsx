import React from "react";
import { Container } from "../shear/Container";
import { Menus } from "../../data";
import {
  Dribbble,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  X,
} from "lucide-react";

const Footer = () => {
  return (
    <section className="mt-16 lg:mt-[80px] z-10 bg-darkBg/5 relative overflow-hidden backdrop-blur-[12px]">
      <div className="absolute left-0 top-1/4  w-80  opacity-25 rounded-full h-80 bg-red-400  blur-[180px] -z-10"></div>
      <div className="absolute right-0 top-1/2 bottom-0 w-80  opacity-35 dark:opacity-30 rounded-full h-80 bg-teal-400  blur-[180px] -z-10 mix-blend-exclusion dark:mix-blend-luminosity"></div>

      <footer className="py-8 px-5 pt-16">
        <Container className={""}>
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <a href="#">
                <h2 className="sm:text-2xl text-lg from-teal-800 dark:from-teal-400 to-darkBg dark:to-slate-200 bg-gradient-to-r text-transparent bg-clip-text font-rubik font-normal">
                  InterStellar
                </h2>
              </a>
              <p className="text-sm max-w-lg lg:max-w-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
                adipisci tenetur suscipit?
              </p>
              <div className="flex items-center gap-x-1 pt-5 lg:pt-8 pb-5">
                <a
                  className="border  p-2 rounded-lg dark:border-darkGreen/25 border-darkBg/35 shadow "
                  href="#"
                >
                  <Facebook size={16} />
                </a>
                <a
                  className="border  p-2 rounded-lg dark:border-darkGreen/25 border-darkBg/35 shadow "
                  href="#"
                >
                  <Twitter size={16} />
                </a>
                <a
                  className="border  p-2 rounded-lg dark:border-darkGreen/25 border-darkBg/35 shadow "
                  href="#"
                >
                  <Instagram size={16} />
                </a>
                <a
                  className="border  p-2 rounded-lg dark:border-darkGreen/25 border-darkBg/35 shadow "
                  href="#"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  className="border  p-2 rounded-lg dark:border-darkGreen/25 border-darkBg/35 shadow "
                  href="#"
                >
                  <Dribbble size={16} />
                </a>
              </div>
              <label className="w-full max-w-xl flex items-center rounded-lg h-9 border dark:border-darkGreen/25 border-darkBg/10   ">
                <input
                  type="submit"
                  value="Send"
                  className="px-5 h-full text-sm cursor-pointer rounded-s-lg bg-darkGreen  font-bold text-darkBg "
                />
                <input
                  type="text"
                  name="email"
                  className="w-full h-full bg-transparent bg-darkBg/5 backdrop-blur-lg text-base px-2 py-4 outline-none"
                />
              </label>
            </div>

            <div className="grid  sm:grid-cols-4 grid-cols-2  lg:grid-cols-4 col-span-2 gap-5 md:gap-8">
              {Menus.filter(
                (menu) => menu.name !== "Pricing" && menu.name !== "Contact"
              ).map((res, name) => (
                <div key={name}>
                  <h3 className="text-base pb-4 font-bold dark:text-darktextwhite ">
                    {res.name}
                  </h3>
                  <ul className="space-y-4">
                    {res.subMenu &&
                      res.subMenu.map((item) => (
                        <li
                          className="flex items-center gap-x-2  cursor-pointer group/box"
                          key={item.name}
                        >
                          <p>{item.icon && <item.icon className="size-4" />}</p>
                          <span className="text-sm font-normal text-textcollor dark:text-darktextcolor group-hover/box:ps-1 transition-all duration-150 ease-linear group-hover/box:font-semibold dark:group-hover/box:text-darkGreen">
                            {item.name}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-textcollor font-popines dark:text-darktextcolor text-sm">
              <i className="ri-copyright-line text-base ">
                2024 Md Saiful Islam. All rights reserved.
              </i>
            </p>
          </div>
        </Container>
      </footer>
    </section>
  );
};

export default Footer;

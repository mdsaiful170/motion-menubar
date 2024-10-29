import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Menus } from "../../data";
import { useState } from "react";

const MobileMenus = ({ isOpen }) => {
  const [active, setActive] = useState(false);

  const submenuAnimation = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };
  return (
    <>
      <motion.ul
        className=" h-full lg:hidden z-[1200] overflow-y-auto w-3/4 fixed left-0 right-0 top-0 bg-[#ECE3CA]/5 dark:bg-darkBg/5 backdrop-blur-xl shadow border-e border-e-bgcolor dark:border-white/10 p-4"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0" : "-100%" }}
      >
        {Menus.map(({ name, subMenu }, i) => {
          const isClick = active === i;
          const hassubmenu = subMenu?.length;
          return (
            <motion.li key={name} className=" mb-2 cursor-pointer">
              <span
                className={`flex items-center p-4 justify-between hover:bg-bgcolor dark:hover:bg-darkBg/50 rounded-lg font-bold ${
                  isClick ? "bg-bgcolor dark:bg-darkBg/50" : ""
                }`}
                onClick={() => {
                  setActive(isClick ? null : i);
                }}
              >
                {name}
                {hassubmenu && (
                  <ChevronDown
                    className={`cursor-pointer ${isClick ? "rotate-180" : ""}`}
                  />
                )}
              </span>

              {hassubmenu && (
                <motion.ul
                  initial="exit"
                  animate={isClick ? "enter" : "exit"}
                  variants={submenuAnimation}
                  className="ml-4"
                >
                  {hassubmenu &&
                    subMenu.map(({ name, icon: Icon }) => (
                      <li
                        key={name}
                        className="flex items-center group/box gap-x-2 mt-4 transition-all "
                      >
                        <div className="p-2 rounded-lg bg-bgcolor group-hover/box:bg-darkGreen group-hover/box:text-white dark:bg-darkBg text-sm dark:group-hover/box:bg-white duration-300 dark:group-hover/box:text-darkBg ">
                          <Icon size={17} fontWeight={500} />
                        </div>
                        <span className="text-base font-medium">{name}</span>
                      </li>
                    ))}
                </motion.ul>
              )}
            </motion.li>
          );
        })}
      </motion.ul>
    </>
  );
};

export default MobileMenus;

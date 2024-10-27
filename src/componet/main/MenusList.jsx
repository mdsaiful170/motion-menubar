import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
const MenusList = ({ menu }) => {
  const [isHover, setHover] = useState(false);
  const hoverHandeler = () => setHover((pre) => !pre);
  const haseMenu = menu?.subMenu?.length;

  const subboxAnimation = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.5 },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: { duration: 0.5 },
      display: "none",
    },
  };

  return (
    <>
      <motion.li
        className="group/link"
        key={menu.name}
        onHoverStart={() => {
          hoverHandeler();
        }}
        onHoverEnd={hoverHandeler}
      >
        <span className="flex items-center gap-x-2 cursor-pointer font-semibold text-headingcolor dark:text-[#CDCDCD]">
          {menu.name}
          {haseMenu && (
            <ChevronDown className="group-hover/link:rotate-180 cursor-pointer transition duration-200" />
          )}
        </span>

        {haseMenu && (
          <motion.div
            className="rounded-lg z-10 absolute top-20 border border-bgcolor dark:border-darkGreen/25 bg-[#ECE3CA]/5 origin-[50%_-100%] shadow dark:bg-darkBg/5 !backdrop-blur-xl p-4"
            animate={isHover ? "enter" : "exit"}
            initial="exit"
            variants={subboxAnimation}
          >
            <div
              className={`grid gap-6 ${
                menu.gridCols === 3
                  ? "grid-cols-3"
                  : menu.gridCols === 2
                  ? "grid-cols-2"
                  : "grid-cols-1"
              }`}
            >
              {haseMenu &&
                menu.subMenu.map((submenu, i) => (
                  <div key={i} className="cursor-pointer relative">
                    {menu.gridCols > 0 && menu.subMenuHeading?.[i] && (
                      <p className="pb-4 text-textcollor text-base dark:text-darktextcolor">
                        {menu.subMenuHeading?.[i]}
                      </p>
                    )}
                    <div className="flex items-center group/box transition gap-3">
                      <div className="p-2 bg-bgcolor duration-300 dark:group-hover/box:bg-white dark:group-hover/box:text-darkBg rounded-lg dark:bg-darkBg group-hover/box:bg-darkGreen group-hover/box:text-white">
                        {submenu.icon && <submenu.icon />}
                      </div>
                      <div>
                        <h2 className="dark:text-darktextcolor text-headingcolor font-semibold text-base">
                          {submenu.name}
                        </h2>
                        <p className="text-sm text-textcollor font-normal dark:text-darktextcolor/75">
                          {submenu.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        )}
      </motion.li>
    </>
  );
};

export default MenusList;

import { cd } from "../../../lib/cd";

export const Button = ({ className, children, onClick }) => {
  return (
    <>
      <button
       onClick={onClick}
        className={cd(
          "px-4 py-2 bg-darkGreen rounded-lg  text-darkBg font-semibold   transition-all duration-200 lg:text-base  text-sm",
          className
        )}
      >
        {children}
      </button>
    </>
  );
};

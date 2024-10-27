import { ChevronRight } from "lucide-react";
import { Button } from "./Button";
import { cd } from "../../../lib/cd";

export const Herocard = (props) => {
  const { className, id, img, name, model } = props || {};
  return (
    <>
      <div
        key={id}
        className={cd(" flex flex-col justify-center items-center", className)}
      >
        <h1 className="lg:text-7xl font-rubik md:text-5xl text-transparent bg-gradient-to-r  bg-clip-text from-darkBg to-teal-950 text-5xl pb-4  dark:from-teal-100 dark:bg-darkGreen">
          Find Your Dream Car
        </h1>
        <div className="inline-flex items-center justify-center gap-x-5 lg:flex-row flex-col">
          <div>
            <p className="max-w-lg mx-auto text-xs sm:text-sm   md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              ipsa nesciunt mollitia dignissimos asperiores odio illum
              exercitationem. Quo, fugit et? Consequuntur maiores architecto
              tempora temporibus veritatis nemo sunt a rem!
            </p>
            <div className="space-x-4 pt-5">
              <Button className="btn py-[9.5px] bg-darkBg text-darktextcolor">
                Get Started
              </Button>
              <Button className="btn inline-flex items-center gap-x-1">
                Learn more <ChevronRight size={16} />
              </Button>
            </div>
          </div>

          <div className="text-center pt-8">
            <img
              src={img}
              alt="car"
              className=" object-cover max-w-full block"
            />
            <p className="text-sm font-semibold lg:text-base ">{name} </p>
            <p className="text-xs text-darkBg bg-darkGreen rounded-lg inline-block px-3 font-semibold ">
              {model}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

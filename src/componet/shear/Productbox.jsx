import { cd } from "../../../lib/cd";
import { Button } from "./Button";
export const Productbox = ({
  className,
  id,
  img,
  name,
  title,
  subtitle,
  color,
  amountone,
  amounttwo,
  bids,
}) => {
  return (
    <>
      <div
        key={id}
        className={cd(
          "p-6 rounded-lg  bg-darkBg/5 backdrop-blur-[12px]  border border-bgcolor group/box dark:border-darkGreen/25",
          className
        )}
      >
        <div className="h-40 w-full   rounded-lg py-2">
          <img
            src={img}
            alt="carimg"
            className="  h-full object-contain  w-full  group-hover/box:scale-110   ease-linear duration-200 transition-transform "
          />
        </div>
        <div className="pt-4 space-y-4 md:text-left text-center">
          <div>
            <h3 className="text-lg font-bold dark:text-darktextwhite ">
              {title}
            </h3>
            <p className="text-textcollor dark:text-darktextcolor text-sm">
              {subtitle}
            </p>
          </div>
          <div className="inline-flex items-center gap-x-3">
            <i className="ri-roadster-line text-lg p-1 px-2 border-darkBg/25 dark:border-darkGreen/25 border rounded-lg shadow dark:shadow-darkGreen/15"></i>
            <i className="ri-charging-pile-line text-lg p-1 px-2 border-darkBg/25 dark:border-darkGreen/25 border rounded-lg shadow dark:shadow-darkGreen/15"></i>
            <i className="ri-car-washing-line text-lg p-1 px-2 border-darkBg/25 dark:border-darkGreen/25 border rounded-lg shadow dark:shadow-darkGreen/15"></i>
            <i className="ri-remote-control-fill text-lg p-1 px-2 border-darkBg/25 dark:border-darkGreen/25 border rounded-lg shadow dark:shadow-darkGreen/15"></i>
            <div>
              <h3 className="text-sm font-bold dark:text-darktextwhite/75">
                {name}
              </h3>
              <span className="text-[12px] font-medium text-textcollor dark:text-darktextcolor">
                {color}
              </span>
            </div>
          </div>
          <div className="flex gap-x-3 items-center justify-between">
            <div className="flex items-center  gap-x-4 divide-x-[1px] divide-textcollor/50  dark:divide-darkGreen/25">
              <div>
                <h4 className="text-sm font-bold  dark:text-darktextwhite/75">
                  {amountone}
                </h4>
                <span className="text-[12px] font-medium text-textcollor dark:text-darktextcolor">
                  price
                </span>
              </div>
              <div className="ps-3">
                <h4 className="text-sm font-bold dark:text-darktextwhite/75">
                  {amounttwo}
                </h4>
                <span className="text-[12px] font-medium text-textcollor dark:text-darktextcolor">
                  {bids}
                </span>
              </div>
            </div>
            <Button className={"flex-1 px-2"}>Place Bid</Button>
          </div>
        </div>
      </div>
    </>
  );
};

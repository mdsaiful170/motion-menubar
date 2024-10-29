import { cd } from "../../../lib/cd";

export const ReviewCard = ({
  className,
  id,
  img,
  title,
  desc,
  pic,
  name,
  prof,
  rating,
  num,
}) => {
  return (
    <>
      <div
        key={id}
        className={cd(
          " rounded-lg h-[410px] w-full  bg-white/5 backdrop-blur-[12px]  border border-darkBg/10 group/box flex  items-center justify-between flex-col dark:border-darkGreen/20",
          className
        )}
      >
        <div className="h-[228px] w-full">
          <img src={img} className="w-full h-full rounded-lg" alt="img" />
        </div>
        <div className="p-2 flex-1 flex  flex-col justify-between ">
          <div>
            <h3 className="text-base font-bold dark:text-darktextwhite">
              {title}
            </h3>
            <p className="text-sm font-normal text-textcollor dark:text-darktextcolor">
              {desc}
            </p>
          </div>

          <div className="flex items-start justify-between pt-5 mt-auto ">
            <div className="flex items-center gap-x-4 ">
              <img
                src={pic}
                alt="picimg"
                className="size-10 rounded-full object-cover"
              />
              <div>
                <h4 className="text-sm font-bold dark:text-darktextwhite">
                  {name}
                </h4>
                <p className="text-sm font-normal text-textcollor dark:text-darktextcolor">
                  {prof}
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-x-1 ">
              <i className="ri-star-fill text-md font-bold text-darkGreen mb-1"></i>
              <p>
                <span className="font-bold">{rating}</span>
                <span>({num})</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

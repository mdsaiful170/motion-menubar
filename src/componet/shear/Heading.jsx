import { cd } from '../../../lib/cd'

export const Heading = ({children, className}) => {
  return (
    <>
      <h1 className={cd('text-4xl font-medium  text-transparent bg-clip-text text-center bg-gradient-to-r from-black font-rubik  to-emerald-500 dark:to-emerald-500 dark:from-darktextwhite bg-darkBg/5 border border-bgcolor dark:border-darkGreen/25 max-w-xs mx-auto rounded-full backdrop-blur-xl mb-8 ', className)}>{children}</h1> 
    </>
  )
}



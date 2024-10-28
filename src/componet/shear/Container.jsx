
import { cd } from '../../../lib/cd'

export const Container = ({children,className}) => {
  return (
    <>
      <div className={cd('max-w-screen-xl mx-auto   px-2 rounded-lg', className)}>
        {children}
      </div> 
    </>
  )
}



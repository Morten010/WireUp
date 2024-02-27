import { FC } from 'react'
import { PiCursor, PiSquare } from "react-icons/pi";

interface DrawToolbarProps {
  
}

const DrawToolbar: FC<DrawToolbarProps> = ({}) => {
  return (
    <div
    className='border-border border bg-background absolute top-4 left-2/4 rounded flex text-xl '
    >
        <button
        className='h-10 w-10 grid place-content-center hover:bg-primary/10'
        >
            <PiCursor />
        </button>
        <button
        className='h-10 w-10 grid place-content-center hover:bg-primary/10'
        >
            <PiSquare />
        </button>
    </div>
  )
}

export default DrawToolbar
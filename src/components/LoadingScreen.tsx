import { FC } from 'react'

interface LoadingScreenProps {
  
}

const LoadingScreen: FC<LoadingScreenProps> = ({}) => {
  return (
    <div
    className='w-full h-screen bg-background/60 backdrop-blur-sm grid place-content-center absolute top-0 left-0 z-[500]'
    >
        <div
        className='flex items-center flex-col justify-center'
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className='animate-spin text-primary'
            >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            <h2
            className='mt-2 font-semibold'
            >
                Loading...
            </h2>
        </div>
    </div>
  )
}

export default LoadingScreen
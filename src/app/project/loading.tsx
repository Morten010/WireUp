import React from 'react'

export default function loading() {
  return (
    <div
    className='w-full h-screen bg-background/60 backdrop-blur-lg grid place-content-center'
    >
        <div
        className='flex items-center flex-col justify-center'
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
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
            <h2>
                Loading...
            </h2>
        </div>
    </div>
  )
}

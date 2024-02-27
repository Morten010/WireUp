import Link from 'next/link'
import React from 'react'

export default function notfound() {
  return (
    <>
        <div
        className='max-w-screen-xl mx-auto relative h-screen'
        >
            <div
            className='bg-gradient-radial from-purple-500/30 to-transparent h-[50vh] aspect-square blur-3xl absolute top-0 left-0'
            />
            <div
            className='bg-gradient-radial from-secondary to-transparent h-[50vh] aspect-square blur-3xl absolute bottom-0 right-0'
            />
        </div>
        <div
            className='absolute top-0 left-0 w-full h-screen grid place-content-center backdrop-blur z-20 text-center'
            >
            <h2
            className='text-xl font-bold'
            >
                Page not found
            </h2>
            <p
            className='text-muted-foreground text-sm'
            >
                Go back to the <Link
                href="/"
                className='text-primary hover:text-primary/70 transition-colors'
                >
                homepage
                </Link>
            </p>
        </div>
    </>
  )
}

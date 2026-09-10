import CreateLink from '@/components/CreateLink'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full min-h-screen flex flex-col justify-center items-center gap-10 px-4 text-foreground'>
      <div className='fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.24_0.05_270)_0%,oklch(0.09_0.012_264)_55%,oklch(0.07_0.01_264)_100%)]'></div>

      <div className='flex flex-col items-center gap-2 text-center animate-in fade-in-0 slide-in-from-bottom-4 duration-700 ease-out'>
        <h1 className='bg-linear-to-b from-foreground to-foreground/60 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl'>
          Short link generator
        </h1>
        <h2 className='text-lg font-light text-muted-foreground'>Generate short links</h2>
      </div>

      <CreateLink />

    </div>
  )
}

export default page
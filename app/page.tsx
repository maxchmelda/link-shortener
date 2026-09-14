"use client"

import CreateLink from '@/components/CreateLink'
import DotField from '@/components/DotField'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full min-h-dvh flex flex-col justify-center items-center gap-8 px-4 text-foreground sm:gap-10'>
      <div className='fixed inset-0 -z-10'>
          <DotField
            dotRadius={1.5}
            dotSpacing={32}
            bulgeStrength={67}
            glowRadius={0}
            sparkle={false}
            waveAmplitude={2}
            cursorRadius={500}
            cursorForce={0.1}
            bulgeOnly
            gradientFrom="#A855F7"
            gradientTo="#B497CF"
            glowColor="#120F17"
        />
      </div>

      <div className='cursor-default flex flex-col items-center gap-2 text-center animate-in fade-in-0 slide-in-from-bottom-4 duration-700 ease-out'>
        <h1 className='text-white bg-clip-text text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl'>
          Short link generator
        </h1>
        <h2 className='text-base font-light text-muted-foreground sm:text-lg'>Generate short links</h2>
      </div>

      <CreateLink />

    </div>
  )
}

export default page
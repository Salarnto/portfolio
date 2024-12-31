import React from 'react'

export default function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center p-6'>
        <p className='text-center'>Feel free to talk to me via my email.</p>
        <a
            href="mailto:salarnto.collab@gmail.com"
            className='hover:text-primary-foreground transition-colors'
            >salarnto.collab@gmail.com
        </a>
    </footer>
  )
}

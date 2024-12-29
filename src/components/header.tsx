import React from 'react'
import Link from 'next/link';

const socials = [
  {
      name: 'GitHub',
      d: "M12 0C5.37346 0 0 5.37252 0 12C0 17.3021 3.43837 21.8002 8.20639 23.3869C8.80609 23.498 9.02632 23.1266 9.02632 22.8096C9.02632 22.5235 9.01512 21.5782 9.01004 20.5755C5.67152 21.3014 4.96707 19.1596 4.96707 19.1596C4.42121 17.7725 3.6347 17.4038 3.6347 17.4038C2.54598 16.659 3.71676 16.6742 3.71676 16.6742C4.9218 16.7589 5.55632 17.9109 5.55632 17.9109C6.62659 19.7455 8.36356 19.215 9.04834 18.9085C9.15601 18.1328 9.46705 17.6035 9.81019 17.3039C7.14488 17.0003 4.34291 15.9714 4.34291 11.3733C4.34291 10.0633 4.81169 8.99272 5.57938 8.15237C5.45477 7.85007 5.04406 6.6296 5.69561 4.97667C5.69561 4.97667 6.70329 4.65414 8.99648 6.20674C9.95363 5.94078 10.9802 5.80751 12 5.80299C13.0199 5.80751 14.0472 5.94078 15.0062 6.20674C17.2967 4.65414 18.303 4.97667 18.303 4.97667C18.9561 6.6296 18.5452 7.85007 18.4206 8.15237C19.19 8.99272 19.6556 10.0632 19.6556 11.3733C19.6556 15.9823 16.8483 16.9972 14.1763 17.2943C14.6066 17.6667 14.9902 18.397 14.9902 19.5165C14.9902 21.1221 14.9762 22.4144 14.9762 22.8096C14.9762 23.129 15.1922 23.5032 15.8006 23.3853C20.566 21.7968 24 17.3003 24 12C24 5.37252 18.6273 0 12 0Z",
      href: 'https://github.com/Salarnto',
  }
];

export default function Header() {
  return (
    <header className='py-6 flex justify-between'>
      <h1 className='font-bold text-primary-foreground'>Salar Barzegar</h1>
          <ul className='flex justify-between gap-6'>
            {socials.map(social => (
              <li key={social.name}>
                <Link className='hover:text-primary-foreground' href={social.href} target='_blank'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className='fill-current transition-colors'
                  >
                    <path d={social.d} />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
    </header>
  )
}
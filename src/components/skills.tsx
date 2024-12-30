import Image from 'next/image';
import React from 'react';

const techStack = [
    {
        name: 'TypeScript',
        src: "/icons/typescript.svg"
    },{
        name: 'Nextjs',
        src: "/icons/nextjs.svg"
    },{
        name: 'Reactjs',
        src: "/icons/reactjs.svg"
    },{
        name: 'TailwindCss',
        src: "/icons/tailwindcss.svg"
    },{
        name: 'Nodejs',
        src: "/icons/nodejs.svg"
    },{
        name: 'Figma',
        src: "/icons/figma.svg"
    },{
        name: 'Git',
        src: "/icons/git.svg"
    }
];

export default function Skills() {
  return (
    <section className='flex flex-col items-center gap-6 text-center'>
        <h2 className='text-3xl sm:text-4xl text-primary-foreground font-bold'>Skills</h2>
        <p>These are my current dev tools.</p>
        <ul className='flex gap-2'>
            {techStack.map(tech => (
                <li key={tech.name}>
                    <Image
                        src={tech.src}
                        alt={tech.name}
                        width={24}
                        height={24}
                        quality={95}
                    />
                </li>
            ))}
        </ul>
    </section>
  )
}

import React from 'react';
import ProjectCard from './project-card';
import projects from '../data/projects'

export default function Projects() {
  return (
    <section className='flex flex-col items-center gap-6 text-center'>
        <h2 className='text-3xl sm:text-4xl text-primary-foreground font-bold'>Recent Projects</h2>
        <p>Here are a few things I've been working on lately.</p>
        <ul>
          {projects.map(project => (
            <li key={project.title}>
              <ProjectCard
                imageSrc={project.image}
                title={project.title}
                description={project.description}
                techStack={project.stack}
                repo={project.repo}
              />
            </li>
          ))}
        </ul>
    </section>
  )
}

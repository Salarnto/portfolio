import React from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter
} from "@/components/ui/card";
import Image, { StaticImageData } from 'next/image';

type ProjectCardProps = {
    imageSrc: StaticImageData,
    title: string,
    description: string,
    techStack: { name: string, src: string}[];
    repo: string
};

export default function ProjectCard({ imageSrc, title, description, techStack, repo }: ProjectCardProps ) {
  return (
    <Card>
        <a href={repo} target='_blank'>
            <Image
                src={imageSrc}
                alt="Project Image"
                quality={98}
            />
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardFooter>
                <ul className='flex gap-2'>
                    {techStack.map(tech => (
                        <li key={tech.name}>
                            <Image
                                src={tech.src}
                                alt={tech.name}
                                width={24}
                                height={24}
                            />
                        </li>
                    ))}
                </ul>
            </CardFooter>
        </a>
    </Card>
  )
}

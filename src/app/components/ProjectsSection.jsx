import React from 'react'
import ProjectCard from './ProjectCard';

const projectsData = [
    {
        id: 1,
        title: "Ecommerce Website",
        description: "Project 1 description",
        image: "/images/projects/portfolio2.png",
        gitUrl: "https://github.com",
        previewUrl: "https://google.com"
    },

    {
        id: 2,
        title: "Weather Website",
        description: "Project  description",
        image: "/images/projects/portfolio.png",
        gitUrl: "https://github.com",
        previewUrl: "https://google.com"
    },

    {
        id: 3,
        title: "Portfolio Website",
        description: "Project description",
        image: "/images/projects/portfolio.png",
        gitUrl: "https://github.com",
        previewUrl: "https://google.com"
    },

    {
        id: 4,
        title: "Ecommerce Website",
        description: "Project description",
        image: "/images/projects/portfolio.png",
        gitUrl: "https://github.com",
        previewUrl: "https://google.com"
    }
]

const ProjectsSection = () => {
    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4'>My Projects</h2>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {
                    projectsData.map((project) =>
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    )
                }
            </div>
        </>
    )
}

export default ProjectsSection;
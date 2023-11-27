"use client";
import React, { useRef } from 'react'
import ProjectCard from './ProjectCard';
import { motion, useInView } from 'framer-motion'


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

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id='projects'  >
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
            <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {
                    projectsData.map((project, index) =>
                        <motion.li
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            transition={{ duration: 0.3, delay: index * 0.4 }}
                        >
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.image}
                                gitUrl={project.gitUrl}
                                previewUrl={project.previewUrl}
                            />
                        </motion.li>
                    )
                }
            </ul>
        </section >
    )
}

export default ProjectsSection;
"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li> React </li>
                <li> JavaScript </li>
                <li> TypeScript </li>
                <li> Node.js </li>
            </ul>
        )
    },

    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li> Vrit Technologies </li>
                <li> ISMT College </li>
                <li> University of Sunderland </li>
            </ul>
        )
    },

    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className='list-disc pl-2'>
                <li> Vrit Technologies </li>
            </ul>
        )
    }
]

const AboutSection = () => {

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition,] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section id='about' className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image
                    src="/images/about-image.png"
                    width={500}
                    height={500}
                    alt='about image'
                />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>
                        About Me
                    </h2>

                    <p className='text-base lg:text-lg mb-3 text-justify'>
                        I&apos;m a passionate, self-proclaimed designer who specializes in front-end development (React.js, Tailwind, Next.js). I am enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                    </p>

                    <p className='text-base lg:text-lg mb-3 text-justify '>
                        I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
                    </p>

                    <p className='text-base lg:text-lg text-justify '>
                        One last thing, I&apos;m available for freelance work, so feel free to reach out and say hello! I promise I don&apos;t bite 😉
                    </p>

                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>

                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>

                        <TabButton
                            selectTab={() => handleTabChange("experience")}
                            active={tab === "experience"}
                        >
                            {" "}
                            Experience{" "}
                        </TabButton>
                    </div>

                    <div className='mt-8'>
                        {
                            TAB_DATA.find((t) => t.id === tab).content
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}

export default AboutSection;
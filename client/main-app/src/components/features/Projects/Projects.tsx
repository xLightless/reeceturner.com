import React, { useState } from "react";
// import path from "path";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import './Projects.scss'

import CodeLanguageBtn from "../../shared/Buttons/buttons";

const Projects = () => {
    // State to manage hover state for each project
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    // Function to handle mouse enter for a specific project
    const handleMouseEnter = (projectId: number) => {
        setHoveredProject(projectId);
    };

    // Function to handle mouse leave for a specific project
    const handleMouseLeave = () => {
        setHoveredProject(null);
    };

    // Project data
    const projectsData = [
        {
            id: 1,
            name: 'REECETURNER.COM',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam",
            imageUrl: 'https://media.licdn.com/dms/image/D4E2DAQGUV6DFraiKrQ/profile-treasury-image-shrink_1920_1920/0/1719357616661?e=1720022400&v=beta&t=SOeS9_-_7emEXm8b9xfEQ3k6TwM7Ti1cBNVwOk7_e1U',
            technologies: ['React', 'ExpressJS', 'TypeScript', 'SCSS', 'TailwindCSS'],
            alt: "website project 1"
        },
        {
            id: 2,
            name: 'REECETURNER.COM',
            description: 'This website project was created to comprehensively and effectively address my range of skillsets.',
            imageUrl: 'https://media.licdn.com/dms/image/D4E2DAQGUV6DFraiKrQ/profile-treasury-image-shrink_1920_1920/0/1719357616661?e=1720022400&v=beta&t=SOeS9_-_7emEXm8b9xfEQ3k6TwM7Ti1cBNVwOk7_e1U',
            technologies: ['React', 'ExpressJS', 'TypeScript', 'SCSS', 'TailwindCSS'],
            alt: "website project 2"
        },
        {
            id: 3,
            name: 'REECETURNER.COM',
            description: 'This website project was created to comprehensively and effectively address my range of skillsets.',
            imageUrl: 'https://media.licdn.com/dms/image/D4E2DAQGUV6DFraiKrQ/profile-treasury-image-shrink_1920_1920/0/1719357616661?e=1720022400&v=beta&t=SOeS9_-_7emEXm8b9xfEQ3k6TwM7Ti1cBNVwOk7_e1U',
            technologies: ['React', 'ExpressJS', 'TypeScript', 'SCSS', 'TailwindCSS'],
            alt: "website project 3"
        },
    ];

    return (
        <section id="projects" className="w-full max-w-screen-2xl min-h-screen mx-auto p-4 mb-14">
            <div className="w-full">
                <h1 className="text-white text-left text-5xl md:text-7xl font-sans font-bold mb-14">Projects</h1>
            </div>

            {/* <div className="grid grid-rows-3 grid-cols-1 h-auto">
                {projectsData.map((project) => (
                    <div key={project.id} className="project relative grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
                        <div
                            className={`place-self-center justify-self-center lg:justify-self-start relative z-40 group overflow-hidden max-w-fit m-4 p-1 bg-gradient-to-r from-cyan-400 to-cyan-600`}
                            onMouseEnter={() => handleMouseEnter(project.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={`${hoveredProject === project.id ? 'opacity-0 bg-white' : ''}`}>
                                <img src={project.imageUrl} alt="website project" className="object-cover"/>
                            </div>

                            <div className="absolute top-0 left-0 w-full h-full justify-center items-center p-4 flex hidden group-hover:flex">
                                <button className="bg-white rounded font-sans font-bold text-lg mx-4 px-4 py-2">
                                    Preview
                                </button>
                                <button className="bg-white rounded font-sans font-bold text-md mx-4 px-4 py-2">
                                    Read More
                                </button>
                            </div>
                        </div>

                        <div className="place-self-start md:place-self-center flex flex-col p-4 z-30 justify-between">
                            <h3 className="text-white font-sans font-bold">{project.name}</h3>
                            <p className="text-white overflow-hidden font-sans text-sm lg:text-md">
                                {project.description}
                            </p>
                            <div className="w-full flex flex-row justify-center">
                                {project.technologies.map((tech, index) => (
                                    <CodeLanguageBtn key={index} buttonName={tech} buttonId={`btn${tech}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}

            <div className="w-full flex flex-col h-auto">
                {projectsData.map((project) => (
                    <div key={project.id} className="project relative grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 border-r border-r-cyan-500 group-hover:border-r-indigo-500">
                        <div
                            className={`place-self-center justify-self-center lg:justify-self-start relative z-40 group overflow-hidden max-w-fit m-4 p-1 bg-gradient-to-r from-indigo-400 to-indigo-600`}
                            onMouseEnter={() => handleMouseEnter(project.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={`${hoveredProject === project.id ? 'opacity-0 bg-white' : ''}`}>
                                <img src={project.imageUrl} alt={project.alt} className="object-cover"/>
                            </div>

                            <div className="absolute top-0 left-0 w-full h-full justify-center items-center p-4 flex hidden group-hover:flex">
                                <button className="bg-white rounded font-sans font-bold text-lg mx-4 px-4 py-2">
                                    Preview
                                </button>
                                <button className="bg-white rounded font-sans font-bold text-md mx-4 px-4 py-2">
                                    Read More
                                </button>
                            </div>
                        </div>

                        <div className="place-self-start md:place-self-center flex flex-col p-4 z-30 justify-between">
                            <h3 className="text-white font-sans font-bold mb-4">{project.name}</h3>
                            <p className="text-white overflow-hidden font-sans text-sm lg:text-md mb-4">
                                {project.description}
                            </p>
                            <div className="w-full flex flex-row justify-center mt-4">
                                {project.technologies.map((tech, index) => (
                                    <CodeLanguageBtn key={index} buttonName={tech} buttonId={`btn${tech}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full  mt-14 mb-14">
                    <a href="/archive" className="text-cyan-500 font-bold text-left">View Full Project Archive <span><FontAwesomeIcon icon={faArrowUp} style={{ rotate: "45deg" }} /></span></a>
            </div>
        </section>
    );
};

export default Projects;
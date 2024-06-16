import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import './Projects.scss'

import CodeLanguageBtn from "../../shared/Buttons/buttons";

const Projects = () => {
    return (
        <section id="projects" className="w-full max-w-screen-2xl min-h-screen mx-auto flex flex-col items-center p-4">
            <div className="w-full">
                <h1 className="text-white text-left text-5xl md:text-7xl font-sans font-bold mb-4">Projects</h1>
            </div>

            <div className="w-full h-fit grid grid-rows-4 grid-cols-1 mt-4 mb-4 gap-12">
                {/* <div className="project relative h-fit w-full flex flex-col md:flex-row"> */}
                <div className="project relative h-fit w-full grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
                    <div className="relative bg-gray-500 h-52 w-full z-40 group overflow-hidden col-span-3 md:col-span-1">

                        <div className="overflow-hidden w-full h-full ">
                            <img className="sm:object-cover" src="https://media.licdn.com/dms/image/D4E2DAQH6XvdLZUOz6g/profile-treasury-image-shrink_160_160/0/1718051301863?e=1718730000&v=beta&t=osq2FLRRbME1JlapDmEEWpd0hgZ66HhbhPJpx1jIyds"></img>
                        </div>

                        <div className="absolute top-0 left-0 w-full h-full justify-center items-end p-4 flex hidden group-hover:flex">
                            <button className="bg-white rounded font-sans font-bold text-md mx-4 px-4 py-2">
                                <p className="text-md">Preview</p>
                            </button>
                            <button className="bg-white rounded font-sans font-bold text-md mx-4 px-4 py-2">
                                <p className="text-md">Read More</p>
                            </button>
                        </div>
                    </div>

                    <div className="h-52 w-full flex flex-col p-4 z-30 justify-between col-span-3 md:col-span-2">
                        <h3 className="text-white font-sans font-bold">PROJECT 1</h3>
                        <p className="text-white overflow-hidden font-sans text-sm lg:text-md overflow-y-scroll">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem.
                        </p>
                        <div className="w-full flex flex-row justify-center">
                            {/* <CodeLanguageBtn buttonName="JavaScript" buttonId="btnJavaScript"/> */}
                            <CodeLanguageBtn buttonName="React" buttonId="btnReact"/>
                            <CodeLanguageBtn buttonName="ExpressJS" buttonId="btnExpressJS"/>
                            <CodeLanguageBtn buttonName="TypeScript" buttonId="btnTypeScript"/>
                            <CodeLanguageBtn buttonName="SCSS" buttonId="btnSCSS"/>
                            <CodeLanguageBtn buttonName="TailwindCSS" buttonId="btnTailwindCSS"/>
                        </div>
                    </div>
                </div>

                <div className="project">

                </div>
                <div className="project">

                </div>

                <div className="w-full h-fit col-span-1">
                    {/* Add downloadable resume */}
                    <a href="/archive" className="text-cyan-500 font-bold text-left">View Full Project Archive <span className=""><FontAwesomeIcon icon={faArrowUp} style={{rotate: "45deg"}}/></span></a>
                </div>
            </div>
        </section>
    )
}


export default Projects;
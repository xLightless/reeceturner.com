import React, { useState, useCallback } from "react";
import AboutPage from "./about";
import Experience from "./experience";
import Projects from "./projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Snowfall from "@/components/effects/snowfall";

const Information: React.FC = () => {
    return (
        <>
            <h1 className="text-5xl font-bold tracking-tight">Reece Turner</h1>
            <p className="text-2xl mt-2">Software Engineer</p>
            <p className="text-lg mt-4">
                I create revenue-generating professional services,<br></br> for business.
            </p>
        </>
    )
};

interface NavItemProps {
    text: string;
    id: string;
    isActive: boolean;
    onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = (props) => {
    return (
        <>
            <div className="flex items-center space-x-2" id={props.id} onClick={props.onClick}>
                <div className={`h-[1px] bg-gray-100 rounded-r-xl ${props.isActive ? `w-24` : `w-12`}`}></div>
                <a className={`${props.isActive ? `font-bold tracking-widest` : `text-slate-500`}`}>{props.text}</a>
            </div>
        </>
    );
};

const Navigator: React.FC = () => {
    const [activeNavItemId, setActiveNavItemId] = useState<string | null>("#about");

    const handleNavClick = useCallback((id: string) => {
        setActiveNavItemId(id);
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <nav className="flex flex-col mt-12">
            <NavItem
                text={"About"}
                id="#about"
                isActive={activeNavItemId === "#about"}
                onClick={() => handleNavClick("#about")}
            />
            <NavItem
                text={"Experience"}
                id="#experience"
                isActive={activeNavItemId === "#experience"}
                onClick={() => handleNavClick("#experience")}
            />
            <NavItem
                text={"Projects"}
                id="#projects"
                isActive={activeNavItemId === "#projects"}
                onClick={() => handleNavClick("#projects")}
            />
        </nav>
    );
};

const MediaLinks: React.FC = () => {
    return (
        <div className="flex flex-row space-x-4 text-2xl">
            <a
                href="https://github.com/xLightless/"
                className="hover:text-gray-700 text-slate-500 hover:cursor-pointer">
                <FontAwesomeIcon
                    icon={faGithub}
                />
            </a>
            <a
                href="https://www.instagram.com/reeceturner35/"
                className="hover:text-gray-700 text-slate-500 hover:cursor-pointer">
                <FontAwesomeIcon
                    icon={faInstagram}
                />
            </a>
            <a
                href="https://www.linkedin.com/in/reeceturner/"
                className="hover:text-gray-700 text-slate-500 hover:cursor-pointer">
                <FontAwesomeIcon
                    icon={faLinkedin}
                />
            </a>
        </div>
    )
};

const Header: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col justify-between space-y-8 py-24">
            <div>
                {/* Information */}
                <Information />

                {/* Navigator */}
                <Navigator />
            </div>

            <div className="mt-auto">
                {/* Social Media */}
                <MediaLinks />
            </div>
        </div>
    )
};

const MainContent: React.FC = () => {
    return (
        <main className="w-full h-full flex flex-col justify-between space-y-8 md:py-24">
            <><AboutPage /></>
            <><Experience /></>
            <><Projects /></>
        </main>
    )
}

const Home: React.FC = () => {
    return (
        <>
            <Snowfall />
            <div className="relative min-h-screen max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="lg:sticky top-0 max-h-screen z-10"><Header /></div>
                <div className="z-10 top-0"><MainContent /></div>
            </div>
        </>
    )
};

export default Home;

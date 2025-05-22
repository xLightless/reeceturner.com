import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AboutPage: React.FC = () => {

    return (
        <>
            <section className='relative w-full h-fit grid grid-cols-1 grid-rows-[auto_1fr_auto] gap-16 pl-4' id="about">
                {/* Description About Me */}
                <div className='items-start'>

                    <p className='mt-4 text-slate-400'>
                        Currently, I’m developing <a href="https://securejobs.com/" className='font-bold text-white'>SecureJobs</a>, a platform that leverages
                        AI/ML technologies with Full-Stack to improve job seeker outcomes. My role involve project management, such as creating documents for investors,
                        and developing a distributed database with complex, and efficient, routing.
                    </p>

                    <p className='mt-4 text-slate-400'>
                        In the past, my occupation was at <a href="https://nexttheme.com/" className='font-bold text-white'>Next Theme</a> and
                        <a href="https://www.linkedin.com/company/spacebar-wsm/" className='font-bold text-white'>Space Bar</a>,<br></br> where I created websites,
                        assembled hardware, and setup File Storage Servers (FSS).
                    </p>

                    <p className='mt-4 text-slate-400'>
                        During my spare time, I enjoy reading and learning about Finance and Technology, bringing automation to financial markets
                        such as Forex and Stocks.
                    </p>
                </div>

                {/* Cool image stuff */}
                <div className='items-end lg:mt-24'>
                    <div className='relative max-w-xl h-48 sm:h-64 opacity-100'>
                        <img
                            src="/images/rade_transposer.png"
                            alt="Graphing Editor"
                            className='w-full h-full object-cover rounded-xl shadow-2xl border-4 border-white/20'
                            style={{ filter: 'brightness(1.15) contrast(1.1)' }}
                        />
                        <img
                            src="/images/rade_interface.png"
                            alt="Graphing Editor"
                            className='absolute -bottom-4 -right-4 w-2/3 h-2/3 object-cover rounded-xl shadow-2xl border-4 border-white/40 bg-gray-950/80'
                            style={{ zIndex: 2, filter: 'brightness(1.2) contrast(1.15)' }}
                        />
                    </div>
                    <div className='relative w-full mt-12'>
                        <a className='w-fit flex flex-row items-center justify-start space-x-4' href="https://github.com/xLightless/RADE/" target="_blank">
                            <p className='text-blue-300'>View my most recent project</p>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-blue-300'/>
                        </a>
                    </div>

                    {/* GitHub Activity */}
                    <div className='flex flex-col justify-center items-center mt-12 space-y-4 w-full max-w-5xl mx-auto'>
                        <h1 className='font-bold'>GitHub Activity</h1>
                        <div className='flex flex-col md:flex-row justify-center items-center md:space-x-4 space-y-4 md:space-y-0 w-full'>
                            <div className="relative group perspective-1000 flex-1 min-w-0 max-w-xl">
                                <img
                                    src="https://github-readme-stats.vercel.app/api?username=xlightless&show_icons=true&theme=nord&hide_border=true&count_private=true&locale=en"
                                    alt="GitHub Stats for xlightless"
                                    className="w-full max-w-xs md:max-w-md rounded-xl shadow-2xl border-4 border-white/10 transition-transform duration-300 group-hover:rotate-y-6 group-hover:-rotate-x-3 group-hover:scale-105"
                                    style={{
                                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), 0 1.5px 8px 0 rgba(0,0,0,0.15)',
                                        transformStyle: 'preserve-3d',
                                    }}
                                />
                                <div className="absolute inset-0 rounded-xl pointer-events-none" style={{
                                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.17), 0 1.5px 8px 0 rgba(0,0,0,0.10)',
                                    opacity: 0.5,
                                    zIndex: -1,
                                }} />
                            </div>
                            <div className="relative group perspective-1000 flex-1 min-w-0 max-w-xl">
                                <img
                                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=xlightless&layout=compact&langs_count=8&theme=nord&hide_border=true&show_icons=true&locale=en"
                                    alt="Top Languages for xlightless"
                                    className="w-full max-w-xs md:max-w-md rounded-xl shadow-2xl border-4 border-white/10 transition-transform duration-300 group-hover:-rotate-y-6 group-hover:rotate-x-3 group-hover:scale-105"
                                    style={{
                                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), 0 1.5px 8px 0 rgba(0,0,0,0.15)',
                                        transformStyle: 'preserve-3d',
                                    }}
                                />
                                <div className="absolute inset-0 rounded-xl pointer-events-none" style={{
                                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.17), 0 1.5px 8px 0 rgba(0,0,0,0.10)',
                                    opacity: 0.5,
                                    zIndex: -1,
                                }} />
                            </div>
                        </div>
                        <div className='relative w-full'>
                            <a className='w-fit flex flex-row items-center justify-start space-x-4' href="https://github.com/xLightless/" target="_blank">
                                <p className='text-blue-300'>View my GitHub</p>
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-blue-300'/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default AboutPage;
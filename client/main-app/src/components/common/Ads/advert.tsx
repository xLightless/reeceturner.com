import React from "react";

const Advertisement = ({advertLink}: {advertLink: string}) => {
    return (
    <div id="advert" className='w-full h-20 bg-gradient-to-r from-cyan-400 to-cyan-600 flex justify-center items-center advert p-4'>
        <p className='text-sm md:text-base lg:text-lg xl:text-xl text-center'>
            Unlock the full potential of your software by building intuitive GUI applications with our
            <span> <a href={ advertLink } className='font-bold underline'>Python GUI Designer!</a></span>
        </p>
    </div>
    );
};


export default Advertisement;
import React from "react"
import "./buttons.scss"


const CodeLanguageBtn = ({buttonName, buttonId}: { buttonName: string, buttonId: string }) => {
    return (
        <div className="btnDimensions mx-2">
            <button id={buttonId} className="w-full h-full flex justify-center items-center px-2 hover:scale-105">
                <p className="text-xs">{buttonName}</p>
            </button>
        </div>
    );
};

export default CodeLanguageBtn;


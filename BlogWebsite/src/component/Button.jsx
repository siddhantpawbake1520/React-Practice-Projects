import React from "react";

export default function Button({
    children,
    type = "button",
    className = "",
    ...props
}) {
    return (
        <button
            type={type}
            className={`relative px-5 py-2.5 rounded-xl 
                bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600
                text-white font-medium tracking-wide 
                shadow-md hover:shadow-lg
                transition-all duration-300 ease-in-out 
                hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700
                focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2
                active:scale-95
                ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

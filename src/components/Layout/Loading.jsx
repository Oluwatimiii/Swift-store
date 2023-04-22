import { gsap } from 'gsap'
import React, { useEffect, useState } from 'react'
import LoadingType from './LoadingType'

const Loading = () => {
    const [loadInterval, setLoadInterval] = useState(null);
    const text = "SWIFT STORE..."

    useEffect(() => {
        const num = document.querySelector("#number");
        let c = 0;
        const interval = setInterval(() => {
            num.innerHTML = c + "%";
            c++;
            if (c === 101) {
                clearInterval(interval);
                gsap.to(".loader", {
                    duration: 1,
                    opacity: 0,
                })
                gsap.to(".loading", {
                    duration: 1,
                    display: "none",
                })
                setLoadInterval(null);
            }
        }, 30);
        setLoadInterval(interval);
    }, [])

   return (
        <div id="loader" className='loader h-screen bg-black font-lora text-white flex flex-col justify-between w-full p-6 items-center relative mx-auto '>
            <div className='loading flex flex-col  justify-center h-full w-full items-center '>
                <div className="w-full flex justify-center items-center sm:h-6 md:h-10 p-0 m-0 text-mint">
                    <LoadingType className="sm:w-80 object-contain text-center" text={text} />
                </div>
            </div>
            <div className='loading__counter h-fit w-fit flex items-start justify-start mb-8'>
                <div id='number' className="h-fit w-full text-3xl loading__counter--number" data-interval={loadInterval}>0</div>
            </div>
        </div>
    )
}

export default Loading
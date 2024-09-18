import React, { useState, useRef } from 'react';
import { Player, ControlBar } from "video-react";
import "video-react/dist/video-react.css";
//import ReactPlayer from 'react-player';
//import Poster from '../../assets/home2/video1.svg'
import videoFile from '../../assets/home2/Vegies.mp4'; // Renamed to avoid conflict with component name
 //import './home4/home4Common.css';
 import { GoPlay } from "react-icons/go";

const VideoComponent = () => {  // Renamed the component to `VideoComponent`

    const videoRef = useRef(null);
    const [showOverlay, setShowOverlay] = useState(true);

    const handlePlay = () => {
        setShowOverlay(false);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <section className='w-full'>
            {/* ---------- container --------- */}
            <div className='w-11/12 xmd:w-10/12 mt-8 video-container mx-auto  xs:max-h-[500px]'>
                <Player
                    ref={videoRef}
                    playsInline
                   // poster={Poster}  
                    src={videoFile}  
                    muted={true}
                    loop
                >
                    <ControlBar disableCompletely />
                </Player>

                {showOverlay && (
                    <div className='absolute left-0 right-0 bottom-2 top-0 flex flex-col gap-y-4 xs:gap-y-6 justify-center items-center text-white-100 overlay text-center'>
                        <h1 className='text-lg xs:text-xl sm:text-2xl md:text-3xl xmd:text-4xl xl:text-5xl w-[45%] xl:leading-[54px]'>
                                We’re the Best Organic Farm in the World
                            </h1>
                        <div className='cursor-pointer text-4xl xs:text-5xl xmd:text-[60px]' onClick={handlePlay}>
                            <GoPlay />  {/* Uncomment this line if you're importing GoPlay icon */}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default VideoComponent;  // Renamed the export to `VideoComponent`

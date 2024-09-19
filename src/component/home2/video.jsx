import React, { useState, useRef } from 'react';
import { Player, ControlBar } from "video-react";
import "video-react/dist/video-react.css";
import videoFile from '../../assets/home2/Vegies.mp4';
import { GoPlay } from "react-icons/go";

const VideoComponent = () => {
    const videoRef = useRef(null);
    const [showOverlay, setShowOverlay] = useState(true);

    const handlePlay = () => {
        setShowOverlay(false);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <section className='relative w-full flex justify-center'>
            {/* Container for the video */}
            <div className='relative w-[95%] max-w-[1130px] mx-auto mt-2'>
                <Player
                    ref={videoRef}
                    playsInline
                    src={videoFile}
                    // muted={true}
                    loop
                    className="w-full h-auto" // Ensures video scales with the container size
                >
                    
                </Player>

                {showOverlay && (
                    <div className='absolute inset-0 flex flex-col gap-y-4 justify-center items-center text-white-100 bg-black bg-opacity-30'>
                        <h1 className='text-lg xs:text-xl sm:text-2xl md:text-3xl xmd:text-4xl xl:text-5xl w-[90%] text-center xl:leading-[54px]'>
                            We’re the Best Organic Farm in the World
                        </h1>
                        <div className='cursor-pointer text-4xl xs:text-5xl xmd:text-[60px]' onClick={handlePlay}>
                            <GoPlay />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default VideoComponent;

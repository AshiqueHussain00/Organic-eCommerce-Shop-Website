import React, { useState } from 'react'
import { Player, ControlBar } from "video-react";
import "video-react/dist/video-react.css";
import Poster from '../../assets/home4/farmer.svg'
import FarmerVideo from '../../assets/home4/farmers.mp4'
import './home4Common.css'
import { useRef } from 'react';
import { GoPlay } from "react-icons/go";

const VideoSection = () => {

    const videoRef = useRef(null)
    const [showOverlay, setShowOverlay] = useState(true);


    const handlePlay = () => {

        setShowOverlay(false);
        if (videoRef.current) {
            videoRef.current.play();
        }
    }



    return (
        <section className='w-full  h-[800px] absolute top-[790px] xxs:top-[760px] xs:top-[720px] lg:top-[750px] clg:top-[720px] z-50'>

            {/* ---------- container --------- */}

            <div className='w-11/12 xmd:w-10/12  video-container  mx-auto  rounded-2xl xs:max-h-[700px] '>

                <Player
                    ref={videoRef}
                    playsInline
                    poster={Poster}
                    src={FarmerVideo}
                    muted={true}
                    loop


                >

                    <ControlBar disableCompletely />
                </Player>

                {
                    showOverlay && (
                        <div className='absolute left-0 right-0 bottom-0 top-0 flex flex-col gap-y-4 xs:gap-y-6 justify-center  items-center text-white-100 overlay text-center '>

                            <h1 className='text-lg xs:text-xl sm:text-2xl md:text-3xl xmd:text-4xl xl:text-5xl w-[45%] xl:leading-[54px]'>
                                We’re the Best Organic Farm in the World
                            </h1>

                            <div className='cursor-pointer text-4xl xs:text-5xl xmd:text-[60px]' onClick={handlePlay}>
                                <GoPlay />
                            </div>



                        </div>
                    )
                }




            </div>



        </section>
    )
}

export default VideoSection
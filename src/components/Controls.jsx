import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import {
    IoPlayBackSharp,
    IoPlayForwardSharp,
    IoPlaySkipBackSharp,
    IoPlaySkipForwardSharp,
    IoPlaySharp,
    IoPauseSharp,
  } from 'react-icons/io5';


const Controls = ({audioRef, progressBarRef, duration, setTimeProgress}) => {
    const [isPlaying, setIsPlaying] = useState(false)

    const playAnimationRef = useRef()

    
    const repeat = useCallback(() => {
        const currentTime = audioRef.current.currentTime;
        setTimeProgress(currentTime)
        progressBarRef.current.value = currentTime
        progressBarRef.current.style.setProperty(
            '--range-progress',
            `${(progressBarRef.current.value / duration) * 100}%`
        )
        
        playAnimationRef.current = requestAnimationFrame(repeat)
    }, [audioRef, duration, progressBarRef, setTimeProgress]);

    // console.log("playAnimationRef:", playAnimationRef)
    
    useEffect(() => {
        if(isPlaying) {
            audioRef.current.play()
            playAnimationRef.current = requestAnimationFrame(repeat);
        } else {
            audioRef.current.pause()
            cancelAnimationFrame(playAnimationRef.current);
        }
    }, [isPlaying, audioRef])

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
      };

    return(
        <div className='controls-wrapper'>
            <div className='controls'>
                <button><IoPlaySkipBackSharp/></button>
                <button><IoPlayBackSharp/></button>
                <button onClick={togglePlayPause}>
                    {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
                </button>
                <button><IoPlayForwardSharp /></button>
                <button><IoPlaySkipForwardSharp /></button>
            </div>
        </div>
    )
}

export default Controls
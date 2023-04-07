import React from "react";
import { useState, useRef } from "react";

import { tracks } from "../assets/tracks";
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

const AudioPlayer = () => {
    const [currentTrack, setCurrentTrack] = useState(tracks[0])
    
    const audioRef = useRef()
    console.log(audioRef)

    console.log(currentTrack)
    return (
        <div className="audio-player">
            <div className="inner">
                <DisplayTrack 
                currentTrack= {currentTrack}
                audioRef= {audioRef}
                />    
                <Controls 
                audioRef= {audioRef}
                />
                <ProgressBar/>
                </div>
        </div>
    )

}

export default AudioPlayer
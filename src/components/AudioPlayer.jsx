import React from "react";
import { ReactDOM, useState } from "react";

import { tracks } from "../assets/tracks";
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";


const AudioPlayer = () => {
    const [currentTrack, setCurrentTrack] = useState(tracks[0])

    console.log(currentTrack)
    return (
        <div className="audio-player">
            <div className="inner">
                <DisplayTrack currentTrack= {currentTrack}/>    
                <Controls/>
                <ProgressBar/>
                </div>
        </div>
    )

}

export default AudioPlayer
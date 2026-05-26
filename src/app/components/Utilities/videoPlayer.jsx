"use client"

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({youtubeId}) => {
    const [isOpen, setIsOpen] = useState(true)
    const handleButton = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }

    return (
        <div className="fixed bottom-4 right-4">
            <button 
            onClick={handleButton}
            className="font-bold bg-secondary px-3 mb-1 float-right cursor-pointer">{isOpen
             ? "x" : "tonton trailer"}</button>
            {isOpen && <YouTube 
            videoId={youtubeId} 
            onReady={(event) => {event.target.pauseVideo()}}
            opts={option}
            onError={() => alert("Video trailer is broken, please try another.")} />}
        </div>
    )
}
export default VideoPlayer
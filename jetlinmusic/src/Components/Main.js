import React from "react";
import Video from "../Assets/metalcomp.mp4"
function Main() {
    return(
        <div className="main">
            <video className='main-video'
              autoPlay={true}
              loop={true}
              muted={true}
              playsInline=""
              src={Video}/>
            <h1 className="main-title">Jet Lin Music</h1>
            <p className="main-subtitle">Black Metal, Death Metal, Thrash Metal, Dark Electronic Music, Harsh Noise, Grindcore, Crust Punk and more...</p>
        </div>
    )
}

export default Main;
import React from "react";

function MV(props) {
    return(
        <div className="mv">

            {/* <h1>{props.title}</h1>
            <ul>
                <li>
                    <iframe className="mv-temp" width="560" height="315" src={props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </li>
            </ul> */}
            <h1 className="mv-title" id="newest">New Release!</h1>
            <ul>
                <li>
                <iframe className="mv-vid" width="560" height="315" src="https://www.youtube.com/embed/W-ePbpVgsJ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </li>
            </ul>
            <h1 className="mv-title" id="metal">Metal</h1>
            <ul>
                <li>
                <iframe className="mv-vid" width="560" height="315" src="https://www.youtube.com/embed/kMr9pdCCoHY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </li>
                <li>
                    <iframe className="mv-vid" width="560" height="315" src="https://www.youtube.com/embed/mPU9UyvpKEo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </li>
                <li>
                    <iframe className="mv-vid" width="560" height="315" src="https://www.youtube.com/embed/p55-rj3vK6k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </li>
            </ul>

            <h1 className="mv-title" id="punk">Punk</h1>
            <ul>
                <li>
                    <iframe className="mv-vid" width="560" height="315" src="https://www.youtube.com/embed/oiIIxRFnP10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </li>
            </ul>
            
            <h1 className="mv-title" id="electronic">Electronic Music</h1>
            <ul>
                <li>
                <iframe className="mv-vid" width="560" height="315" src="https://www.youtube.com/embed/ht8gQTqhRoE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </li>
                <li>
                    <iframe className="mv-vid" width="560" height="315" src="https://www.youtube.com/embed/hpbu8ECA9q8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </li>
            </ul>
            
            <h1 className="mv-title" id="albums">Albums</h1>
            <ul>
                <li>
                <iframe className="mv-vid" width="560" height="315" src="https://www.youtube.com/embed/Nkn5TMK94Hw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </li>
                
                <li>
                <iframe className="mv-vid" width="560" height="315" src="https://www.youtube.com/embed/KFwnEPIzFwc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </li>
            </ul>
        </div>

    )
}

export default MV;
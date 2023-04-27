import React from "react";

function redirectToAlbums() {
    window.open("https://jetlin.bandcamp.com/", "_blank");
}
function redirectToMV() {
    window.open("https://www.youtube.com/@jet3714/videos", "_blank");
}

function Footer() {

    return(
        <div className="footer">
            
            <ul className="footer-items">
                {/* <li><button onClick={() => window.location.hash = "#albums"}>Albums</button></li> */}
                <li><button onClick={() => window.location.hash = "#top"}>Back To Top</button></li>
                <li><button onClick={redirectToAlbums}>BandCamp</button></li>
                <li><button onClick={redirectToMV}>Youtube</button></li>

                {/* <li className = "genre-dropdown">
                    <span>Genre</span>
                    <div className="genre-dropdown-content">
                        <li><button onClick={() => window.location.hash = "#metal"}>Metal</button></li>
                        <li><button onClick={() => window.location.hash = "#punk"}>Punk</button></li>
                        <li><button onClick={() => window.location.hash = "#electronic"}>Electronic Music</button></li>
                    </div>
                </li> */}

            </ul>
        </div>
    )
}

export default Footer;
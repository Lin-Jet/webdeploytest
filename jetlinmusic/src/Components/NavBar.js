import React from "react";

function redirectToAlbums() {
    window.open("https://jetlin.bandcamp.com/", "_blank");
}
function redirectToMV() {
    window.open("https://www.youtube.com/@jet3714/videos", "_blank");
}

function NavBar() {

    return(
        <div className="nav" id="top">
            
            <h1 className="nav-logo">Jet Lin Music</h1>
            <div className="blood">
            <p className="blood1">🩸</p><p className="blood2">🩸</p><p className="blood3">🩸</p><p className="blood4">🩸</p><p className="blood5">🩸</p><p className="blood6">🩸</p><p className="blood7">🩸</p><p className="blood8">🩸</p><p className="blood9">🩸</p><p className="blood10">🩸</p><p className="blood11">🩸</p><p className="blood12">🩸</p><p className="blood13">🩸</p><p className="blood14">🩸</p><p className="blood15">🩸</p><p className="blood16">🩸</p>
            <p className="blood17">🩸</p><p className="blood18">🩸</p><p className="blood19">🩸</p><p className="blood20">🩸</p><p className="blood21">🩸</p><p className="blood22">🩸</p><p className="blood23">🩸</p><p className="blood24">🩸</p><p className="blood25">🩸</p>
            </div>
            <ul className="nav-items">
                <li><button onClick={() => window.location.hash = "#albums"}>Albums</button></li>
                <li><button onClick={redirectToAlbums}>BandCamp</button></li>
                <li><button onClick={redirectToMV}>Youtube</button></li>

                <li className = "genre-dropdown">
                    <span>Genre</span>
                    <div className="genre-dropdown-content">
                        <li><button onClick={() => window.location.hash = "#metal"}>Metal</button></li>
                        <li><button onClick={() => window.location.hash = "#punk"}>Punk</button></li>
                        <li><button onClick={() => window.location.hash = "#electronic"}>Electronic Music</button></li>
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default NavBar;
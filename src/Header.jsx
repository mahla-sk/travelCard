import React from "react";
import globe from "./assets/globe-4-24.png"

export default function Header(){
    return(
        <div className="header">
            <img src={globe} className="globe"/>
            <p>my travel journal.</p>
        </div>
    )
}
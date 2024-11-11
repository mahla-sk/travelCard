import React from "react";
import location from "./assets/location.png"

export default function Card(props){
    return(<>
        <div className="Card">
            <div className="img-div">
            <img src={`${props.coverImg}`} className="cover_img"/>
            </div>
            <div className="contaianers">
                <div className="container_top">
                    <img src={location} className="location_icon"/>
                    <p className="country">{props.country}</p>
                    <a href="" className="googlemaps">View on Google Maps</a>

                </div>
                <div className="container_bottom">
                    <h2>{props.title}</h2>
                    <div className="stats">
                        <span>{props.stats.start_date}</span>
                        <span>{props.stats.end_date}</span>
                    </div>
                    <p className="desc">{props.description}</p>

                </div>
            </div>
            
            
            

        </div>
        <div className="hr"></div></>
    )
}
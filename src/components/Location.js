import React from "react"

export default function Location(props) {
    return (
        <div className="location">
            <img src={props.image} alt="image"/>
            <div className="location_content">
                <p className="location_name">{props.location.toUpperCase()}</p>
                <a className="map"href={props.map}>View on Google Maps</a>
                <h1 className="title">{props.title}</h1>
                <p className="dates">{props.start} - {props.end}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
}
import React, { useState } from "react";

export const Card = ({ value, imageFile, active, ...props }) => {
    const backImageFile = "/images/back.png";

    return (
        <div className={`card__card ${active ? "card__card--showing" : ""}`}>
            <p>Value: {value}</p>
            <img
                src={active ? imageFile : backImageFile}
                alt={imageFile}
                className="card__card--image"
            />
        </div>
    );
};
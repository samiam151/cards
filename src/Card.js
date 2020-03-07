import React, { useState } from "react";

export const Card = ({ value, imageFile, active, ...props }) => {
    const backImageFile = "https://upload.wikimedia.org/wikipedia/commons/d/d4/Card_back_01.svg";

    return (
        <div className={`card__card ${active ? "card__card--active" : ""}`}>
            <img
                src={active ? imageFile : backImageFile}
                alt={imageFile}
                className="card__card--image"
            />
        </div>
    );
};
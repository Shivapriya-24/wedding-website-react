import React from "react";
import './AnimationPage.css';
import bgImage from '../assets/img5.jpg';
import { useNavigate } from 'react-router-dom';
function AnimationPage()
{
    const navigate = useNavigate();
    const handleGetStarted = () => {
      navigate("/products");
    };
    return(
        <div className="animation-container"
        style={{ backgroundImage: `url(${bgImage})` }}
        >
            <h1 className="title">The Wedding House</h1>
            <p className="quote">Elegance woven into every thread, for your special day.</p>
            <button className="get-started-button" onClick={()=>handleGetStarted()}>Get Started</button>
            <p className="description">Fabric that whispers stories untold,
               Rich in detail, proud and bold.
               Woven with heart, styled with grace,
               Quality shines in every place.</p>
        </div>
    );
}
export default AnimationPage;
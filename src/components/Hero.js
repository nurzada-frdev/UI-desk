import React from "react";
import food from "../img/hero-Image.png"

const Hero = () => {
    return(
        <section id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero-one">
                        <h1 style={{fontSize:"80px"}}>Just <span style={{color:"#5FB848"}}>Eat healthy</span> <br/> food to live a <br/> healthier life</h1>
                        <p>Enjoy a healthy life by eating healthy foods <br/> that have extraordinary flavors that make <br/> your life healthier for today and in the future</p>
                        <button>Order Now</button>
                    </div>
                    <img src={food} alt=""/>

                </div>
            </div>
        </section>
    )
}
export default Hero;
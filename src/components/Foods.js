import React from "react";
import food1 from "../img/food1.jpg"
import food2 from "../img/food2.jpg"
import food3 from "../img/food3.jpg"
const Foods = ()=>{
    return(
        <section id="foods">
            <div className="container">
                <div className="foods">
                    <div className="text">
                        <h1 style={{fontSize:"40px"}}>About US</h1>
                        <p style={{fontSize:"28px",color:"#181D19"}}>Organic food is grown without the use of <br/> synthetic chemicals, such as human-made <br/>
                            pesticides and fertilizers, and does not contain <br/>
                            genetically modified organisms (GMOs). <br/>
                            Organic foods include fresh produce, meats, <br/>
                            and dairy products as well as processed foods <br/>
                            such as crackers, drinks, and frozen meals.</p>
                        <button>Learn More</button>
                    </div>
                    <div className="pictures">
                        <img src={food1} alt=""/>
                        <img src={food2} alt=""/>
                    </div>
                    <img className="last" src={food3} alt=""/>
                </div>
            </div>
        </section>
    )
}
export default Foods;
import React from "react";
import salad from "../img/fresh.jpg"
import check from "../img/chek.svg"
import chef from "../img/man0.png"

const Fresh = () => {
    return (
        <section id="fresh">
            <div className='container'>
                <div className="fresh">
                    <div className="first">
                        <div className="one">
                            <img src={salad} alt=""/>
                            <div className="blue-circle"></div>
                        </div>
                        <div className="two">
                            <h1 style={{fontSize: " 54px"}}>Fresh Vegetables <br/>
                                Every Day</h1>
                            <p style={{fontSize: "22px"}}>Healthy life as informed declared we enjoy the <br/>
                                margaret. Joy horrible moreover man feelings <br/>
                                own shy. Request norland neither mistake for yet. <br/>
                                Between the for morning assured country <br/>
                                believe.</p>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className="second">
                        <div className="see">
                            <h1 style={{fontSize: "54px"}}>Cooked by the <br/>
                                Best Chefs</h1>
                            <p style={{color: "#181D19"}}>Believing neglected so so allowance existence <br/>
                                departure in. In design active temper be <br/>
                                uneasy. Thirty for remove plenty regard you <br/>
                                summer though. He preference connection <br/> astonished on of ye.</p>
                            <div className="check">
                                <div className="green"><img src={check} alt=""/></div>
                                <p>A guaranteed delicious meal</p>
                            </div>
                            <div className="check">
                                <div className="green"><img src={check} alt=""/></div>
                                <p>A guaranteed delicious meal</p>
                            </div>
                            <div className="check">
                                <div className="green"><img src={check} alt=""/></div>
                                <p>A guaranteed delicious meal</p>
                            </div>
                        </div>
                        {/*<div className="circle"></div>*/}
                        <img style={{width:"640.37px",height:"570.72px"}} src={chef} alt=""/>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Fresh;
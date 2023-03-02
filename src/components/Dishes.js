import React from "react";
import s1 from "../img/s1.png"
import s2 from "../img/s2.png"
import s3 from "../img/s3.png"
const Dishes = () => {
    return (
        <section id="dishes">
            <div className="container">
                <div className="dishes">
                    <div className="dishes-main">
                        <h1 style={{fontSize:"30px"}}>Special Dishes for you</h1>
                        <p style={{fontSize:"25px"}}>Made with premium & 100% Organic ingredients</p>
                    </div>
                    <div className="view">
                        <div className="view-choose">
                            <img src={s1} alt=""/>
                            <h2>Green Salad</h2>
                            <p>A salad combined witha delicious <br/>
                                cut of bacon and mixed with tasty <br/>
                                and fresh sesome oil.</p>
                        </div>
                        <div className="view-choose">
                            <img src={s2} alt=""/>
                            <h2>Green Salad</h2>
                            <p>A salad combined witha delicious <br/>
                                cut of bacon and mixed with tasty <br/>
                                and fresh sesome oil.</p>
                        </div>
                        <div className="view-choose">
                            <img src={s3} alt=""/>
                            <h2>Green Salad</h2>
                            <p>A salad combined witha delicious <br/>
                                cut of bacon and mixed with tasty <br/>
                                and fresh sesome oil.</p>
                        </div>
                    </div>
                    <button>View All</button>
                </div>
            </div>
        </section>
    )
}
export default Dishes;
import React from "react";
const Email =()=>{
    return(
        <section id="email">
            <div className="container">
                <div className="email">
                    <h1 style={{marginBottom:"10px"}}>Subscribe to the Newsletter</h1>
                    <p style={{marginBottom:"30px"}}>Enter your email below to get our daily offers and news</p>
                    <div>
                        <input type="email" placeholder="Enter your email." />
                        <button>Get Started</button>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Email;
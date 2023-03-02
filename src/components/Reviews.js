import React from "react";
import man1 from "../img/man1.svg"
import man2 from "../img/man2.svg"
import img0 from "../img/symbol.png"
const Reviews = () => {
   return (
       <section id="reviews">
           <div className="container">
               <div className="reviews">
                   <h1>Happy Clients Says</h1>
                   <div className="shadow">
                       <div className="white">
                           <div className="center">
                               <img src={man1} alt=""/>
                               <div>
                                   <h3>KHALIL NAZIR</h3>
                                   <p>CEO of UI.Desk</p>
                               </div>
                               <img className="hear" src={img0} alt=""/>
                               <img src={img0} alt=""/>
                           </div>
                           <p>Thirty for remove plenty regard you summer though. <br/> He preference Partiality on or continuing in particular <br/>
                               principles as. Do believing oh disposing to supported <br/>
                               allowance we.</p>
                       </div>
                       <div className="white">
                           <div className="center">
                               <img src={man2} alt=""/>
                               <div>
                                   <h3>ZEESHAN ANWER</h3>
                                   <p>CEO of UI Box</p>

                               </div>
                               <img src={img0} alt=""/>
                               <img src={img0} alt=""/>
                           </div>
                     <p>      Really boy law county she unable her sister. Feet you <br/>
                         off its like like six. Among sex are leave law built now. <br/>
                         In built table in an rapid blush. Merits behind on afraid <br/>
                         or warmly.</p>
                       </div>
                   </div>
               </div>
           </div>
       </section>
   )
}
export default Reviews;
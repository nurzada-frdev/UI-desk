import React from "react";
const Header = () => {
    return (
      <header id="header">
          <div className="container">
              <div className="header">
                  <h1>UI.desk</h1>
                  <div className="header-menu">
                      <a href="">UI.desk</a>
                      <a href="">About</a>
                      <a href="">Contact</a>
                      <a href="">Testimonials</a>
                  </div>
                  <div className="header-last">
                      <button>Order Now</button>
                  </div>
              </div>
          </div>
      </header>
    )
}
export default Header;
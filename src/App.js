import './App.css';
import Header from "./components/Header"
import Hero from "./components/Hero"
import Why from "./components/Why"
import Foods from "./components/Foods"
import Fresh from "./components/Fresh"
import Dishes from "./components/Dishes";
import Reviews from "./components/Reviews"
import Email from "./Email";
import Footer from "./components/Footer";
import Last from "./components/Last";


function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Why/>
            <Foods/>
            <Fresh/>
            <Dishes/>
            <Reviews/>
            <Email/>
            <Footer/>
            <Last/>
        </div>
    );
}

export default App;


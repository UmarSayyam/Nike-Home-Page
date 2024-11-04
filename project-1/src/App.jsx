import "./App.css";
import HeroSection from "./components/hero";
import Navigation from "./components/Navigation";

const App = () => {
    return (
        <div className="main-containe">
            <Navigation/>
            <HeroSection/>
        </div>
    );
};      


export default App;
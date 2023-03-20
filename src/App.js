import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import MyNavbar from './components/MyNavbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import GamePlay from './components/GamePlay';
import "./App.css";
import TeamFrame from "./components/TeamFrame";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";
import MySlider from "./components/MySlider";
import ReactNav from "./components/ReactNav";

function App() {
  return (
    <>
   {/* <div className='bg-image-header vh_100_xl d-flex flex-column overflow-hidden'>
        <MyNavbar />
        <HeroSection />
      </div>
      <AboutUs />
      <GamePlay />
      <MySlider/>
      <Roadmap />
      <TeamFrame />
      <Faq />
      <Footer /> */}
      <ReactNav/>
    </>
  );
}

export default App;

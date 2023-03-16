import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import MyNavbar from './components/MyNavbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import GamePlay from './components/GamePlay';
import Slider from './components/Slider';

function App() {
  return (
    <>
      <div className='bg-image-header vh_100_lg d-flex flex-column overflow-hidden'>
        <MyNavbar />
        <HeroSection />
      </div>
      <AboutUs />
      <GamePlay />
      <Slider/>
    </>
  );
}

export default App;

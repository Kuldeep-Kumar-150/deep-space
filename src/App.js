import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import MyNavbar from './components/MyNavbar';
import TeamFrame from "./components/TeamFrame";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";

function App() {
  return (
    <>
      {/* <MyNavbar /> */}
      <Roadmap />
      <TeamFrame />
      <Faq />
      <Footer />
    </>
  );
}

export default App;

import Navbar from "../components/Navigations/Navbar";  
import HeroIndex from "../components/heroIndex/HeroIndex";
import Threecard from "../components/threeCard/Threecard";
import SideBySideOne from "../components/sideBySideOne/SidebySideOne";
import SixCardService from "../components/SixCardService";
import Steps from '../components/steps/Steps';
import Footer from '../components/footer/Footer'
import Contact from '../components/contact/Contact'

import "../../src/styles/sixCardStyle.css";

export default function Home() {
  return (
    <>  
    <Navbar />
    <HeroIndex />
    <Threecard />
    <SideBySideOne />
    <SixCardService />
    <Steps />
    <Contact />
    <Footer />
    </>
  
  );
}

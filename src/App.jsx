nimport Navbar from "./components/Navbarr";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import Transactions from "./components/Transactions";
import Footer from "./components/Footerr";

import bckGrnd from "../images/bgdchild.jpg";


const App = () => {
  return (
    <div className="min-h-screen bg-contain bg-fixed bg-blend-darken bckGrnd-class" style={{ 
    backgroundImage: `url(${bckGrnd})` 
    }}>
      <div className=""> 
      {/* gradient-bg-welcome */}
        <div >
        {/* <img src= alt="background" className="bckGrnd-class cursor-pointer" /> */}
        
        <Navbar />
        <Welcome />
        </div>
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;

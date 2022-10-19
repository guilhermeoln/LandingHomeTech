import Header from "./Components/Header";
import SectionInitial from "./Components/SectionInitial";
import SectionAbout from "./Components/SectionAbout";
import SectionServices from "./Components/SectionServices";
import SectionContact from "./Components/SectionContact";
import Footer from "./Components/Footer";
import { useState } from 'react';
import MyContext from './contexts/myContext';


function App() {

  const [menuSandwich, setMenuSandwich] = useState(false);


  return (
    <MyContext.Provider value={
      {menuSandwich,
      setMenuSandwich
      }    
    }>
        <Header />
        <SectionInitial />
        <SectionAbout />
        <SectionServices />
        <SectionContact />
        <Footer />
    </MyContext.Provider>
  );
}

export default App;

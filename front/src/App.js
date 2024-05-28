import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { ContactInfoProvider } from './context/ContactInfoContext';
import { DiplomesProvider } from './context/DiplomesContext';
import { ServicesProvider } from './context/ServicesContext';

import Home from './pages/Home/Home';
import MonParcours from './pages/MonParcours/MonParcours';
import TherapieSystemique from './pages/TherapieSystemique/TherapieSystemique';
import ConstellationsFamiliales from './pages/ConstellationsFamilliales/ConstellationsFamiliales';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/accueil" element={
                    <ContactInfoProvider>
                        <DiplomesProvider>
                            <ServicesProvider>
                                <Home />
                            </ServicesProvider> 
                        </DiplomesProvider>           
                    </ContactInfoProvider>
                } />
                
                <Route path="/mon-parcours-professionnel" element={<MonParcours />} />
                <Route path="/therapie-breve-systemique" element={<TherapieSystemique />} />
                <Route path="/constellations-familiales" element={<ConstellationsFamiliales/>}/>
            </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;

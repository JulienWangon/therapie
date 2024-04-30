import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import MonParcours from './pages/MonParcours/MonParcours';
import PsychoCorporelle from './pages/PsychoCorporelle/PsychoCorporelle';
import TherapieSystemique from './pages/TherapieSystemique/TherapieSystemique';
import ConstellationsFamiliales from './pages/ConstellationsFamilliales/ConstellationsFamiliales';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/accueil" element={<Home />} />
                <Route path="/mon-parcours" element={<MonParcours />} />
                <Route path="/therapie-systemique" element={<TherapieSystemique />} />
                <Route path="/constellations-familiales" element={<ConstellationsFamiliales/>}/>
                <Route path="/therapie-psychocorporelle" element={<PsychoCorporelle />} />
            </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HowWeHelp from './Components/HowWeHelp/HowWeHelp';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route exact path="/" element={<HowWeHelp/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

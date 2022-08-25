import './App.css';
import Home from './components/Home';
import {Route,Routes,BrowserRouter}from "react-router-dom";

function App() {
  return (
    <div className='.fondo'>
      <BrowserRouter>
       <Routes>
        <Route exact path="/home"element={<Home/>}/>
        
       </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;

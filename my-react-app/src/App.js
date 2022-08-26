import './App.css';
import Home from './components/Home';
import {Route,Routes,BrowserRouter}from "react-router-dom";
import SendMail from './components/SendMail';

function App() {
  return (
    <div className='.fondo'>
      <BrowserRouter>
       <Routes>
        <Route exact path="/home"element={<Home/>}/>
        <Route exact path="/mail"element={<SendMail/>}/>
       </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Description from './components/pages/Description';
function App() {
  return (
    <div className="App">
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/description' element={<Description/>} />
       </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Description from './components/pages/Description';
import ConfirmBooking from './components/pages/ConfirmBooking';
function App() {
  return (
     <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/description' element={<Description/>} />
         <Route path='/confirm' element={<ConfirmBooking/>} />
       </Routes>
  );
}

export default App;

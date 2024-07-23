import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Description from './components/pages/Description';
import ConfirmBooking from './components/pages/ConfirmBooking';
import Events from './components/pages/Events';
import EventCard from './components/body/EventCard';
import Restaurant from './components/pages/Restaurant';
import RestaurantCard from './components/body/RestaurantCard';
import MallCard from './components/body/MallCard';
import Malls from './components/pages/Mall';
import Attractions from './components/pages/Attractions';
import AttractionsCard from './components/body/AttractionsCard';
import Footer from './components/footer/footer';
import Explore from './components/ExploreSection/Explore';
function App() {
  return (
     <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/description' element={<Description/>} />
         <Route path='/confirm' element={<ConfirmBooking/>} />
         <Route path='/event' element={<Events/>} />
         <Route path='/eventCard' element={<EventCard/>} />
         <Route path='/restaurantsCard' element={<RestaurantCard/>} />
         <Route path='/restaurants' element={<Restaurant/>} />
         <Route path='/mallCard' element={<MallCard/>} />
         <Route path='/malls' element={<Malls/>} />
         <Route path='/attraction' element={<Attractions/>} />
         <Route path='/attractionCard' element={<AttractionsCard/>} />
         <Route path='/explore' element={<Explore/>} />
       </Routes>
  );
}

export default App;

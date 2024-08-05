import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarAlt, faUtensils, faMapSigns, faShoppingCart, faLandmark, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import './filter.css';

const Filters = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getActiveTab = () => {
    switch (location.pathname) {
      case '/eventCard':
        return 'events';
      case '/restaurantsCard':
        return 'restaurants';
      case '/mallCard':
        return 'malls';
      case '/attractionCard':
        return 'attraction';
      case '/emergencyCard':
        return 'emergency';
      default:
        return 'stay';
    }
  };

  const [activeTab, setActiveTab] = React.useState(getActiveTab);

  React.useEffect(() => {
    setActiveTab(getActiveTab());
  }, [location]);

  const handleClick = (tab, path) => {
    setActiveTab(tab);
    navigate(path);
  };

  return (
    <Container className='d-flex justify-content-center filter-btn'>
      <div className='pt-2 pb-2 mt-5 filter-btn'>
        <Button 
          variant="outline-primary"
          className={activeTab === 'stay' ? 'active' : ''}
          onClick={() => handleClick('stay', '/')}
        >
          <FontAwesomeIcon icon={faBed} className='me-2' />
          Stay
        </Button>{' '}
        <Button 
          variant="outline-primary"
          className={activeTab === 'events' ? 'active' : ''}
          onClick={() => handleClick('events', '/eventCard')}
        >
          <FontAwesomeIcon icon={faCalendarAlt} className='me-2' />
          Events
        </Button>{' '}
        <Button 
          variant="outline-primary"
          className={activeTab === 'restaurants' ? 'active' : ''}
          onClick={() => handleClick('restaurants', '/restaurantsCard')}
        >
          <FontAwesomeIcon icon={faUtensils} className='me-2' />
          Restaurants
        </Button>{' '}
        <Button 
          variant="outline-primary"
          className={activeTab === 'malls' ? 'active' : ''}
          onClick={() => handleClick('malls', '/mallCard')}
        >
          <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
          Shopping
        </Button>{' '}
        <Button 
          variant="outline-primary"
          className={activeTab === 'attraction' ? 'active' : ''}
          onClick={() => handleClick('attraction', '/attractionCard')}
        >
          <FontAwesomeIcon icon={faLandmark} className="me-2" />
          Attractions
        </Button>{' '}
        <Button 
          variant="outline-danger"
          className={activeTab === 'emergency' ? 'active' : ''}
          onClick={() => handleClick('emergency', '/emergencyCard')}
        >
          <FontAwesomeIcon icon={faExclamationTriangle} className='me-2' />
          Emergency No.
        </Button>
      </div>
    </Container>
  );
};

export default Filters;

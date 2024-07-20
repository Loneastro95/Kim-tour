import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarAlt, faUtensils,  faMapSigns } from '@fortawesome/free-solid-svg-icons';
// Make sure to create and import this CSS file
import "./filter.css";
const Filters = () => {
  const [activeTab, setActiveTab] = useState('stay');

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container className='d-flex justify-content-center'>
      <div className='pt-2 pb-2 mt-5'>
        <Button 
          variant="outline-primary"
          className={activeTab === 'stay' ? 'active' : ''}
          onClick={() => handleClick('stay')}
        >
          <FontAwesomeIcon icon={faBed} className='me-2' />
          Stay
        </Button>{' '}
        <Button 
          variant="outline-primary"
          className={activeTab === 'events' ? 'active' : ''}
          onClick={() => handleClick('events')}
        >
          <FontAwesomeIcon icon={faCalendarAlt} className='me-2' />
          Events
        </Button>{' '}
        <Button 
          variant="outline-primary"
          className={activeTab === 'restaurants' ? 'active' : ''}
          onClick={() => handleClick('restaurants')}
        >
          <FontAwesomeIcon icon={faUtensils} className='me-2' />
          Restaurants
        </Button>{' '}
        <Button 
          variant="outline-primary"
          className={activeTab === 'malls' ? 'active' : ''}
          onClick={() => handleClick('malls')}
        >
          <FontAwesomeIcon  className='me-2' />
          Malls
        </Button>{' '}
        <Button 
          variant="outline-primary"
          className={activeTab === 'trip' ? 'active' : ''}
          onClick={() => handleClick('trip')}
        >
          <FontAwesomeIcon icon={faMapSigns} className='me-2' />
          Trip Planner
        </Button>
      </div>
    </Container>
  );
};

export default Filters;

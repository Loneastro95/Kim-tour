import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
const Filters = () => {
  return (
    <Container className='d-flex justify-content-center'>
      <div className=' pt-2 pb-2 mt-5  '>
        <Button variant="outline-primary" >Stay</Button>{' '}
        <Button variant="outline-primary">Events</Button>{' '}
        <Button variant="outline-primary">Restaurants</Button>{' '}
        <Button variant="outline-primary">Malls</Button>{' '}
        <Button variant="outline-primary">Trip Planner</Button>{' '}
      
      </div >
    </Container>
  )
}

export default Filters
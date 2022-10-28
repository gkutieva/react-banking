import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import blue from '../Images/blue.jpg';
import black from '../Images/black.jpg';
import gold from '../Images/gold.jpg';

export const Cards = () => {
  return (
   <div id='card' className='d-flex justify-content-evenly'>
        <Card style={{ width: '18rem', height: '22rem', margin: '50px' }}>
    <Card.Img variant="top" src={blue} />
    <Card.Body>
        <Card.Title>Blue Card</Card.Title>
        <Card.Text>
            Some text
        </Card.Text>
        <Button variant="primary">Apply Now</Button>
    </Card.Body>
</Card>
<Card style={{ width: '18rem', height: '22rem', margin: '50px'}}>
    <Card.Img variant="top" src={gold} />
    <Card.Body>
        <Card.Title>Gold Card</Card.Title>
        <Card.Text>
            Some text
        </Card.Text>
        <Button variant="primary">Apply Now</Button>
    </Card.Body>
</Card>
<Card style={{ width: '18rem', height: '22rem', margin: '50px' }}>
    <Card.Img variant="top" src={black} />
    <Card.Body>
        <Card.Title>Black Card</Card.Title>
        <Card.Text>
            Some text
        </Card.Text>
        <Button variant="primary">Apply Now</Button>
    </Card.Body>
</Card>
   </div>
  )
}

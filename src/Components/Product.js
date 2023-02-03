import React from 'react'
import Slide from 'react-reveal/Slide';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './product.css'
import item1 from'./cup.jpg'
import item2 from'./item2.webp'
import item3 from'./item3.webp'
import Fade from 'react-reveal/Fade';

function Product() {
  return (
    <div className='product'>
        <h1>Our Products</h1>
        <Slide left>
            <CardGroup  className='group'>
        <Card>
            <Card.Img variant="top" src={item1} />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit a cum pariatur necessitatibus et unde commodi consequuntur, repellat voluptatum reiciendis aliquid ipsa perspiciatis omnis qui sit aperiam neque saepe fugiat.

            </Card.Text>
            </Card.Body>
          
        </Card>
        <Card>
            <Card.Img variant="top" src={item2} />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit a cum pariatur necessitatibus et unde commodi consequuntur, repellat voluptatum reiciendis aliquid ipsa perspiciatis omnis qui sit aperiam neque saepe fugiat.

            </Card.Text>
            </Card.Body>
           
        </Card>
        <Card>
            <Card.Img variant="top" src={item3} />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit a cum pariatur necessitatibus et unde commodi consequuntur, repellat voluptatum reiciendis aliquid ipsa perspiciatis omnis qui sit aperiam neque saepe fugiat.

            </Card.Text>
            </Card.Body>
            
        </Card>
        </CardGroup>
        </Slide>
        <Fade>
       <button className='btn-grad'>Visit Our Shop</button>
       </Fade>
    </div>
  )
}

export default Product

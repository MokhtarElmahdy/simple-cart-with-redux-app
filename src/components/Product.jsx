import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { addToCart } from '../rtk/slices/cart-slice'
import { useDispatch } from 'react-redux'

function Product({product}) {
  const dispatch = useDispatch()
  const {id,title,price,description,image} = product
  // console.log(`id is : ${id}`);
  // console.log("*************************************");
  // console.log(product);
  // console.log("*************************************");
  // console.log(product);
  return (
    <Col xs={12} sm={6} md={4} lg={3} className='mb-4'>
        <Card style={{ maxWidth: '18rem' ,height: '500px'}} >
      <Link to={`${id}`}>
      {/* <Link to={`5`}> */}
      <Card.Img 
      style={{ maxWidth: '100%' ,height: '300px' , objectFit: 'contain' }} 
      variant="top" 
      src={image}
      />
      </Link>
      <Card.Body>
        <Card.Title>{title.split(" ").slice(0,5).join(" ")}</Card.Title>
        <Card.Text>
          {description.split("").slice(0,10).join("")}
        </Card.Text>
        <Card.Text>
          {price} $
        </Card.Text>
        <Button variant="primary" onClick={() => dispatch(addToCart(product))}>
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default Product
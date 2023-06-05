import React from 'react'
import { Button, Col, Container, Image, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart , clear ,increaseQty,decreaseQty} from '../rtk/slices/cart-slice';

function Cart() {
  const dispatch = useDispatch()
  let cartItems = useSelector(state => state.Cart)
  const totalPrice = cartItems.reduce((acc,product) => (acc += product.tPrice) , 0)
  
  console.log(cartItems);
  return (
    <div>
      {/* <Container> */}
      {/* {cartItems.map(item => (
        <Row key={item.id}>
        <Col xs={8}>
          <p>Hello</p>
        </Col>
        <Col xs={4}>
          <p>Hello</p>
        </Col>
        </Row>
      ))} */}
      {/* </Container> */}
      <Container fluid>
      {(cartItems.length > 0) ? 
          <React.Fragment>
            <Button 
            className='mb-3'
            variant='danger'
            onClick={() => dispatch(clear())}>
            Clear Cart</Button>
            <p className='fs-3'>
            Total Price {totalPrice} $
          </p>
            <Table striped bordered hover size='sm'>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Image</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item , index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.tPrice}</td>
                <td>
                <Button onClick={()=> dispatch(decreaseQty(item.id))}>-</Button>
                  <span className='mx-2'>{item.qty}</span>
                <Button onClick={()=> dispatch(increaseQty(item.id))}>+</Button>  
                </td>
                <td><Image src={item.image} alt={item.title} style={{width: '150px' , height: '150px' , objectFit: 'contain'}} /></td>
                <td>
                  <Button 
                  variant='danger'
                  onClick={() => dispatch(deleteFromCart(item.id))}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
              ))}
            </tbody>
          </Table>
          
          </React.Fragment>
      :
        <p className='fs-1 text-center'>Cart is empty</p>
      }
      

    </Container>



    </div>
  )
}

export default Cart
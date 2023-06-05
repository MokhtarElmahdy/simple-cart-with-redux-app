import React, { useEffect } from 'react'
import Product from './Product'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../rtk/slices/products-slice'

function Products() {

  const dispatch = useDispatch()
  const Products = useSelector(state => state.Products)
  
  useEffect(()=>{
    dispatch(fetchProducts())
  })
  // console.log(state);
  // console.log(Products);
  return (
    <Container>
        <Row className='m-5'>
          {Products.map((prod) => (
          <React.Fragment key={prod.id}>
              <Product product={prod}/>
            </React.Fragment>
            ))}
        </Row>
    </Container>
  )
}

export default Products
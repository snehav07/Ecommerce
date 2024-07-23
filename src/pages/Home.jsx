import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Row, Col, Card,Spinner} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../REDUX/Slices/productSlice'





function Home() {
 
  const dispatch = useDispatch() 

  const {allProducts,error,loading} = useSelector(state=>state.productReducer)
  console.log(allProducts,error,loading);
  
  useEffect(()=>{
     dispatch(fetchProducts()) 
  },[])
  
  return (
    <>
      <Header insideHome />

      <div className='container' style={{ marginTop: '100px' }}>
        {
          loading? <div className='mt-5 text-center fw-bolder'><Spinner animation='border' variant='dark' className='me-2'/>Loading...</div> :
        <Row>
         { allProducts?.length>0?
           allProducts?.map(product=>(
            <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
            <Card className='shadow rounded' style={{ width: '18rem' }}>
              <Card.Img style={{height:'180px'}} variant="top" src={product?.thumbnail} />
              <Card.Body>
                <Card.Title className='fw-bolder'>{product?.title.slice(0,15)}...</Card.Title>
                <div className='text-center mt-2'><Link to={`/view/${product?.id}`} variant="primary">View More...</Link></div>
              </Card.Body>
            </Card>
          </Col>
           )):
            <div className='fw-bolder text-primary text-center mt-5 mb-5 fs-4'>Nothing to display!!!</div>
          }
        </Row>}
      </div>

    </>
  )
}

export default Home
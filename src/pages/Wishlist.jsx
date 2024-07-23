import React from 'react'
import Header from '../components/Header'
import CartImg from '../assets/cart.png'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWishlistItem } from '../REDUX/Slices/wishlistSlice'
import { addCart } from '../REDUX/Slices/cartSlice'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Wishlist() {
  const cartlist = useSelector(state=>state.cartReducer)
  const wishlist = useSelector(state => state.wishlistReducer)
  const dispatch = useDispatch()

  const handleCart = (product)=>{
    const existingProduct = cartlist?.find(item=>item.id==product.id)
     if(existingProduct){
        dispatch(addCart(product));
        dispatch(deleteWishlistItem(product.id))
        toast.success("Products added to your cart!!!")
        
     }
     else{
       dispatch(addCart(product));
       dispatch(deleteWishlistItem(product.id))  
     }
  }


  return (
    <>
      <Header />
      <div className='container' style={{ marginTop: '100px' }}>
      <div> <Link to={'/home'} style={{ textDecoration: 'none'}} className='fw-bolder'><i className="fa-solid fa-arrow-left text-dark me-2"></i>Back</Link></div>
        {wishlist?.length >0?
          <Row>
            {  
               wishlist?.map(product=>(
                <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
                <Card className='shadow rounded border-success' style={{ width: '18rem' }}>
                  <Card.Img style={{ height: '180px' }} variant="top" src={product?.thumbnail} />
                  <Card.Body>
                    <Card.Title>{product?.title.slice(0,15)}...</Card.Title>
                    <div className="d-flex justify-content-between">
                      <button onClick={()=>dispatch(deleteWishlistItem(product?.id))} className='btn'><i style={{ color: 'red' }} className="fa-solid fa-heart-circle-xmark"></i></button>
                      <button onClick={()=>handleCart(product)} className='btn'><i style={{ color: 'green' }} className="fa-solid fa-cart-plus"></i></button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
               ))
              }
          </Row>:
          <div style={{ height: '65vh' }} className='w-100 d-flex justify-content-center align-items-center flex-column'>
            <img width={'250px'} className='img-fluid me-5' src={CartImg} alt="" />
            <h3 className='mt-4 text-dark'>Your Wishlist is Empty!!!</h3>
          </div>
        }
         <ToastContainer position='top-center' theme='colored' autoClose={2000} />
      </div>
    </>
  )
}

export default Wishlist
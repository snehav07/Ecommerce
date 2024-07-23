import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addWishlistItem } from '../REDUX/Slices/wishlistSlice'
import { addCart } from '../REDUX/Slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

function View() {
  const cartlist = useSelector(state=>state.cartReducer)
  const wishlist = useSelector(state=>state.wishlistReducer) 
  const dispatch = useDispatch()

  const [product,setProduct] =useState({})
  const {id} = useParams()
  // console.log(id);


  useEffect(()=>{
     if(sessionStorage.getItem("allProducts")){
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
      // console.log(allProducts);
      setProduct(allProducts.find(item=>item.id==id))
     }
  },[])
  console.log(product);

  const handleWishlist = (product)=>{
      if(wishlist?.includes(product)){
         toast.info("Item already in your Wishlist")
      }else{
        dispatch(addWishlistItem(product))
      }
  }
  
  const handleCart = (product)=>{
    const existingProduct = cartlist?.find(item=>item.id==product.id)
     if(existingProduct){
        dispatch(addCart(product));
        toast.success("Products added to your cart!!!")
     }
     else{
       dispatch(addCart(product));    
     }
  }
  return (
    <>
      <Header />
     
    
      <div className='container d-flex align-items-center ' style={{ marginTop: '100px',height:'60vh'}}>
        <div className="row mb-5 align-items-center">
        <div> <Link to={'/home'} style={{ textDecoration: 'none'}} className='fw-bolder'><i className="fa-solid fa-arrow-left text-dark me-2"></i>Back</Link></div>
          <div className="col-lg-6">
            <img width={'300px'} height={'280px'} className='img-fluid ms-5' src={product?.thumbnail} alt="" />
          </div>
          <div className="col-lg-6">
            <h5>PID: {product?.id} </h5>
            <h1>{product?.title}</h1>
            <h3 className='text-danger'>$ {product?.price}</h3>
            <p style={{ textAlign: 'justify' }}><b>Description</b> : {product?.description} </p>
            <div className='d-flex mt-3'>
              <button onClick={()=>handleWishlist(product)} className='btn btn-outline-primary fw-bolder me-3'><i style={{ color: 'red' }} className="fa-solid fa-heart me-2"></i>Add to Wishlist</button>
              <button onClick={()=>handleCart(product)} className='btn btn-outline-primary fw-bolder'><i style={{ color: 'green' }} className="fa-solid fa-cart-plus me-2"></i>Add to Cart</button>

            </div>

          </div>
        </div>  
        <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </div>
  </>
  )
}

export default View
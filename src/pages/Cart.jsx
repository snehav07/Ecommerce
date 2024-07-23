import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import CartImg from '../assets/cart.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, deleteCart, deleteCartItem, incQuantity } from '../REDUX/Slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cart() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartItems = useSelector(state=>state.cartReducer)
  const [cartTotal,setCartTotal] = useState(0)
  useEffect(()=>{
    if(cartItems?.length>0){
      setCartTotal(cartItems?.map(item=>item.totalPrice).reduce((t1,t2)=>t1+t2))
    }else{
      setCartTotal(0)
    }
      
  },[cartItems])

  const handleDecrement = (product)=>{
    if(product.quantity>1){
      dispatch(decQuantity(product.id))
    }else{
      dispatch(deleteCartItem(product.id))
    }
  }
 
  const handleCheckout =()=>{
    dispatch(deleteCart())
    toast.warning("Order Placed Succefully...Thank you for purchasing")
    setTimeout(()=>{
      navigate('/home')
    },2000)
  }

  return (
    <>
    <Header/>
    <div className='container' style={{ marginTop: '100px' }}>
    <div> <Link to={'/home'} style={{ textDecoration: 'none'}} className='fw-bolder'><i className="fa-solid fa-arrow-left text-dark me-2"></i>Back</Link></div>
      {cartItems?.length>0?
        <div className='pt-5'>
        <h1 className='fw-bolder'>Cart Summary</h1>
        <div className="row mt-5">
          <div className="col-lg-8">
            <table className='table shadow border'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>...</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartItems?.map((product,index)=>(
                    <tr>
                  <td>{index+1}</td>
                  <td>{product.title.slice(0,15)}...</td>
                  <td><img width={'50px'} height={'40px'} src={product.thumbnail} alt="" /></td>
                  <td>
                    <div className='d-flex me-5'>
                      <button onClick={()=>handleDecrement(product)} className='btn fw-bolder text-dark'>-</button>
                      <input value={product.quantity} style={{width:'50px',background:'lightyellow'}} className='form-control' type="text" placeholder='0' readOnly />
                      <button onClick={()=>dispatch(incQuantity(product.id))} className='btn fw-bolder text-dark'>+</button>
                    </div>
                    </td>
                  <td>${product.totalPrice}</td>
                  <td><button onClick={()=>dispatch(deleteCartItem(product.id))} className='btn'><i style={{color:'red'}} className="fa-solid fa-trash"></i></button></td>
                </tr>
                  ))
                }
              </tbody>
            </table>
            <div className="float-end mt-3">
              <button onClick={()=>dispatch(deleteCart())} className='btn btn-danger'>Clear Cart</button>
              <Link className='btn btn-primary ms-4' to={'/home'}> Shop More</Link>
            </div>
          </div>
          <div className="col-lg-4">
              <div className='shadow border border-black rounded p-4 ms-5'>
                <h5>Total Products: <b className='text-warning'>{cartItems?.length}</b></h5>
                <h3>Total Amount: <b className='text-danger'>$ {cartTotal}</b></h3>
                <div className='d-grid mt-4'>
                  <button onClick={handleCheckout} className='btn btn-success'>Check Out</button>
                </div>
              </div>
          </div>
        </div>
      </div>
       :
      <div style={{height:'65vh'}} className='w-100 d-flex justify-content-center align-items-center flex-column'>
        <img width={'250px'} className='img-fluid me-5' src={CartImg} alt="" />
        <h3 className='mt-4 text-dark'>Your Cart is Empty!!!</h3>
      </div>
      }
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
      </div>
    </>
  )
}

export default Cart
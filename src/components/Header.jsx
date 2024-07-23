import React from 'react'
import { Container, Nav, Navbar,Badge } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import { searchProduct } from '../REDUX/Slices/productSlice'


function Header({insideHome}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartlistCount = useSelector(state=>state.cartReducer).length
  const wishlistCount = useSelector(state=>state.wishlistReducer).length

  const logout = ()=>{
    sessionStorage.clear()
    navigate('/')  
  }
  return (
    <Navbar style={{background:'lightgreen',zIndex:'10'}} expand="lg" className="position-fixed top-0 w-100">
    <Container>
      <Navbar.Brand><Link to={'/home'} className='text-light fw-bolder' style={{textDecoration:'none'}}><i className="fa-solid fa-cart-shopping text-danger me-1"></i>E-Shop</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  id="basic-navbar-nav">
        <Nav className="ms-auto">
        { insideHome &&  
          <Nav.Link>
            <input onChange={(e)=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{width:'400px'}} className='form-control' type="text" placeholder='Search Products Here!!!' />
          </Nav.Link>
          }
          <Nav.Link className='mt-2'><Link to={'/wishlist'} className='text-dark fw-bolder' style={{textDecoration:'none'}}> <i style={{color:'red'}} className="fa-solid fa-heart"></i> Wishlist<Badge className='ms-1' bg="light">{wishlistCount}</Badge></Link></Nav.Link>
          <Nav.Link className='mt-2'><Link to={'/cart'} className='text-dark fw-bolder' style={{textDecoration:'none'}}> <i style={{color:'green'}} className="fa-solid fa-cart-plus"></i> Cart<Badge className='ms-1' bg="light">{cartlistCount}</Badge></Link></Nav.Link>
         
        
       {  insideHome &&
          <div className='mt-2'>
            <button onClick={logout} className='btn btn-link fw-bolder text-danger ms-3'>Logout<i className="fa-solid fa-arrow-right"></i></button>
          </div>
          }
          
      
        </Nav>
      </Navbar.Collapse>
    </Container>  
  </Navbar>
  )
}

export default Header
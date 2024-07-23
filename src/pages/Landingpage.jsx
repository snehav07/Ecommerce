import React from 'react'
import { Link } from 'react-router-dom'
import LandingImg from '../assets/e-shop.png'
import { Card } from 'react-bootstrap'



function Landingpage() {
  return (
    <>
    <div style={{minHeight:'100vh',background:'lightgreen'}} className="w-100 d-flex justify-content-center align-items-center rounded">
      <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <h1 className='fw-bolder text-light' style={{fontSize:'90px',fontFamily:'sans-serif'}}><i className="fa-solid fa-cart-shopping text-danger"></i> E-Shop</h1>
                <p className='mt-3' style={{textAlign:'justify',fontSize:'17px',fontFamily:'serif'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odio tempore labore incidunt, temporibus vel, fuga odit possimus maxime rem quas saepe! Totam esse facilis laboriosam magni suscipit beatae rem! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi in ullam temporibus laborum. Dicta at, dolorum... quos quisquam Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, recusandae cumque quis adipisci alias illum eius aliquam!!!</p>
                <Link to={'/login'} className='btn btn-warning mt-2 fw-bolder'>Explore Our Products <div className="i fa-solid fa-arrow-right"></div></Link>
            </div>
            <div className="col-lg-6">
               <img className='img-fluid w-100 ms-5' src={LandingImg} alt="" />
            </div>
        </div>
      </div>
   </div>

   <div className="d-flex  align-items-center mt-5 mb-5  flex-column">
        <h1 className='fw-bolder' style={{color:'lightgreen'}}>Our Testimonials</h1>
      </div>
      <div style={{color:'black'}} className="d-flex justify-content-evenly align-items-center w-100">
      <Card className='shadow rounded' style={{ width: '16rem' }}>
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-items-center flex-column'> 
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&s" alt="" />
          <span style={{color:'black'}}>Max Miller</span>
        </Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-center">
          <i class="fa-solid fa-star text-warning "></i>
          <i class="fa-solid fa-star text-warning"></i>
          <i class="fa-solid fa-star text-warning"></i>
          <i class="fa-solid fa-star text-warning"></i>
          <i class="fa-solid fa-star text-warning"></i>
          
          </div>
        <p style={{color:'black'}}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatem a ratione mollitia iste alias cumque itaque quos blanditiis.</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '16rem' }}>
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-items-center flex-column'> 
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://cdn-icons-png.freepik.com/512/219/219986.png" alt="" />
          <span style={{color:'black'}}>Luke Daminson</span>
        </Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-center">
          <i class="fa-solid fa-star text-warning "></i>
          <i class="fa-solid fa-star text-warning"></i>
          <i class="fa-solid fa-star text-warning"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          </div>
        <p style={{color:'black'}}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatem a ratione mollitia iste alias cumque itaque quos blanditiis.</p>
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '16rem' }}>
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-items-center flex-column'> 
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_JmafxKbli9Es5QUvL6d-qIdOd5RmExsvA&s" alt="" />
          <span style={{color:'black'}}>Sara</span>
        </Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-center">
          <i class="fa-solid fa-star text-warning "></i>
          <i class="fa-solid fa-star text-warning"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          </div>
        <p style={{color:'black'}}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatem a ratione mollitia iste alias cumque itaque quos blanditiis.</p>
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  
   
</>
  )
}

export default Landingpage
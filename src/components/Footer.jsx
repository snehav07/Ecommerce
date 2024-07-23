import React from 'react'



function Footer() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center mt-5' style={{width:'100%', height:'340px',backgroundColor:'lightgreen'}}>
            <div className="footer-content d-flex justify-content-evenly w-100">
                <div style={{ width: '300px',color:'black' }} className="website">
                    <h5 className='fw-bolder text-light'><i style={{width:'50px'}} className="fa-solid fa-cart-shopping text-danger"></i>E-Shop</h5>
                    <p style={{ textAlign: 'justify' }}>Designed and built with all the love  in the world by the Bootstrap team with the help of our contributors.</p>
                    <span>Code licensed MIT , docs CC BY 3.0.</span>
                    <span>Currently v5.3.2.</span>
                </div>
                <div className="links d-flex flex-column ">
                    <h5 className='fw-bolder' style={{color:'white'}}>Overview</h5>
                    <a href='' style={{textDecoration: 'none', color:'black' }} >Themes</a>
                    <a href='' style={{ textDecoration: 'none',color:'black'  }}>Pricing</a>
                    <a  href='' style={{ textDecoration: 'none', color:'black' }}>Services</a>
                </div>
                <div className="guides d-flex flex-column">
                    <h5 className='fw-bolder' style={{color:'white'}}>Guides</h5>
                    <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none',color:'black'  }} >React JS</a>
                    <a href="https://react-bootstrap.netlify.app/" target='_blank' style={{ textDecoration: 'none', color:'black' }} >React Routing</a>
                    <a href="https://react-bootstrap.netlify.app/" target='_blank' style={{ textDecoration: 'none',color:'black'  }}>React Bootstrap</a>
                </div>
                <div className="contact">
                    <h5 className='fw-bolder' style={{color:'white'}}>Contact Us</h5>
                    <div className='d-flex'>
                        <input type="text" className='form-control me-1' placeholder='Email Id Please' />
                        <button className='btn btn-warning'><i className='fa-solid fa-arrow-right'></i></button>
                    </div>
                    <div className='icons d-flex justify-content-between mt-3'>
                        <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none',color:'black' }}> <i class="fa-brands fa-twitter fa-1x"></i> </a>
                        <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none',color:'black'}}> <i class="fa-brands fa-instagram fa-1x"></i> </a>
                        <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none',color:'black'  }}> <i class="fa-brands fa-facebook fa-1x"></i> </a>
                        <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color:'black' }}> <i class="fa-brands fa-linkedin fa-1x"></i> </a>
                        <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none',color:'black'  }}> <i class="fa-brands fa-github fa-1x"></i> </a>
                        <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none',color:'black'  }}> <i class="fa-solid fa-phone fa-1x"></i> </a>
                    </div>
                </div>

            </div>
            <p style={{color:'black'}}>Copyright 2024 E-Shop. Built with React.</p>
        </div>

  )
}

export default Footer
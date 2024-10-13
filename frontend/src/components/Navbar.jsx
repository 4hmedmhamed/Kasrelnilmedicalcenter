import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Container } from 'react-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas';

import Logo from "../../public/assit/logo.png"

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <>

          <p onClick={handleShow} className="mt-3 text-light">
              {
                  < FaListUl />
              }
          </p>

          <Offcanvas show={show} onHide={handleClose} {...props} style={{ backgroundColor: "#360851 ", width: "80%" , color :"#ffff"}} className="side-bar">
              <Offcanvas.Header closeButton>
                  <div className='w-100'>
{/* 
                      <Image
                          src={Logo}
                          width={200}
                          height={70}
                      /> */}
                         <img src={Logo}  style={{width:"200px" ,height:"70px"}}/>
                  </div>
              </Offcanvas.Header>
              <Offcanvas.Body >
                  <div class="p-2 flex-fill bd-highlight  mt-3  text-center" style={{ backgroundColor: "#360851" }}>
                      <div className='m-3 border-bottom'>
                          <Link to={'/'} className='nav-item fs-5 mt-5' >الرئيسية</Link>
                      </div>
                      <div className='m-3 border-bottom'>
                          <Link to={'/about'} className='nav-item fs-5 m-5 ' o>من نحن </Link>
                      </div>
                      <div className='m-3 border-bottom'>
                          <Link to={'/Oursrvies'} className='nav-item fs-5 m-5 '>خدماتنا </Link>
                      </div>
                      <div className='m-3 border-bottom'>
                          <Link to={'/Our_advantages'} className='nav-item fs-5 m-5 ' >مميزاتنا</Link>
                      </div>
                      <div className='m-3 border-bottom'>
                          <Link to={'/'} className='nav-item fs-5 m-5 ' >اخبار</Link>
                      </div>
                      <div   className='m-3 border-bottom'>
                                      <Link to={'/video'} className='nav-item fs-5 m-5'>video</Link>
                                  </div>
                      <div className='m-3 border-bottom'>
                          <Link to={'/connet'} className='nav-item fs-5 m-3 ' >تواصل معنا</Link>
                      </div>
                  </div>
              </Offcanvas.Body>
          </Offcanvas>
      </>
  );
}
function Navbar() {
  return (
      <>
       
       <div className='Nav-bar fixed-top   d-none d-lg-block'>
                <Container>
                    <div className=''>
                        <div class="d-flex bd-highlight">
                            <div className="p-2 flex-fill bd-highlight">
                           
                                <img src={Logo}  style={{width:"300px" ,height:"80px"}}/>
                            </div>
                            <div className='  d-none d-lg-block'>

                                <div class="p-2 flex-fill bd-highlight d-flex mt-3">
                                    <div >
                                        <Link to={'/'} className='nav-item fs-5 mx-2'>الرئيسية</Link>
                                    </div>
                                    <div >
                                        <Link to={'/about'} className='nav-item fs-5 mx-2'>من نحن </Link>
                                    </div>
                                    <div >
                                        <Link to={'/Oursrvies'} className='nav-item fs-5 mx-2'>خدماتنا </Link>
                                    </div>
                                    <div >
                                        <Link to={'/Our_advantages'} className='nav-item fs-5 mx-2'>مميزاتنا</Link>
                                    </div>
                                    <div >
                                        <Link to={'/'} className='nav-item fs-5 mx-2'>اخبار</Link>
                                    </div>
                                    <div >
                                        <Link to={'/video'} className='nav-item fs-5 mx-2'>video</Link>
                                    </div>
                                    <div >
                                        <Link to={'/Connect'} className='nav-item fs-5 mx-2'>تواصل معانا</Link>
                                    </div>

                                </div>
                            </div>
                            <div className="p-2 flex-fill bd-highlight d-block d-lg mx-5 mt-4">
                                    <div>
                                        <Link to={'/Appointment'} className='nav-item fs-5 mx-2'>
                                        <button className="btn btn-primary" >احجز الان</button>
                                        </Link>
                                    </div>

                            </div>

                        </div>
                    </div>
                </Container>
            </div>

          <div className='  d-block d-lg-none Nav-bar'>
              <div class="d-flex bd-highlight">
                  <div class="p-2 flex-fill bd-highlight">
                  
                                                      <img src={Logo}  style={{width:"220px" ,height:"70px"}}/>
                      
                  </div>
                  <div class="p-2 flex-fill bd-highlight   d-block d-lg-none">
                      {['end'].map((placement, idx) => (
                          <OffCanvasExample key={idx} placement={placement} name={placement} />
                      ))}
                  </div>
              </div>

              <div className="">

              </div>
          </div>
      </>
  )
}

export default Navbar;

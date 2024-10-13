import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import Logo from "../../public/assit/logo.png"
import face from "../../public/assit/socail/face.jpeg"
import you from "../../public/assit/socail/youtube.png"
import wath from "../../public/assit/socail/wath.jpeg"
import call from "../../public/assit/socail/call.png"

import { MdOutlineMailOutline } from "react-icons/md";


const Footer = () => {


  return (
    <>
      <div style={{ backgroundColor: " #380751" }}  >


          <div style={{ backgroundColor: " #380751" }} >
            <div className='row'>
              <div className='col-md-4'>
               
                  < img src={Logo} 
                   style={{
                    width: '100%',
                    borderRadius: "50%",
                  }}
                  />
                <h5 className='text-light fs-5'> تواصل معانا</h5>
                <p><a to="tel:01066726667  " className='text-light  border-bottom m-2'><span className='m-2'>
                  <FaPhone />
                </span>01066726667</a></p>
                <div className='d-flex'>
                  <p><a to="tel:0402081860  " className='text-light  border-bottom m-2'>
                    <span className='m-2'>
                      <FaPhone />
                    </span>
                    0402081860</a></p>
                </div>
                <div className='d-flex'>
                  <p><a to="mailto:qasrelnil061@gmail.com" className='text-light  border-bottom m-2'>
                    <MdOutlineMailOutline /> 
                    qasrelnil061@gmail.com</a></p>
                </div>
              </div>

              <div className='col-md-4'>
                <h3 className='text-light fs-5 text-center mt-2'>موقعنا</h3>
                <div className='mt-3'>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.7232975658176!2d31.167332559839995!3d30.950291675191647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb5be6b749dd%3A0xca61211e438e63e2!2z2YXYsdmD2LIg2YLYtdixINin2YTZhtmK2YQg2YTZhNmG2LPYp9ihINmI2KfZhNiq2YjZhNmK2K8!5e0!3m2!1sar!2seg!4v1722531984751!5m2!1sar!2seg"
                    width="100%" height="250px"
                    allowfullscreen=""
                    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>



              </div>
              <div className='col-md-4 text'>
                <h5 className='text-light fs-5 mt-5 '>احدث المقالات </h5>
                <h5 className='text-light mt-3 '>
                  الولادة الطبيعية، والمعروفة أيضًا بالولادة المهبلية، لها فوائد مختلفة لكل امرأة حامل.
                </h5>
                <h5 className='text-light mt-2 '>
                  يشمل بعضها حصول الطفل على بكتيريا مفيدة، ومشاكل تنفس أقل، في وقت مبكر الرضاعة الطبيعية،
                </h5>
                <h5 className='text-light mt-2 '> العنوان:
                  المحلة الكبرى ، آخر طريق نادى ضباط الشرطة، أمام كوبرى الرباط
                </h5>
                <div className='d-flex '>
                  <div className=' mx-2'>
                    <Link to={'https://www.facebook.com/share/USdGviMw2jHAcJ1i/?mibextid=qi2Omg'}>
                      {/* <Image src={face}
                        width={30}
                        height={30}
                        style={{ borderRadius: "20px" }}>

                      </Image> */}
                      <img src={face} alt=""  style={{ borderRadius: "20px"  ,width:"30px" , height:"30px"}}/>
                    </Link>
                  </div>
                  <div className=' mx-2'>
                    <Link to={'https://youtu.be/m-BqR-lU8RY?si=C_EAJAEb3rBNVPfz'}>
                     
                        <img src={you} alt=""  style={{ borderRadius: "20px"  ,width:"30px" , height:"30px"}}/>
                    </Link>
                  </div>
                  <div className=' mx-2'>

                    <Link to={'tel:01066726667'}>
                   
                        <img src={call} alt=""  style={{ borderRadius: "20px"  ,width:"30px" , height:"30px"}}/>
                    </Link>
                  </div>
                  <div className='6 mx-2'>
                    <Link to={'https://api.whatsapp.com/send?phone=01066726667'}>
                        <img src={wath} alt=""  style={{ borderRadius: "20px"  ,width:"30px" , height:"30px"}}/>
                    
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Footer;

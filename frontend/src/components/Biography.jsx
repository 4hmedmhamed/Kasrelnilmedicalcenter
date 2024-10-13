import React from "react";
import { Container } from 'react-bootstrap'

import { FaCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
const Biography = ({}) => {
  return (
    <>
  <Container>
      <div className='row mt-5 border-bottom'>
        <h2 className='text-center text-primary ' >  من نحن؟</h2>
        <div className='d-flex justify-content-center'>
        <iframe width="80%" height="500" src="https://www.youtube.com/embed/m-BqR-lU8RY?si=nKffV1igDtdYmSnE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div>
          <p className='text-center mt-3 fs-4'>
ليه تختاري مركز قصر النيل للنساء والتوليد وعلاج العقم ؟ 
دكتور/هشام الشافعي هيجاوبك في الفيديو ده
          </p>
        </div>
        <div  className='d-flex justify-content-center'>
<Link to={'./video'}className='btn btn-primary w-50'>اعرف المزيد....</Link>
        </div>
        <div >
          <br></br>
          <br></br>
        </div>
      </div>
    </Container>
    </>
  );
};

export default Biography;

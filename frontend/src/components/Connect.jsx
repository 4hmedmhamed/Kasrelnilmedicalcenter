import React from 'react'
import { AccordionBody, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import call from '../../public/assit/socail/call.png'
import wath from '../../public/assit/socail/wath.jpeg'
import face from '../../public/assit/socail/face.jpeg'

import MessageForm from './MessageForm'
function Connect() {
  return (
    <div>

    <div className='d-none d-sm-none d-lg-block'>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>

    <div>

    </div>
    <Container>
      <div className='row'>
        <h2>
          مركز قصر النيل للنساء والتوليد
        </h2>


        <div className='border rounded'>

        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.7232975658176!2d31.167332559839995!3d70.950291675191647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb5be6b749dd%3A0xca61211e438e63e2!2z2YXYsdmD2LIg2YLYtdixINin2YTZhtmK2YQg2YTZhNmG2LPYp9ihINmI2KfZhNiq2YjZhNmK2K8!5e0!3m2!1sar!2seg!4v1722531984751!5m2!1sar!2seg" 
                          width="100%" height="250px" 
                           allowfullscreen="" 
                          loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
<div>
<h2>تقدر تستفسر اوتبعت استشارة </h2>

<div className='d-flex'>

      
        <div className=' mx-2'>
     
          <Link to={'tel:01066726667'}>
        
         <img 
         src={call}
         style={{borderRadius:"20px" , width:"70px" , height:"70px"}}
         />
           </Link>
        </div>
        <div className='6 mx-2'>
          <Link to={'https://api.whatsapp.com/send?phone=01066726667'}>
          <img 
         src={wath}
         style={{borderRadius:"20px" , width:"70px" , height:"70px"}}
         />
           </Link>
        </div>
        <div className=' mx-2'>
          <Link to={'https://www.facebook.com/share/USdGviMw2jHAcJ1i/?mibextid=qi2Omg'}>
          <img 
         src={face}
         style={{borderRadius:"20px" , width:"70px" , height:"70px"}}
         />
     
           </Link>
           
        </div>

</div>
<div>
  < MessageForm />
</div>
</div>
      

      
        <div className='col-12 m-2'>

        </div>
      </div>
    </Container>
  </div>

)
}

export default Connect
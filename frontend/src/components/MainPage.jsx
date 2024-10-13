import React from 'react'

// import Oursrvies from './Oursrvies'

function MainPage() {
   return (
      <>
         <div className="main_div ">
            <div className='imgbanner'>
               {/* <Image
                  src={banner}
                  //    width={"100%"}
                  style={{
                     width: '100%',
                     height: '100vh',
                     // filter:' blur(100%)',
                  }}
               /> */}
            </div>

            <div className="frist_banner  d-none d-lg-block">
            </div>
            <div className="sec-banner d-block d-sm-block d-lg-none">
            </div>
            <div className='title-banner-main'>
               <div className='row container'>

                  <div className='col-md-8  d-flex align-items-center  justify-content-center '>
                  <div className='d-block d-md-none' 
                   style={{
                     width: '100%',
                     height: '45vh',
                     // filter:' blur(100%)',
                  }}  >

                     <div className='text-center  '>


                        <h1 className=' title-banner ' >مركز قصر النيل </h1>
                        <h3 className='title-banner-third'>
                           لجراحات النساء والتوليد وعلاج العقم </h3>
                        <h2 className='title-bnner-seconed'> الدكتور هشام الشافعي</h2>
                        <h2 className='title-banner-third '>إستشاري أمراض النساء </h2>
                        <h3 className='title-banner-third '>والتوليد وعلاج العقم </h3>
                     </div>
                     </div>


                  <div className='d-none d-md-block' >
                     <div className='text-center  '>
                        <h1 className=' title-banner ' >مركز قصر النيل </h1>
                        <h3 className='title-banner-third'>
                           لجراحات النساء والتوليد وعلاج العقم </h3>
                        <h2 className='title-bnner-seconed'> الدكتور هشام الشافعي</h2>
                        <h2 className='title-banner-third '>إستشاري  امرض نساء</h2>
                        <h3 className='title-banner-third '>والتوليد وعلاج العقم </h3>
                     </div>
                     </div>

                  </div>
                  <div className='col-md-4 bg-primary    ' >
                     <div className='d-none d-md-block d-flex align-items-end '    style={{
                     height: '100vh',
                  }}  >
                        
                        <div   style={{
                     width: '100%',
                     height: '35vh',
                  }} >



                        </div>
                        <div  style={{
                     width: '100%',
                     height: '65vh',
                     marginBottom:"0px",
                     overflow:"hidden"
                  }}>

                        {/* <Image
                  src={doctor}
                  //    width={"100%"}
                  style={{
                     width: '100%',
                     height: 'auto',
                     // background:"green"
                  }}
               /> */}
                        </div>
                     </div>


                     <div className='d-block d-md-none  '    style={{
                     height: '50vh',
                  }}  >
                        
                        <div  style={{
                     width: '100%',
                     height: '55vh',
                     marginBottom:"0px",
                     overflow:"hidden"
                  }}>

                        </div>
                     </div>

                  </div>

               </div>
            </div>
         </div>
      </>
   )
}

export default MainPage
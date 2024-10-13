import React from 'react'
import { Container } from 'react-bootstrap'
import { GiTeleport } from "react-icons/gi";
import { FaBaby } from "react-icons/fa";
import { LuBaby } from "react-icons/lu";
import { MdPregnantWoman } from "react-icons/md";
import { MdOutlineSatelliteAlt } from "react-icons/md";
import { FaSatelliteDish } from "react-icons/fa";
import { SlChemistry } from "react-icons/sl";
import { FaMicroscope } from "react-icons/fa";
import { FaRegHospital } from "react-icons/fa6"
import { MdOutlineFamilyRestroom } from "react-icons/md";
// import "./page.module.css"
function Oursrvies() {
    return (
        <Container>
            <div className='row text-center Oursrvies mt-5  '>
                <div className='col-md-12 mt-2'>
                    <h2 className='title-serves   '> لماذا مركز قصر النيل ؟ </h2>
                </div>

                <div className='col-md-6 d-flex justify-content-center border '>
                    <div className=''>

                        <div className='icon-serves text-center  my-3 '>

                            <  FaSatelliteDish />

                        </div>
                        <div className='fs-4 text-primary     '>
                            عيادة نساء وتوليد مُزودة بأحدث الأجهزة والتقنيات الطبية.
                        </div>
                    </div>

                </div>
                <div className='col-md-6 d-flex justify-content-center  border '>
                    <div className=''>

                        <div className='icon-serves text-center   my-3 '>

                            <FaBaby></FaBaby>

                        </div>
                        <div className='fs-4 text-primary ' text-primary >
                        غرفة عمليات مُهيأة لإجراء مختلف عمليات الولادة الطبيعية والقيصرية.
                        </div>
                    </div>

                </div>
                <div className='col-md-6 d-flex justify-content-center border p-3 '>
                    <div className=''>

                        <div className='icon-serves text-center  my-3 '>

                            <  MdPregnantWoman />

                        </div>
                        <div className='fs-4 text-primary ' text-primary >


                        إجراء المناظير الجراحية بمختلف أنواعها مثل عمليات استئصال الرحم بالمنظار و مناظير العقم والأنابيب.

                        </div>
                    </div>

                </div>
                <div className='col-md-6 d-flex justify-content-center border p-3 '>
                    <div className=''>

                        <div className='icon-serves text-center  my-3 '>

                            <SlChemistry />

                        </div>
                        <div className='fs-4 text-primary ' text-primary >

                        إجراء مختلف عمليات الولادة بشكل صحي آمن ودون الشعور بأي آلام.
                        </div>
                    </div>

                </div>
                <br></br>
           


            </div>
        </Container>
    )
}

export default Oursrvies
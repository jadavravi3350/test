import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { content } from './App';
import { Calendar } from 'primereact/calendar';
import "primereact/resources/themes/lara-light-cyan/theme.css";

function JacobAbout() {
    const { id } = useParams();
    const { Arr } = useContext(content);
    const [star, setstar] = useState(0);
    const [star2, setstar2] = useState(0);
    const [date, setDate] = useState(null);
    const navi = useNavigate();

    const obj = Arr.find((v) => {
        return v.id == id
    })

    const handlepayment = () => {

        if (false) {
            navi("/PaymentSuccessfully")
        }

        else {
            navi("/PaymentFailed")
        }

    }


    return (
        <div>

            <div className='d-flex justify-content-center border-bottom pb-5'>

                <div className='col-12 col-xxl-8'>

                    <div className='d-flex flex-wrap gap-5 p-4'>

                        <div className='col-12 col-lg-3 p-lg-3  text-center'>

                            <div className='border py-4'>
                                <img src={obj.url} alt="fasdfasdf" height={120} width={120} />

                                <h5 className='mt-3 mb-0 fs-bold'>{obj.name}</h5>

                                <div className=''>
                                    <img width={70} src="../image/booking5.png" alt="" />
                                    <b className='mx-2'>(233 Reviews)</b>
                                </div>


                                <h6 className='text-info my-3 fs-5 fw-bold'>$ {obj.price} / <span className='text-dark'> per hour</span></h6>

                                <button className='btn rounded mt-2 px-5 text-white btn-lg' style={{ fontSize: "13px", background: "#006ebd" }}>Send Message</button>
                            </div>

                        </div>

                        <div className='col'>

                            <h4 className='fw-bold'>About Jocob</h4>

                            <div className=" text-secondary" style={{ fontSize: "17px" }}>

                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...

                                <span class="collapse" id="collapseExample">

                                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.

                                </span>

                                <a style={{ color: "#006ebd" }} class=" text-decoration-none fw-bold" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Read More
                                </a>

                            </div>

                            <h4 className='mt-3 fw-bold'>Skills</h4>

                            <div>

                                <button style={{ fontSize: "16px", padding: "7px 13px" }} className='btn btn-outline-dark m-2 btn-sm'>Lorem Ipsum</button>
                                <button style={{ fontSize: "16px", padding: "7px 13px" }} className='btn btn-outline-dark m-2 btn-sm'>Accident</button>
                                <button style={{ fontSize: "16px", padding: "7px 13px" }} className='btn btn-outline-dark m-2 btn-sm'>McClintock</button>
                                <button style={{ fontSize: "16px", padding: "7px 13px" }} className='btn btn-outline-dark m-2 btn-sm'>Lorem Ipsum</button>
                                <button style={{ fontSize: "16px", padding: "7px 13px" }} className='btn btn-outline-dark m-2 btn-sm'>Accident</button>
                                <button style={{ fontSize: "16px", padding: "7px 13px" }} className='btn btn-outline-dark m-2 btn-sm'>McClintock</button>
                                <button style={{ fontSize: "16px", padding: "7px 13px" }} className='btn btn-outline-dark m-2 btn-sm'>Characteristic</button>
                                <button style={{ fontSize: "16px", padding: "7px 13px" }} className='btn btn-outline-dark m-2 btn-sm'>De Finibus</button>
                                <button style={{ fontSize: "16px", padding: "7px 13px" }} className='btn btn-outline-dark m-2 btn-sm'>Malorum</button>

                            </div>

                            <h4 className='mt-3 fw-bold'>Resolution Experience</h4>

                            <div className=" text-secondary" style={{ fontSize: "17px" }}>

                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia. looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source....

                                <span class="collapse" id="collapseExample">

                                    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.

                                </span>

                                <a style={{ color: "#006ebd" }} class=" text-decoration-none fw-bold" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Read More
                                </a>

                            </div>

                            <div className='my-3 d-flex flex-wrap gap-3 border-bottom pb-4'>
                                <button className='btn px-lg-5 fw-bold btn-lg' style={{ fontSize: "14.5px", background: "#e0f2ff", color: "#006ebd" }} data-bs-toggle="modal" href="#exampleModalToggle" role="button">Check Availability</button>
                                <button className='btn btn-lg px-lg-5 fw-bold' style={{ fontSize: "14.5px", background: "#006ebd", color: "#ffff" }}>Book Video Call</button>
                            </div>


                            {/*  */}
                            <div className='col-12 col-lg-5 mt-4'>

                                <h4 className='fw-bold'>Reviews</h4>

                                <div className='d-flex justify-content-between align-items-center gap-4'>
                                    <h4 className='' style={{ color: "#0d960b" }}>Exceptional 4.0</h4>

                                    <h5 style={{ fontSize: "15px " }} className='fw-bold'> 233 Reviews</h5>
                                </div>

                                <div className='d-flex gap-2 mt-2'>
                                    <i onClick={() => { }} style={{ fontSize: "15px" }} className="fa-solid fa-star text-warning"></i>
                                    <i onClick={() => { }} style={{ fontSize: "15px" }} className="fa-solid fa-star text-warning"></i>
                                    <i onClick={() => { }} style={{ fontSize: "15px" }} className="fa-solid fa-star text-warning"></i>
                                    <i onClick={() => { }} style={{ fontSize: "15px" }} className="fa-solid fa-star text-warning"></i>
                                    <i onClick={() => { }} style={{ fontSize: "15px" }} className="fa-regular fa-star"></i>
                                </div>


                                <div className='mt-3'>

                                    <div className='d-flex gap-3 justify-content-between align-items-center'>
                                        <h5 className='fw-bold'>5 <i style={{ fontSize: "12px" }} className="fa-solid fa-star text-warning"></i></h5>

                                        <input className=" form-range " style={{ width: "70%" }} type="range" value={star} onChange={(e) => { setstar() }} />

                                        <b>{star} %</b>
                                    </div>

                                    <div className='d-flex gap-3 justify-content-between align-items-center'>
                                        <h5 className='fw-bold'>4 <i style={{ fontSize: "12px" }} className="fa-solid fa-star text-warning"></i></h5>

                                        <input className=" form-range " style={{ width: "70%" }} type="range" value={star} onChange={(e) => { setstar() }} />


                                        <b>{star} %</b>
                                    </div>

                                    <div className='d-flex gap-3 justify-content-between align-items-center'>
                                        <h5 className='fw-bold'>3 <i style={{ fontSize: "12px" }} className="fa-solid fa-star text-warning"></i></h5>

                                        <input className=" form-range " style={{ width: "70%" }} type="range" value={star} onChange={(e) => { setstar() }} />


                                        <b>{star} %</b>
                                    </div>

                                    <div className='d-flex gap-3 justify-content-between align-items-center'>
                                        <h5 className='fw-bold'>2 <i style={{ fontSize: "12px" }} className="fa-solid fa-star text-warning"></i></h5>

                                        <input className=" form-range " style={{ width: "70%" }} type="range" value={star} onChange={(e) => { setstar() }} />


                                        <b>{star} %</b>
                                    </div>

                                    <div className='d-flex gap-3 justify-content-between align-items-center'>
                                        <h5 className='fw-bold'>1 <i style={{ fontSize: "12px" }} className="fa-solid fa-star text-warning"></i></h5>

                                        <input className=" form-range " style={{ width: "70%" }} type="range" value={star2} onChange={(e) => { setstar2() }} />

                                        <b>{star2} %</b>
                                    </div>

                                </div>

                            </div>
                            {/*  */}


                            <div className='my-4'>

                                <div className='border-bottom border-1  py-2 d-flex flex-wrap' >

                                    <div className=' col-2 col-lg-1 text-center'>
                                        <img src="../image/available2.png" alt="" width={50} />
                                    </div>

                                    <div className=' col-11'>
                                        <div className='d-flex justify-content-between '>

                                            <div>
                                                <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                                                <p className="text-secondary fw-bold my-1 fs-6">12 Dec 2022</p>
                                            </div>

                                            <div className='d-flex gap-1'>
                                                <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>
                                                <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>
                                                <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>
                                                <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>
                                                <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>

                                            </div>
                                        </div>

                                        <p style={{ fontSize: "13px" }}>
                                            Mauris venenatis, felis in dictum sagittis, elit nunc dignissim massa, eget feugiat nibh est a nibh. Aliquam eu nibh sit amet augue consectetur pretium sed sit amet leo.
                                        </p>
                                    </div>

                                </div>

                                {/*  */}


                                <div className='border-bottom border-1  py-2 d-flex flex-wrap' >

                                    <div className=' col-2 col-lg-1 text-center'>
                                        <img src="../image/available2.png" alt="" width={50} />
                                    </div>

                                    <div className=' col-11'>
                                        <div className='d-flex justify-content-between '>

                                            <div>
                                                <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                                                <p className="text-secondary fw-bold my-1 fs-6">12 Dec 2022</p>
                                            </div>

                                            <div className='d-flex gap-1'>
                                                <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>
                                                <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>
                                                <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>
                                                <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>
                                                <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>

                                            </div>
                                        </div>

                                        <p style={{ fontSize: "13px" }}>
                                            Mauris venenatis, felis in dictum sagittis, elit nunc dignissim massa, eget feugiat nibh est a nibh. Aliquam eu nibh sit amet augue consectetur pretium sed sit amet leo.
                                        </p>
                                    </div>

                                </div>


                                <div class="collapse" id="collapseExample">

                                    <div className='border-bottom border-1  py-2 d-flex flex-wrap' >

                                        <div className=' col-2 col-lg-1 text-center'>
                                            <img src="../image/available2.png" alt="" width={50} />
                                        </div>

                                        <div className=' col-11'>
                                            <div className='d-flex justify-content-between '>

                                                <div>
                                                    <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                                                    <p className="text-secondary fw-bold my-1 fs-6">12 Dec 2022</p>
                                                </div>

                                                <div className='d-flex gap-1'>
                                                    <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>
                                                    <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>
                                                    <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>
                                                    <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>
                                                    <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>

                                                </div>
                                            </div>

                                            <p style={{ fontSize: "13px" }}>
                                                Mauris venenatis, felis in dictum sagittis, elit nunc dignissim massa, eget feugiat nibh est a nibh. Aliquam eu nibh sit amet augue consectetur pretium sed sit amet leo.
                                            </p>
                                        </div>

                                    </div>

                                    <div className='border-bottom border-1  py-2 d-flex flex-wrap' >

                                        <div className=' col-2 col-lg-1 text-center'>
                                            <img src="../image/available2.png" alt="" width={50} />
                                        </div>

                                        <div className=' col-11'>
                                            <div className='d-flex justify-content-between '>

                                                <div>
                                                    <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                                                    <p className="text-secondary fw-bold my-1 fs-6">12 Dec 2022</p>
                                                </div>

                                                <div className='d-flex gap-1'>
                                                    <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>
                                                    <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>
                                                    <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>
                                                    <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>
                                                    <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>

                                                </div>
                                            </div>

                                            <p style={{ fontSize: "13px" }}>
                                                Mauris venenatis, felis in dictum sagittis, elit nunc dignissim massa, eget feugiat nibh est a nibh. Aliquam eu nibh sit amet augue consectetur pretium sed sit amet leo.
                                            </p>
                                        </div>

                                    </div>

                                    <div className='border-bottom border-1  py-2 d-flex flex-wrap' >

                                        <div className=' col-2 col-lg-1 text-center'>
                                            <img src="../image/available2.png" alt="" width={50} />
                                        </div>

                                        <div className=' col-11'>
                                            <div className='d-flex justify-content-between '>

                                                <div>
                                                    <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                                                    <p className="text-secondary fw-bold my-1 fs-6">12 Dec 2022</p>
                                                </div>

                                                <div className='d-flex gap-1'>
                                                    <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>
                                                    <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>
                                                    <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>
                                                    <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>
                                                    <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>

                                                </div>
                                            </div>

                                            <p style={{ fontSize: "13px" }}>
                                                Mauris venenatis, felis in dictum sagittis, elit nunc dignissim massa, eget feugiat nibh est a nibh. Aliquam eu nibh sit amet augue consectetur pretium sed sit amet leo.
                                            </p>
                                        </div>

                                    </div>

                                    <div className='border-bottom border-1  py-2 d-flex flex-wrap' >

                                        <div className=' col-2 col-lg-1 text-center'>
                                            <img src="../image/available2.png" alt="" width={50} />
                                        </div>

                                        <div className=' col-11'>
                                            <div className='d-flex justify-content-between '>

                                                <div>
                                                    <h6 className=' fs-5 fw-bold'>Wade warren</h6>
                                                    <p className="text-secondary fw-bold my-1 fs-6">12 Dec 2022</p>
                                                </div>

                                                <div className='d-flex gap-1'>
                                                    <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>
                                                    <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>
                                                    <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>
                                                    <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>
                                                    <i style={{ fontSize: "10px" }} className="fa-solid fa-star text-warning"></i>

                                                </div>
                                            </div>

                                            <p style={{ fontSize: "13px" }}>
                                                Mauris venenatis, felis in dictum sagittis, elit nunc dignissim massa, eget feugiat nibh est a nibh. Aliquam eu nibh sit amet augue consectetur pretium sed sit amet leo.
                                            </p>
                                        </div>

                                    </div>

                                </div>

                                <a style={{ color: "#006ebd" }} class=" text-decoration-none fw-bold" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    See All Reviews
                                </a>

                            </div>

                        </div>

                    </div>
                </div>

            </div>


            {/* modal 1 */}

            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered  d-flex justify-content-center pt-5">
                    <div class="modal-content CheckAvailability">
                        <div class="modal-body">

                            <div className=' text-end '>
                                <button style={{ fontSize: "13px" }} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>


                            <h4 className='text-center fw-bold mb-4'>Check Availability</h4>

                            <div className='px-3'>
                                <div className='d-flex gap-2 border align-items-center'>
                                    <img className='object-fit-cover p-2' src={obj.url} alt="" width={100} />

                                    <div className=''>

                                        <h5 className='fw-bold mb-0'>{obj.name}</h5>

                                        {/* <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-solid fa-star text-warning"></i>
                                        <i className="fa-regular fa-star"></i> */}
                                        <img width="75px" src="../image/section5start.png" alt="" />

                                        <b className='ms-2'>(233 Reviews)</b>

                                        <p className="fs-6"><b className='fs-6' style={{ color: "#0672bf" }}>$ {obj.price}</b> / per hour</p>

                                    </div>
                                </div>
                            </div>

                            <h4 className='my-3 px-3 fw-bold'>Availability</h4>

                            <div className='mb-3'>
                                <button className='btn'>Today</button>
                                <button className='btn'>Tomorrow</button>
                            </div>

                            <div className='d-flex flex-wrap'>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>8:00 to 8:30 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>8:30 to 9:00 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>9:00 to 9:30 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>9:30 to 10:00 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>10:00 to 10:30 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>10:30 to 11:00 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>11:00 to 11:30 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>11:30 to 12:00 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>12:00 to 12:30 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>12:00 to 1:00 AM</button>
                                </div>

                            </div>


                        </div>
                        <div class="modal-footer border-0 px-4">
                            <button style={{ background: "#006ebd" }} class="btn text-white w-100 fs-5" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Book video call</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* modal 2 */}

            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered d-flex justify-content-center">
                    <div class="modal-content CheckAvailability">
                        <div class="modal-body">

                            <div className=' text-end'>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>


                            <h4 className='text-center fw-bold mb-3'>Book Now</h4>

                            <div className="card flex justify-content-center">
                                <Calendar id='p-datepicker' value={date} onChange={(e) => setDate(e.value)} inline showWeek />
                            </div>

                            {/* <h4 className='my-3'>Availability</h4> */}

                            {/* <button className='btn'>Today</button> */}
                            <button className='btn fw-bold fs-5'>Select Time</button>

                            <div className='d-flex flex-wrap'>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>8:00 to 8:30 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>8:30 to 9:00 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>9:00 to 9:30 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>9:30 to 10:00 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>10:00 to 10:30 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>10:30 to 11:00 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>11:00 to 11:30 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>11:30 to 12:00 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>12:00 to 12:30 AM</button>
                                </div>

                                <div className='p-2 w-50'>
                                    <button className='w-100 btn btn-outline-primary btn-sm p-2'>12:00 to 1:00 AM</button>
                                </div>

                            </div>


                        </div>
                        <div class="modal-footer px-4 border-0">
                            <button style={{ background: "#006ebd" }} class="btn text-white w-100 fs-5" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* modal 3 */}

            <div class="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered d-flex justify-content-center">
                    <div class="modal-content CheckAvailability">

                        <div className=' text-end'>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="px-4">

                            <h4 className='text-center fw-bold mb-3 fs-5'>Payment</h4>

                            <div className="">

                                <div className='d-flex'>

                                    <div className='col-6 d-flex gap-3'>

                                        <div>
                                            <i style={{ fontSize: "20px" }} class="ri-calendar-line"></i>
                                        </div>

                                        <div>
                                            <h6 style={{ fontSize: "14px" }} className=' text-secondary'>Date</h6>
                                            <h6 style={{ fontSize: "16px" }} className='fw-bold'>22 May 2023</h6>
                                            <h6 style={{ fontSize: "14px" }} className=' text-primary mt-2'>Edit</h6>


                                        </div>
                                    </div>

                                    <div className='col-6 d-flex gap-3'>

                                        <div>
                                            <i style={{ fontSize: "20px" }} class="ri-time-line"></i>
                                        </div>

                                        <div>
                                            <h6 style={{ fontSize: "14px" }} className=' text-secondary'>Date</h6>
                                            <h6 style={{ fontSize: "16px" }} className='fw-bold'>10:30 to 11:00 AM</h6>
                                            <h6 style={{ fontSize: "14px" }} className=' text-primary mt-2'>Edit</h6>


                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <img className=' img-fluid w-100' src="../image/credit.jpg" alt="" />
                                </div>

                                <div className='mt-3'>

                                    <div>
                                        <label className='fw-bold mb-2' style={{ fontSize: "14px" }} for="">Name on Card</label>

                                        <div className='form-outline'>

                                            <input className=' form-control' type="text" placeholder="Name on Card" style={{ fontSize: "14px" }} />
                                            <i style={{ fontSize: "20px" }} class="ri-user-line fontleftsilde"></i>

                                        </div>
                                    </div>

                                    <div className='my-2'>
                                        <label className='fw-bold mb-2' style={{ fontSize: "14px" }} for="">Name on Card</label>

                                        <div className='form-outline'>

                                            <input className=' form-control' type="text" placeholder="Name on Card" style={{ fontSize: "14px" }} />
                                            <i style={{ fontSize: "20px" }} class="ri-bank-card-line fontleftsilde"></i>

                                        </div>

                                    </div>

                                    <div className=' d-flex gap-2'>

                                        <div className='col-4'>
                                            <label className='fw-bold' style={{ fontSize: "14px" }} for="">Expiry Date</label>

                                            <select className=' form-select mt-2'>
                                                <option value="" hidden>MM</option>

                                                <option value="">Jan</option>
                                                <option value="">Feb</option>
                                                <option value="">Mar</option>
                                                <option value="">Apr</option>
                                                <option value="">May</option>
                                                <option value="">Jun</option>
                                                <option value="">Jul</option>
                                                <option value="">Aug</option>
                                                <option value="">Sep</option>
                                                <option value="">Oct</option>
                                                <option value="">Nov</option>
                                                <option value="">Dec</option>

                                            </select>

                                        </div>

                                        <div className='col-4'>
                                            <label className='fw-bold' style={{ fontSize: "14px" }} for=""></label>

                                            <select className=' form-select mt-2'>
                                                <option value="" hidden>YYYY</option>

                                                <option value="">2020</option>
                                                <option value="">2021</option>
                                                <option value="">2022</option>
                                                <option value="">2023</option>
                                                <option value="">2024</option>
                                                <option value="">2025</option>
                                                <option value="">2026</option>

                                            </select>

                                        </div>

                                        <div className='col-3 ms-2'>
                                            <label className='fw-bold' style={{ fontSize: "14px" }} for="">CVV</label>

                                            <input type="text" className=' form-control mt-2' placeholder='CVV' />

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div class="modal-footer px-4 border-0">
                            <button style={{ background: "#006ebd" }} onClick={handlepayment} class="btn text-white w-100 fs-5" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" data-bs-dismiss="modal">Pay Now</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a> */}

        </div>
    )
}

export default JacobAbout;

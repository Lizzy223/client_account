import React from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import { EffectCoverflow, Pagination } from "swiper";
import img from '../../assets/header.svg'
import "./style.css";


const Testimonial = () => {
  return (
    <div style={{background:'#c1c1c1'}} class='p-5'>
         {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        
        
        className="mySwiper"
      >
        <SwiperSlide>
            <div class='col-auto rounded p-3'>
                <div class='col-md-12'>
                    <div class='float-left'>
                        <img class='img-responsive image-fluid rounded w-25 h-25' src={img} alt='' />
                    </div>
                    <div class='float-right'>
                        <p>Bayo Onimisi</p>
                        <small class='d-block'>CEO, Kuda bank</small>
                    </div>
                    <p class='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est ipsum, semper a imperdiet et, egestas at quam. Donec ultrices justo vel ex tincidunt finibus.</p>
               
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class='col-auto rounded p-3'>
                <div class='col-md-12'>
                    <div class='float-left'>
                        <img class='img-responsive image-fluid rounded w-25 h-25' src={img} alt='' />
                    </div>
                    <div class='float-right'>
                        <p>Bayo Onimisi</p>
                        <small class='d-block'>CEO, Kuda bank</small>
                    </div>
                    <p class='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est ipsum, semper a imperdiet et, egestas at quam. Donec ultrices justo vel ex tincidunt finibus.</p>
               
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class='col-auto rounded p-3'>
                <div class='col-md-12'>
                    <div class='float-left'>
                        <img class='img-responsive image-fluid rounded w-25 h-25' src={img} alt='' />
                    </div>
                    <div class='float-right'>
                        <p>Bayo Onimisi</p>
                        <small class='d-block'>CEO, Kuda bank</small>
                    </div>
                    <p class='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est ipsum, semper a imperdiet et, egestas at quam. Donec ultrices justo vel ex tincidunt finibus.</p>
               
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class='col-auto rounded p-3'>
                <div class='col-md-12'>
                    <div class='float-left'>
                        <img class='img-responsive image-fluid rounded w-25 h-25' src={img} alt='' />
                    </div>
                    <div class='float-right'>
                        <p>Bayo Onimisi</p>
                        <small class='d-block'>CEO, Kuda bank</small>
                    </div>
                    <p class='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est ipsum, semper a imperdiet et, egestas at quam. Donec ultrices justo vel ex tincidunt finibus.</p>
               
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class='col-auto rounded p-3'>
                <div class='col-md-12'>
                    <div class='float-left'>
                        <img class='img-responsive image-fluid rounded w-25 h-25' src={img} alt='' />
                    </div>
                    <div class='float-right'>
                        <p>Bayo Onimisi</p>
                        <small class='d-block'>CEO, Kuda bank</small>
                    </div>
                    <p class='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est ipsum, semper a imperdiet et, egestas at quam. Donec ultrices justo vel ex tincidunt finibus.</p>
               
                </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class='col-auto rounded p-3'>
                <div class='col-md-12'>
                    <div class='float-left'>
                        <img class='img-responsive image-fluid rounded w-25 h-25' src={img} alt='' />
                    </div>
                    <div class='float-right'>
                        <p>Bayo Onimisi</p>
                        <small class='d-block'>CEO, Kuda bank</small>
                    </div>
                    <p class='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est ipsum, semper a imperdiet et, egestas at quam. Donec ultrices justo vel ex tincidunt finibus.</p>
               
                </div>
                </div>
        </SwiperSlide>
      </Swiper> */}
      <h3 className='display-5 p-5 text-bold font-bold text-center'>Backed by strong global partners</h3>
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class='col-md-6 col-sm-9 m-auto text-center rounded p-3'>
                        <div class='row'>
                            <div class='col-md-6 col-sm-12'>
                                <img class='img-responsive image-fluid  testimony-img' src={img} alt='' />
                            </div>
                            <div class='col-md-6 col-sm-12'>
                                <p>Bayo Onimisi</p>
                                <small class='d-block'>CEO, Kuda bank</small>
                            </div>                           
                        </div>
                        <div class='mt-4 col-md-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Etiam est ipsum, semper a imperdiet et, egestas at quam. Donec ultrices justo vel ex tincidunt finibus.</div>
                    
                    </div>
                </div>
                <div class="carousel-item">
                <div class='col-md-6 col-sm-9 m-auto text-center rounded p-3'>
                        <div class='row'>
                            <div class='col-md-6 col-sm-12'>
                                <img class='img-responsive image-fluid  testimony-img' src={img} alt='' />
                            </div>
                            <div class='col-md-6 col-sm-12'>
                                <p>Bayo Onimisi</p>
                                <small class='d-block'>CEO, Kuda bank</small>
                            </div>                           
                        </div>
                        <div class='mt-4 col-md-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Etiam est ipsum, semper a imperdiet et, egestas at quam. Donec ultrices justo vel ex tincidunt finibus.</div>
                    
                    </div>
                </div>
                <div class="carousel-item">
                <div class='col-md-6 col-sm-9 m-auto text-center rounded p-3'>
                        <div class='row'>
                            <div class='col-md-6 col-sm-12'>
                                <img class='img-responsive image-fluid  testimony-img' src={img} alt='' />
                            </div>
                            <div class='col-md-6 col-sm-12'>
                                <p>Bayo Onimisi</p>
                                <small class='d-block'>CEO, Kuda bank</small>
                            </div>                           
                        </div>
                        <div class='mt-4 col-md-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Etiam est ipsum, semper a imperdiet et, egestas at quam. Donec ultrices justo vel ex tincidunt finibus.</div>
                    
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev text-primary" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon text-primary" aria-hidden="true"></span>
                <span class="sr-only text-primary">Previous</span>
            </a>
            <a class="carousel-control-next text-primary" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon text-primaryk" aria-hidden="true"></span>
                <span class="sr-only text-primary">Next</span>
            </a>
        </div>
    </div>
  )
}

export default Testimonial
import React from 'react'
import img1 from '../../assets/logo1.png'
import img2 from '../../assets/logo2.png'
import img3 from '../../assets/logo3.png'
import img4 from '../../assets/logo4.png'
import img5 from '../../assets/logo5.png'

const Partners = () => {
  return (
    <div class='container-fluid mt-5'>
    <div class='row p-5'>
        <div class='col-md-12 col-sm-12 '>
        <h3 class='font-bold text-bold dispaly-5 text-center'>Partners</h3>
           
        </div>
        <div class='col-md-12 col-sm-12 p-5'>
            <div class='row justify-content-between'>
                <div class='col-md-2'>
                    <img class='img-fluid img-responsive mt-3' src={img1} alt='' />
                </div>
                <div class='col-md-2'>
                    <img class='img-fluid img-responsive mt-3' src={img2} alt='' />
                </div>
                <div class='col-md-2'>
                    <img class='img-fluid img-responsive mt-3' src={img3} alt='' />
                </div>
                <div class='col-md-2'>
                    <img class='img-fluid img-responsive mt-3' src={img4} alt='' />
                </div>
                <div class='col-md-2'>
                    <img class='img-fluid img-responsive mt-3' src={img5} alt='' />
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Partners
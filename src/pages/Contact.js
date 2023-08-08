import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {BsInfo} from 'react-icons/bs'
import {AiOutlineMail } from 'react-icons/ai'
import {BiPhoneCall,BiHome} from 'react-icons/bi'

const Contact = () => {
  return (
    <>
      <Meta title='Contact Us' />
      <BreadCrumb title='Contact Us' />
      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7671.535043681783!2d108.2516277!3d15.9735124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142108997dc971f%3A0x1295cb3d313469c9!2sVietnam%20-%20Korea%20University%20of%20Information%20and%20Communication%20Technology.!5e0!3m2!1sen!2s!4v1679750217940!5m2!1sen!2s"
                width="600" height="450"
                className='border-0 w-100'
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type='text' className='form-control' placeholder='Name'/>
                    </div>
                    <div>
                      <input type='text' className='form-control' placeholder='Email'/>
                    </div>
                    <div>
                      <input type='text' className='form-control' placeholder='Phone number'/>
                    </div>
                    <div>
                      <textarea className='w-100 form-control' name='' id='' placeholder='Comment' cols={30} rows={4} />
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Get in touch with us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiHome  className='fs-5'/>
                        <address>470 Đường Trần Đại Nghĩa, Ngũ Hành Sơn, Đà Nẵng, Vietnam</address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiPhoneCall  className='fs-5'/>
                        <a href='tel: +01 23456789'>+01 23456789</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail className='fs-5' />
                        <a href='mailto: ecommerce@gmail.com'>ecommerce@gmail.com</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BsInfo  className='fs-5'/>
                        <p className='mb-0'>Monday - Friday 10AM - 8PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact
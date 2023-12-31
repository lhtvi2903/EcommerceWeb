import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
      <Meta title='Login account' />
      <BreadCrumb title='Login account' />
      <div className='login-wrapper home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='auth-card'>
              <h3 className='text-center'>Login</h3>
              <form action='' className='d-flex flex-column gap-15'>
                <div>
                  <input type='email' name='email' placeholder='Email' className='form-control' />
                </div>
                <div className='mt-3'>
                  <input type='password' name='password' placeholder='Password' className='form-control' />
                </div>
                <div>
                  <Link to='/forgot-password'>Forgot Password?</Link>
                  <div className=' mt-3 d-flex justify-content-center gap-15 align-items-center'>
                    <button className='button border-0'>Login</button>
                    <Link to='/signup' className='button sigup border-0'>SignUp</Link>
                  </div>
                </div>


              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

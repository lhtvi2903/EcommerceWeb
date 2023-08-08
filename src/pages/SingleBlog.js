import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'
import blog from '../images/blog-1.jpg'

const SingleBlog = () => {
    return (
        <>
            <Meta title='Blog Name' />
            <BreadCrumb title='Blog Name' />
            <div className='blog-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                    
                        <div className='col-12'>
                            <div className='single-blog-card'>
                                <Link className='d-flex align-items-center gap-10' to='/blogs'><BsArrowLeft />Go back to Blogs</Link>
                                <h3 className='title'>A beautiful sundaqy morning renaissance</h3>
                                <img className='img-fluid w-100 my-4' src={blog} alt='blog'></img>
                                <p>
                                    Lorem ipsum dolor sit amet. Sit officiis nihil rem eaque dolorem ea facilis rerum? Ut fuga sunt sed possimus dolores sed nostrum earum qui alias omnis. Ut sequi dolorum est error quam et porro nesciunt et blanditiis placeat sed natus ipsa.
                                    33 facilis vero et sapiente corrupti aut fugit molestias ab dolore animi hic architecto sint est sunt quaerat 33 dolores veniam. Ea vitae accusamus aut magnam fugiat ut repudiandae sunt. Et totam quas ut illo ipsa et facilis nulla vel voluptatem enim. Ea quibusdam cumque aut autem molestiae aut possimus omnis est soluta dolore.
                                    Ut voluptatem quia cum sint ducimus ut mollitia blanditiis sit enim reiciendis hic nesciunt Quis ut architecto mollitia. Qui reiciendis rerum in maiores perferendis et autem laudantium et impedit corporis!
                                </p>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog

import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color'
import { TbGitCompare, TbHeartFilled, TbHeart } from 'react-icons/tb'
import { MdOutlineLocalShipping } from 'react-icons/md'
import { GiMaterialsScience } from 'react-icons/gi'
import { TfiRulerAlt } from 'react-icons/tfi'
import NumericInput from 'react-numeric-input'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom';

const SingleProduct = () => {
    const props = {
        width: 594,
        height: 600,
        zoomWidth: 600,

        img: "https://images-na.ssl-images-amazon.com/images/I/61I3R2ioAlL._SL1500_.jpg",
    };
    // const [orderedProduct, setorderedProduct] = useState(true)
    return (

        <>
            <Meta title='Product Name' />
            <BreadCrumb title='Product Name' />
            <div className='main-product-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl '>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-product-image'>
                                <div >
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className='other-product-image d-flex flex-wrap gap-15'>
                                <div><img src='https://m.media-amazon.com/images/I/41r+KKO4-CL.jpg' className='img-fluid' /></div>
                                <div><img src='https://images-na.ssl-images-amazon.com/images/I/61I3R2ioAlL._SL1500_.jpg' className='img-fluid' /></div>
                                <div><img src='https://cdn.shopify.com/s/files/1/0657/6821/products/BOT-ROCKERZ370FRD-2_grande.jpg?v=1606369802' className='img-fluid' /></div>
                                <div><img src='https://cdn.shopify.com/s/files/1/0657/6821/products/BOT-ROCKERZ370GGN-2_grande.jpg?v=1606369802' className='img-fluid' /></div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='main-product-details'>
                                <div className='border-bottom'>
                                    <h3 className='title'>boAt Rockerz 370 On Ear Wireless Bluetooth Headphone</h3>

                                </div>
                                <div className='border-bottom py-3'>
                                    <p className='price'>$ 100.00</p>
                                    <div className='d-flex align-items-center gap-10'>
                                         
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0 t-review'>( 2 reviews )</p>
                                    </div>
                                    <a className='review-btn' href='#review'>Write a review</a>
                                </div>
                                <div  className='py-3'>
                                    <div className='my-2 d-flex gap-10 align-items-center'>
                                        <h3 className='product-heading'>Type:</h3> <p className='product-data'>headphone</p>
                                    </div>
                                    <div className='my-2 d-flex gap-10 align-items-center'>
                                        <h3 className='product-heading'>Brand:</h3> <p className='product-data'>boAt</p>
                                    </div>
                                    <div className='my-2 d-flex gap-10 align-items-center'>
                                        <h3 className='product-heading'>Categgory:</h3> <p className='product-data'>Headphone</p>
                                    </div>
                                    <div className='my-2 d-flex gap-10 align-items-center'>
                                        <h3 className='product-heading'>Tags:</h3> <p className='product-data'>Headphone</p>
                                    </div>
                                    <div className='my-2 d-flex gap-10 align-items-center'>
                                        <h3 className='product-heading'>Availablity:</h3> <p className='product-data'>In Stock</p>
                                    </div>
                                    <div className=' d-flex gap-10 flex-column mt-2 mb-3'>
                                        <h3 className='product-heading'>Size:</h3>
                                        <div className='d-flex flex-wrap gap-15 '>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>L</span>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                                        </div>
                                    </div>
                                    <div className='mt-2 mb-3 d-flex gap-10 flex-column'>
                                        <h3 className='product-heading'>Color:</h3>
                                        <Color />
                                    </div>
                                    <div className='mt-2 mb-3 gap-15 align-items-center d-flex gap-10 flex-row'>
                                        <h3 className='product-heading'>quantity:</h3>
                                        <div className='add-num'>
                                            <NumericInput
                                                type='number'
                                                mobile
                                                name=''
                                                value={1}
                                                min={1}
                                                max={10}
                                                className='form-control'
                                                style={{ width: '70px' }}
                                                id=''

                                            />

                                        </div>
                                        <div className='d-flex align-items-center gap-30 ms-5'>
                                            <button className='button border-0'>Add To Card</button>
                                            <button className='button sigup border-0'>Buy It Now</button>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center gap-15'>
                                        <div>
                                            <Link className=' me-2' href=''><TbGitCompare />Add to Compare</Link>
                                        </div>
                                        <div>
                                            <Link className=' me-2' href=''><TbHeartFilled />Add to Wishlist</Link>
                                        </div>
                                    </div>
                                    <div className='my-2 d-flex gap-10 align-items-center'>
                                        <div className="accordion " >
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" >
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                        <MdOutlineLocalShipping /> Shipping & Returns
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" >
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                        <GiMaterialsScience />Material
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" >
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                        <TfiRulerAlt />Dimensions
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" >
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                        <TbHeart />Care Instructions
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className='payment-methods d-flex gap-10 flex-column mt-2 mb-3 align-items-center'>
                                <h5><b>Payment methods</b></h5>
                                <div className='payment-icon'>
                                    <img className='img-fluid' src='https://tse2.mm.bing.net/th?id=OIP.PdFuB3wexk3rOEk-PAWMeQAAAA&pid=Api&P=0' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className='description-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h4 className=''>Description</h4>

                            <div className='bg-white p-3'>
                                <p >
                                    Lorem ipsum dolor sit amet. Sed dolores nemo qui debitis molestias et asperiores obcaecati et itaque corrupti. Quo quas impedit et itaque minus ex ipsam quam et asperiores perferendis qui cupiditate culpa vel recusandae dolorem qui placeat autem. Est earum consequatur et enim magnam ab blanditiis velit.
                                    Lorem ipsum dolor sit amet. Sed dolores nemo qui debitis molestias et asperiores obcaecati et itaque corrupti. Quo quas impedit et itaque minus ex ipsam quam et asperiores perferendis qui cupiditate culpa vel recusandae dolorem qui placeat autem. Est earum consequatur et enim magnam ab blanditiis velit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id='review' className='reviews-wrapper   home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h4>Reviews</h4>
                            <div className='review-inner-wrapper'>
                                <div className='review-head d-flex justify-content-between align-items-center'>
                                    <div>
                                        <h4 className='mb-2'>Customer Review</h4>
                                        <div className='d-flex align-items-center gap-10'>
                                            <ReactStars
                                                starCount={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor='#ffd700' />
                                            <p className='mb-0'>
                                                Based on 2 Reviews
                                            </p>
                                        </div>
                                    </div>
                                    {/* {orderedProduct && (
                                        <div>
                                            <Link className='text-dark text-decoration-underline ' href=''>Write a Review</Link>
                                        </div>
                                    )} */}
                                </div>
                                <div className='review-form py-4'>
                                    <h4>Write a Review</h4>
                                    <form action='' className='d-flex flex-column gap-15' >
                                        <div>
                                            <ReactStars
                                                starCount={5}
                                                size={24}
                                                value={3}
                                                edit={true}
                                                activeColor='#ffd700' />
                                        </div>
                                        <div>
                                            <textarea className='w-100 form-control' name='' id='' placeholder='Comment' cols={30} rows={4} />
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <button className='button border-0'>Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                <div className='reviews mt-4'>
                                    <div className='review'>
                                        <div className='d-flex gap-10 align-items-center'>
                                            <h6 className='mb-0'>Rosia</h6>
                                            <ReactStars
                                                starCount={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor='#ffd700' />
                                        </div>
                                        <p className='mt-3'>Lorem ipsum dolor sit amet. Sed dolores nemo qui debitis molestias et asperiores obcaecati et itaque corrupti. Quo quas impedit et itaque minus ex ipsam quam et asperiores perferendis qui cupiditate culpa vel recusandae dolorem qui placeat autem. </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className='popular-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading d-flex flex-wrap'>
                                Our Popular Products
                            </h3>
                        </div>
                    </div>
                    <div className='row'>

                        <ProductCard />
                        <ProductCard />
                        <ProductCard />

                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct

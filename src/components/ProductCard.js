import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import ReactStarts from 'react-rating-stars-component'
const ProductCard = (props) => {
    const { grid } = props;
     console.log(grid);
    let location = useLocation();
    return (
        <>
            <div className={`${location.pathname ==='/product' ? `gr-${grid}` : 'col-2'}`}>
                <Link to='/:id' className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <Link>
                            <img src='images\wish.svg' alt='wishlist' />
                        </Link>
                    </div>
                    <div className='product-image'>
                        <img src='images\watch1.jpg' className='img-fluid' alt='' />
                        <img src='images\watch2.jpg' className='img-fluid' alt='' />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>Havels</h6>
                        <h5 className='product-title'>
                            Lorem ipsum dolor sit amet. Est quasi...
                        </h5>
                        <ReactStarts
                        
                        starCount={5} size={24} value={3} edit={false} activeColor='#ffd700' />
                    
                        <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <p className='price'>$100.00</p>

                    </div>
                    <div className='action-bar position-absolute'>

                        <div className='d-flex flex-column gap-15'>
                            <Link>
                                <img src='images\prodcompare.svg' alt='compare' />
                            </Link>
                            <Link>
                                <img src='images\view.svg' alt='view' />
                            </Link>
                            <Link>
                                <img src='images\add-cart.svg' alt='addcart' />
                            </Link>

                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname === '/product' ? `gr-${grid}` : 'col-2'}`}>
                <Link to='/:id' className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute'>
                        <Link>
                            <img src='images\wish.svg' alt='wishlist' />
                        </Link>
                    </div>
                    <div className='product-image'>
                        <img src='images\watch1.jpg' className='img-fluid' alt='' />
                        <img src='images\watch2.jpg' className='img-fluid' alt='' />
                    </div>
                    <div className='product-details'>
                        <h6 className='brand'>Havels</h6>
                        <h5 className='product-title'>
                            Lorem ipsum dolor sit amet. Est quasi...
                        </h5>
                        <ReactStarts
                            starCount={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor='#ffd700'
                        />
                        <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                        <p className='price'>$100.00</p>

                    </div>
                    <div className='action-bar position-absolute'>

                        <div className='d-flex flex-column gap-15'>
                            <Link>
                                <img src='images\prodcompare.svg' alt='compare' />
                            </Link>
                            <Link>
                                <img src='images\view.svg' alt='view' />
                            </Link>
                            <Link>
                                <img src='images\add-cart.svg' alt='addcart' />
                            </Link>

                        </div>
                    </div>
                </Link>
            </div>
            
            


        </>
    )
}

export default ProductCard
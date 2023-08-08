import React from 'react'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
import Banner from '../components/Home/Banner'
import Categories from '../components/Home/Categories'
import MarqueeBrand from '../components/Home/MarqueeBrand'
const Home = () => {
  return (
    <>
      {/* Banner */}
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <Banner />
        </div>
      </section>

      {/* Service */}
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='service d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images\service.png' alt='services' />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders over $5</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images\service-02.png' alt='services' />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save upto 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images\service-03.png' alt='services' />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images\service-04.png' alt='services' />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Fact Default Price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src='images\service-05.png' alt='services' />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'> 100% Protected Payment</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* catogories */}
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <Categories />
        </div>
      </section>

      {/* phần sp nổi bật */}
      <section className='featured-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading '>
                Featured Collection
              </h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />

          </div>
        </div>
      </section>

      {/*  */}
      <section className='famous-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img className='img-fluid' src=' images\mig.jpg' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/mo for 24 mo</p>
                </div>
              </div>

            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img className='img-fluid' src=' images\mig.jpg' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/mo for 24 mo</p>
                </div>
              </div>

            </div><div className='col-3'>
              <div className='famous-card position-relative'>
                <img className='img-fluid' src=' images\mig.jpg' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/mo for 24 mo</p>
                </div>
              </div>

            </div><div className='col-3'>
              <div className='famous-card position-relative'>
                <img className='img-fluid' src=' images\mig.jpg' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/mo for 24 mo</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* sp đặc biệt */}
      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row '>
            <div className='col-12'>
              <h3 className='section-heading'>Special Product</h3>
            </div>
            <div className='row d-flex '>
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>
        </div>
      </section>

      {/* phần sp phổ biến */}
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
            <div className='col-2  d-flex'>
              <div className='card'>
                <p><img src='images\watch.jpg' alt='' />Smart Watch</p>
                <p><img src='images\speaker.jpg' alt='' />Speaker</p>
                <p><img src='images\laptop.jpg' alt='' />Laptops</p>


              </div>
            </div>
            <div className='col-2 d-flex'>
              <div className='famous-card position-relative d-flex'>
                <img className='img-fluid' src=' images\mig.jpg' alt='famous' />
                <div className='famous-content position-absolute'>
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $16.62/mo for 24 mo</p>
                </div>
              </div>
            </div>
            <ProductCard />
            <ProductCard />

          </div>
        </div>
      </section>

      {/* dòng brand chạy */}
      <section className='marquee-inner-wrapper py-5'>
        <div className='container-xxl'>
          <MarqueeBrand />
        </div>
      </section>
      {/* phần blog */}
      <section className='blog-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>
                Our Latest Blogs
              </h3>
            </div>
            <div className='row'>
              <div className='col-3'>
                <BlogCard />
              </div>
              <div className='col-3'>
                <BlogCard />
              </div>
              <div className='col-3'>
                <BlogCard />
              </div>
              <div className='col-3'>
                <BlogCard />
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default Home
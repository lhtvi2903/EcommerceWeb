import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import NumericInput from "react-numeric-input";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <div className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <div className="col-4">Product</div>
                <div className="col-2">Price</div>
                <div className="col-3">Quantity</div>
                <div className="col-3">Total</div>
              </div>
              <div className="cart-data py-3 mb-2 d-flex align-items-center">
                <div className="col-4 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img src="images\watch2.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="w-70 d-fle">
                    <p>Watch</p>
                    <p> Size: S</p>
                    <p>Color: Red</p>
                  </div>
                </div>
                <div className="col-2">
                  <h5 className="price">$ 100</h5>
                </div>
                <div className="col-3 d-flex align-items-center gap-15">
                  <div className="add-num">
                    <NumericInput
                      type='number'
                      mobile
                      value={ 1 } 
                      min={1}
                      max={10}
                      className='form-control'
                      style={{ width: '70px' }}

                      id=''

                    />
                  </div>
                  <div>
                    <span className="badge rounded-circle p-1 bg-secondary"><AiFillDelete /></span>
                  </div>
                </div>
                <div className="col-3">
                  <h5 className="price">$ 100</h5>
                </div>
              </div>
              <div className="col-12 py-2 mt-4">
                <div className="d-flex justify-content-between align-items-baseline">
                  <Link to="/product" className="button">
                    Continue To Shopping
                  </Link>
                  <div className="d-flex flex-column align-items-end">
                    <h4>SubTotal: $ 1000</h4>
                    <p>Taxes and shipping calculated at checkout</p>
                    <Link to="/checkout" className="button">
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

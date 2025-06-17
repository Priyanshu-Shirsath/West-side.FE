import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';

const Description = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    axios
      .get(`https://west-side-db-1.onrender.com/product/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [id]);

  const addToCart = () => {
    axios
      .post("https://west-side-db-1.onrender.com/cart", {
        productId: id,
        quantity: 1, // Adjust quantity as needed
        image: data.image && data.image[0],
        title: data.name,
        price: data.price
      })
      .then((res) => {
        alert("Product added to cart!");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to add product to cart");
      });
  };

  return (
    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col-12 d-flex justify-content-between flex-column flex-lg-row">
          <div className="col-12 col-lg-6">
            <ul className="d-flex list-unstyled">
              <li>
                <div className="col-12 ps-2 pe-0">
                  {data.image && data.image[0] && (
                    <img src={data.image[0]} alt="" className="img-fluid" />
                  )}
                </div>
              </li>
              <li>
                <div className="col-12 ps-2 pe-0">
                  {data.image && data.image[1] && (
                    <img src={data.image[1]} alt="" className="img-fluid" />
                  )}
                </div>
              </li>
            </ul>
            <ul className="d-flex list-unstyled">
              <li>
                <div className="col-12 ps-2 pe-0">
                  {data.image && data.image[1] && (
                    <img src={data.image[1]} alt="" className="img-fluid" />
                  )}
                </div>
              </li>
              <li>
                <div className="col-12 ps-2 pe-0">
                  {data.image && data.image[0] && (
                    <img src={data.image[0]} alt="" className="img-fluid" />
                  )}
                </div>
              </li>
            </ul>
          </div>

          <div className="col-12 col-lg-6 mt-5 p-2 ">
            <div>
              <h6 className="fw-bold">{data.brand}</h6>
              <h3 className="fw-normal">{data.name}</h3>
              <p style={{ color: "red" }}>
                {data.price} <span style={{ color: "gray" }}> MRP incl. of all taxes</span>
              </p>
            </div>
            <hr />
            <div>
              <h6>Size</h6>
              <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-between", width: "40%", padding: "0px" }}>
                {data.sizes && data.sizes.map((size, index) => (
                  <li key={index}><button style={{ border: "none", padding: "5px 15px" }}>{size}</button></li>
                ))}
              </ul>
            </div>
            <h5 style={{color: "green" }}>Go Green! Returns available only at Westside stores</h5>
            <br />
            <Link to={"/Cart"}> <button
              onClick={addToCart}
              style={{ padding: "10px 20px", outline: "none", border: "none", backgroundColor: "black", color: "white", marginBottom: "30px" }}
            >
              ADD TO BAG
            </button></Link>

            <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-between", width: "100%" }} className="p-0 p-lg-4">
              <li>
                <div style={{ textAlign: "center" }}>
                  <img src="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/shipped.svg?v=1705641844" style={{ width: "50%" }} alt="" />
                  <h6>Free Shipping</h6>
                </div>
              </li>
              <li>
                <div style={{ textAlign: "center" }}>
                  <img src="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/delivery-status.svg?v=1705641828" style={{ width: "50%" }} alt="" />
                  <h6>Easy Returns</h6>
                </div>
              </li>
              <li>
                <div style={{ textAlign: "center" }}>
                  <img src="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/clean-clothes_1.svg?v=1705641826" style={{ width: "50%" }} alt="" />
                  <h6>Fresh Fashion</h6>
                </div>
              </li>
            </ul>

            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Product Details and Overview</Accordion.Header>
                <Accordion.Body style={{ backgroundColor: "#fafafa" }}>
                SKU: 300965263001 <br />
                Description: Joggers <br />
                Dimensions: 74cm <br />
                Fashionably embrace comfort with the Studiofit joggers in chic green, a true vogue statement. Its elastic mid-waistband, ankle cuffs, drawstrings, pockets, and self-pattern make it a must-have for your fashion-forward wardrobe. Pair it effortlessly with a fitted tee and sneakers for a chic and laid-back look. <br />
                Net Quantity: 1N <br />
                Waist Rise: Mid Rise <br />
                Fit: Regular Fit <br />
                Care Instruction: Machine Wash <br />
                Fabric Composition: 100% Cotton <br />
                Model Fit: The model is 5'9" feet and wearing a size <br />
                Manufactured and Marketed By: <br />
                Trent Limited, Bombay House, 24, Homi Mody Street, Fort, Mumbai – 400001 <br />
                Country Of Origin: India
                 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Delivery & Return</Accordion.Header>
                <Accordion.Body style={{ backgroundColor: "#fafafa" }}>
                TERMS & CONDITIONS <br />
                PRIVACY POLICY <br />
                Contact Us <br />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Contact Us</Accordion.Header>
                <Accordion.Body style={{ backgroundColor: "#fafafa" }}>
                7506401234, 18002099901 <br />
                Timings - 9 am to 8 pm (Operational all days) <br />
                <h6>westside@trent-tata.com</h6>
                For Customer Complaints, write to: Incharge, Trent Limited, Bombay House, 24, Homi Mody Street, Fort, Mumbai – 400001 <br />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;

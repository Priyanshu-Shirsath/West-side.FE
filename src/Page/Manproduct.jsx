import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Manproduct = () => {
    const [manproduct, setManproduct] = useState([]);

    const manproductdata = () => {
        axios
            .get('https://west-side-db-1.onrender.com/product', {
                params: {
                    category: "Men"
                }
            })
            .then((res) => setManproduct(res.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        manproductdata();
    }, []);

    return (
        <div className="container mt-4" style={{backgroundColor:"white"}}>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        {manproduct.map((e) => (
                            <div key={e.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                                <div className="manproduct-item">
                                    <Link to={`/Description/${e.id}`}>
                                        {localStorage.setItem("endpoint", "Manproduct")}
                                        <img src={e.image[0]} alt="" className="product-image img-fluid" />
                                    </Link>
                                    <div className="manproduct-details mt-2">
                                        <h6 className="product-category">{e.category}</h6>
                                        <h6 className="product-price">{e.price}</h6>
                                        <h6 className="product-name">{e.name}</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manproduct;

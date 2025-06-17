import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Suits = () => {
    const [suits, setsuits] = useState([]);

    const suitsdata = () => {
        axios.get('https://west-side-db-1.onrender.com/product', {
            params: {
                category: "suits"
            }
        })
            .then((res) => setsuits(res.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        suitsdata();
    }, []);

    return (
        <div className="container mt-4" style={{ backgroundColor: "white" }}>
            <div className="row">
                {suits.map((e) => (
                    <div key={e.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 ">
                        <div className="suits-item card h-100">
                            <Link to={`/Description/${e.id}`} className="suits-link">
                                {localStorage.setItem("endpoint", "suits")}
                                <img src={e.image[0]} alt="" className="suits-image card-img-top" />
                            </Link>
                            <div className="card-body">
                                <h6 className="suits-category card-title">{e.category}</h6>
                                <h6 className="suits-price card-text">{e.price}</h6>
                                <h6 className="suits-name card-text">{e.name}</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Suits;



import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Homes = () => {
    const [homes, setHomes] = useState([]);

    const homesData = () => {
        axios
            .get('https://west-side-db-1.onrender.com/product', {
                params: {
                    category: "homes"
                }
            })
            .then((res) => setHomes(res.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        homesData();
    }, []);

    return (
        <div className="container mt-4" style={{ backgroundColor: "white" }}>
            <div className="row">
                {homes.map((e) => (
                    <div key={e.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="homes-item card h-100">
                            <Link to={`/Description/${e.id}`} onClick={() => localStorage.setItem("endpoint", "homes")} className="homes-link">
                                <img src={e.image} alt={e.name} className="homes-image card-img-top" />
                            </Link>
                            <div className="card-body">
                                <h6 className="homes-category card-title">{e.category}</h6>
                                <h6 className="homes-price card-text">{e.price}</h6>
                                <h6 className="homes-name card-text">{e.name}</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Homes;

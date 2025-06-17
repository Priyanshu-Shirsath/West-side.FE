 import axios from 'axios';
 import React, { useEffect, useState } from 'react';
 import { Link } from 'react-router-dom';


 const Product = () => {
   const [product, setProduct] = useState([]);
     const productdata = () => {
     axios
       .get('https://west-side-db-1.onrender.com/product', {
        params: {
           category: 'Women',
         },
       })
       .then((res) => setProduct(res.data))
       .catch((err) => console.log(err));
   };

   useEffect(() => {
     productdata();
   }, []);

   return (
     <div className="container mt-4" style={{backgroundColor:"white"}}>
       <div className="row">
         <div className="col-12">
           <div className="product-grid">
             {product.map((e) => (
               <div key={e.id} className="product-item">
                 <Link to={`/Description/${e.id}`}>
                   {localStorage.setItem('endpoint', 'product')}
                   <img src={e.image[0]} alt="" className="product-image" />
                 </Link>
                 <h6 className="product-brand">{e.brand}</h6>
                 <h6 className="product-price">{e.price}</h6>
                 <span className="product-name">{e.name}</span>
               </div>
             ))}
           </div>
         </div>
       </div>
     </div>
   );
   };
   export default Product
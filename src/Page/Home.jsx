import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [index, setIndex] = useState(0);
  const [home_index, sethome_index] = useState(0)
  const [home_data, sethome_data] = useState(0);
  // const [home_feature,setfeature]=useState(0)
  const [home_feature_data, setfeature_data] = useState(0)
  const [home_feature_data1, setfeature_data1] = useState(0)
  const [data, setdata] = useState([]);

  const fetchdata = () => {
    axios
      .get("https://west-side-db-1.onrender.com/images")
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const handleSelectimaeg = (selectedIndex) => {
    sethome_index(selectedIndex);
  };
  const handledata = (selectedIndex) => {
    sethome_data(selectedIndex);
  };
  // const handleimage = (selectedIndex) => {
  //   setfeature(selectedIndex);
  // };
  const handleimagedata = (selectedIndex) => {
    setfeature_data(selectedIndex);
  };
  const handleimagedata1 = (selectedIndex) => {
    setfeature_data1(selectedIndex);
  };

  return (
    <div>
      {data.map((e) => (
        <div key={e.id}>
          <section>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 p-0">
                  <Link to={"/product"}><Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                      <img src={e.image[0]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[1]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[2]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[3]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[4]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[5]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[6]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[7]} alt="" className="img-fluid" />

                    </Carousel.Item>
                  </Carousel></Link>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 p-0">
                  <Link to={"/manproduct"}> <Carousel activeIndex={home_index} onSelect={handleSelectimaeg}>

                    <Carousel.Item>
                      <img src={e.image[8]} alt="" className="img-fluid" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[9]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[10]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[11]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[12]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[13]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[14]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[15]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[16]} alt="" className="img-fluid" />

                    </Carousel.Item>
                  </Carousel></Link>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container-fluid">
              <div className="row">

                <Link to={"/suits"}><Carousel activeIndex={home_data} onSelect={handledata}> 
                    <Carousel.Item>
                      <img src={e.image[17]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[18]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[19]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[20]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[21]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[22]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[23]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[24]} alt="" className="img-fluid" />

                    </Carousel.Item>
                  </Carousel> 
                </Link>
              </div>
            </div>
          </section>
          {/* <section>
                 <div className="container-fluid">
                <div className="row">
                <Carousel activeIndex={home_feature} onSelect={handleimage}>
                 
                </Carousel>
                </div>
                </div>
                </section> */}
          <section>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 p-0">
                  <Carousel activeIndex={home_feature_data} onSelect={handleimagedata}>
                    <Carousel.Item>
                      <img src={e.image[25]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[26]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[27]} alt="" className="img-fluid" />

                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 p-0">
                  <Link to={"/homes"}>
                  <Carousel activeIndex={home_feature_data1} onSelect={handleimagedata1}>
                    <Carousel.Item>
                      <img src={e.image[28]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[29]} alt="" className="img-fluid" />

                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={e.image[30]} alt="" className="img-fluid" />

                    </Carousel.Item>
                  </Carousel></Link>
                </div>
              </div>

            </div>
          </section>
        </div>
      ))}

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0 m-0">
            <img src="https://www.westside.com/cdn/shop/files/WS_Web_Hero_Banner_04_2945ec97-3eb4-4ddd-a080-a58c64aac7d1.jpg?v=1697194912" alt="" style={{ height: "600px", width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

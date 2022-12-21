import React from "react";
import { Card } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
function Homepage() {
  const photoData = useSelector((state) => state.homeReducer.photo);
  const { Meta } = Card;

  return (
    <div>
      <Helmet>
        <title>Anasayfa</title>
      </Helmet>
      <Navbar></Navbar>
      <h1 className="anasayfabaslik">BLOG HABERLERİ</h1>
      <h2 className="anasayfaaltbaslik">
        Blog haber, Blog son dakika haberleri ve gelişmeleri
      </h2>
      <div className="site-card-wrapper">
        {photoData.length > 0 &&
          photoData.slice(4980).map((photo) => (
            <Card
              key={photo.id}
              className="card1"
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <Link to={"/detail/" + photo.id}>
                  <img className="anasayfafoto" alt="example" src={photo.url} />
                </Link>
              }
            >
              <Meta
                className="anasayfafotobaslik"
                title={photo.title.slice(0, 20)}
              />
            </Card>
          ))}
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Homepage;



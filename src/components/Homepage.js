import React from "react";
import { Card } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function Homepage() {
  const photoData = useSelector((state) => state.homeReducer.photo);
  const { Meta } = Card;

  document.title = "Anasayfa";
  return (
    <div>
      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
        BLOG HABERLERİ
      </h1>
      <h2 style={{ textAlign: "center" }}>
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
                  <img
                    style={{ borderRadius: "10px", width: "240px" }}
                    alt="example"
                    src={photo.url}
                  />
                </Link>
              }
            >
              <Meta
                style={{ display: "flex", justifyContent: "center" }}
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



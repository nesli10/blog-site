import React from "react";
import { Card } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
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
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <h4>HABERLER</h4>
              <ul>
                <li>
                  <a href="">Canlı Yayın</a>
                </li>
                <li>
                  <a href="">Son Dakika</a>
                </li>
                <li>
                  <a href="">Dünya</a>
                </li>
                <li>
                  <a href="">Spor</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>KATEGORİLER</h4>
              <ul>
                <li>
                  <a href="">Hava Durumu</a>
                </li>
                <li>
                  <a href="">Video</a>
                </li>
                <li>
                  <a href="">Döviz</a>
                </li>
                <li>
                  <a href="">Altın</a>
                </li>
                <li>
                  <a href="">Astroloji</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>TV PROGRAMLARI</h4>
              <ul>
                <li>
                  <a href="">A'dan Z'ye</a>
                </li>
                <li>
                  <a href="">Güne Merhaba</a>
                </li>
                <li>
                  <a href="">Gündem</a>
                </li>
                <li>
                  <a href="">Bugün</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>bizi takip edin</h4>
              <div class="social-links">
                <a href="https://www.instagram.com/cnnturk/">
                  <InstagramOutlined />
                </a>
                <a href="">
                  <FacebookOutlined />
                </a>
                <a href="">
                  <TwitterOutlined />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Homepage;



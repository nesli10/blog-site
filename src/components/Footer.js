import React from "react";
import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

export default function Footer() {
  return (
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
  );
}

import React from "react";
import { Card, Table } from "antd";
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
  const columns = [
    {
      title: "haber",
      dataIndex: "name",
      key: "name",
      render: (text) => <a style={{ color: "black" }}>{text}</a>,
    },
    {
      title: "son dakika",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "magazin",
      dataIndex: "address",
      key: "address",
    },
  ];
  const data = [
    {
      key: "1",
      name: "spor",
      age: "sağlık",
      address: "magazin",
    },
    {
      key: "2",
      name: "teknoloji",
      age: "hava durumu",
      address: "finans",
    },
    {
      key: "3",
      name: "turizm",
      age: "tuğba ünsal",
      address: "cansu dere",
    },
  ];
  document.title = "Anasayfa";
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <h3>Bizi Takip Edin !</h3>
        <InstagramOutlined
          style={{
            fontSize: "20px",
          }}
        />
        <FacebookOutlined
          style={{
            fontSize: "20px",
          }}
        />
        <TwitterOutlined
          style={{
            fontSize: "20px",
          }}
        />
      </div>

      <h1 style={{ position: "relative", left: "110px" }}>BLOG HABERLERİ</h1>
      <h2 style={{ position: "relative", left: "110px" }}>
        Blog haber, Blog son dakika haberleri ve gelişmeleri.
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
              cover={<img alt="example" src={photo.url} />}
            >
              <Meta title={photo.title.slice(0, 20)} />
              <Link
                style={{ color: "blue", padding: "170px" }}
                to={"/detail/" + photo.id}
              >
                detay
              </Link>
            </Card>
          ))}
      </div>

      <Table
        style={{ position: "relative", left: "150px", bottom: "40px" }}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
    </div>
  );
}
export default Homepage;


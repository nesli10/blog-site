import React, { useState } from "react";
import { Card } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
import ReactPaginate from "react-paginate";
function Homepage() {
  const photoData = useSelector((state) => state.homeReducer.photo);
  const { Meta } = Card;
  const [itemOffset, setItemOffset] = useState([]);
  const itemsPerPage = 40;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = photoData.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(photoData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % photoData.length;
    setItemOffset(newOffset);
  };

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
        {currentItems.length > 0 &&
          currentItems.map((photo) => (
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
      <div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Homepage;



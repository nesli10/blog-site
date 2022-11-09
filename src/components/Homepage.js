import React from "react";
import { Card } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../redux/actions";
import {Link} from "react-router-dom";


function Homepage() {
  const photoData = useSelector((state) => state.photo);
  const dispatch = useDispatch();
  const { Meta } = Card;

  useEffect(() => {
    const getNews = async function () {
        dispatch(Actions.homePageActions.setNews());
      
    };
    getNews();
  }, [dispatch]);

  return (
    <div className="site-card-wrapper">
      {photoData.length > 0 &&
       photoData.filter((obj) => 101 > obj.id).map((photo) => (
        
              <Card key={photo.id} className="card1"
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src={photo.url} />}
              >
                <Meta title={photo.title.slice(0,20)} />
                <Link style={{color: "blue",padding:"170px"}} to={"/detail/"+photo.id}>detay</Link>
              </Card>
       
        ))}
    </div>
  );
}
export default Homepage;

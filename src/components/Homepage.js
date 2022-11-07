import React from "react";
import { Card } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Actions from "../redux/actions";

function Homepage() {
  const photoData = useSelector((state) => state.photo);
  const dispatch = useDispatch();
  const { Meta } = Card;

  useEffect(() => {
    const getNews = async function () {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        dispatch(Actions.homePageActions.setNews(data));
      } catch (err) {}
    };
    getNews();
  }, [dispatch]);

  return (
    <div className="site-card-wrapper">
      {photoData.length > 0 &&
       photoData.filter((obj) => 100 > obj.id).map((photo) => (
              <Card className="card1"
                hoverable
                style={{
                  width: 240,
                }}
                cover={<img alt="example" src={photo.url} />}
              >
                <Meta title={photo.title} />
              </Card>
       
        ))}
    </div>
  );
}
export default Homepage;

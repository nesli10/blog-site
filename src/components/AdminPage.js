import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "antd";
import Actions from "../redux/actions";
import alertify from "alertifyjs";

function AdminPage() {
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
        photoData
          .filter((obj) => 101 > obj.id)
          .map((photo) => (
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
              <Button style={{
                left:"160px"
              }}  type="primary" danger > x</Button>
            </Card>
          ))}
    </div>
  );
}

export default AdminPage;

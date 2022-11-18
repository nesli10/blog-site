import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../redux/actions";
import { Button, Card } from "antd";
import alertify from "alertifyjs";
import AddModal from "../AddModal";

function AdminPage() {
  const photoData = useSelector((state) => state.homeReducer.photo);
  const dispatch = useDispatch();
  const { Meta } = Card;

  const removePhoto = (id) => {
    dispatch(Actions.homePageActions.deleteNews(id));
    alertify.error("silindi")
  };
  return (
    <div>
     <AddModal></AddModal>
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
                <Button
                  onClick={() => removePhoto(photo.id)}
                  style={{
                    left: "170px",
                    top: "20px",
                  }}
                  type="primary"
                  danger
                >
                  {" "}
                  x
                </Button>
                <Button
                  style={{
                    right: "60px",
                    top: "20px",
                  }}
                  type="primary"
                >
                  {" "}
                  Düzenle
                </Button>
              </Card>
            ))}
      </div>
    </div>
  );
}

export default AdminPage;

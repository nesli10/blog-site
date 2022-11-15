import { Button } from "antd";
import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Card } from "antd";
import Actions from "../redux/actions";
import { useNavigate } from "react-router-dom";

function AdminPage() {
   const navigate = useNavigate();
   const loginData = useSelector((state) => state.login);
   const handleLogout = () => {
   loginData.token = "";
     navigate("/loginpage");
     document.getElementById("gizlebeni").style.display = 'none';
   };
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
       <Button id="gizlebeni"
        style={{
          position: "relative",
          left: "1200px",
          bottom: "60px",
        }}
        onClick={handleLogout} 
      >
        logout
      </Button> 
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
            </Card>
          ))}
    </div>
  );
}

export default AdminPage;

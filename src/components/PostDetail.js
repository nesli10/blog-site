import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "antd";
import { useSelector } from "react-redux";
const PostDetail = () => {
  const { photoId } = useParams();
  const photo = useSelector((state) => state.homeReducer.photo);
  const currentPhoto = photo.find((p) => p.id == photoId);
  const { Meta } = Card;
  document.title = "Detay Sayfası";
  return (
    <div>
      <div className="site-card-wrapper2">
        <Card
          className="detailcard"
          key={currentPhoto.id}
          hoverable
          style={{
            width: "650px",
            borderRadius: "30px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
          cover={
            <img
              style={{
                height: "350px",
                borderRadius: "30px",
              }}
              alt="example"
              src={currentPhoto.url}
            />
          }
        >
          <Meta
            style={{
              position: "relative",
              left: "60px",
            }}
            title={currentPhoto.title}
          />
        </Card>
      </div>
      <div className="detayYazı">
        <p className="detayBaslık">What is Lorem Ipsum?</p>
        <p style={{ width: "450px", marginInline: "auto" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like).Where can I get
          some? There are many variations of passages of Lorem Ipsum available,
          but the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
    </div>
  );
};

export default PostDetail;

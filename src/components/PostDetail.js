import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from "antd";
import { useSelector } from 'react-redux';
const PostDetail = () => {
  const {photoId} = useParams()
  const photo =  useSelector(state=>state.homeReducer.photo)
  const currentPhoto = photo.find(p=>p.id == photoId)
  const { Meta } = Card;
  return (
    <div className="site-card-wrapper" >
            <Card key={currentPhoto.id} className="card1"
              hoverable
              style={{
                width: 350,
                position:'relative',
                left:"370px"
               
                
              }}
              cover={<img alt="example" src={currentPhoto.url} />}
            >
              <Meta title={currentPhoto.title} />
            </Card>
  </div>
  )
}

export default PostDetail;


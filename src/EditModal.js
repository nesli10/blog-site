import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Actions from "./redux/actions";
import { Button, Modal, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import alertify from "alertifyjs";
const EditModal = ({ oldPhoto }) => {
  const dispatch = useDispatch();

  const handleUpdate = (values) => {
    const { title, thumbnailUrl } = values;
    const updatedUser = {
      title,
      thumbnailUrl: thumbnailUrl[0].thumbUrl,
      id: oldPhoto.id,
    };
    if (title === undefined) {
      updatedUser.title = oldPhoto.title;
    }
    dispatch(Actions.homePageActions.editNews(updatedUser));
     setIsModalOpen(false);
    alertify.success("güncellendi");
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <>
      <Button
        style={{
          right: "60px",
          top: "20px",
        }}
        type="primary"
        onClick={showModal}
      >
        düzenle
      </Button>
      <Modal
        title="düzenle"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          name="nest-messages"
        
          onFinish={handleUpdate}
        >
          <Form.Item name="title" label="Title">
            <Input name="title" defaultValue={oldPhoto.title}  />
          </Form.Item>
          <Form.Item
            name="thumbnailUrl"
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              name="thumbnailUrl"
              action="/upload.do"
              listType="picture"
              defaultFileList={[
                {
                  uid: oldPhoto.id,
                  name: oldPhoto.title,
                  status: "done",
                  url: oldPhoto.thumbnailUrl,
                },
              ]}
            >
              <Button icon={<UploadOutlined />} upload>
                {" "}
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              span: 16,
              offset: 8,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default EditModal;

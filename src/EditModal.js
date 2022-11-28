import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Actions from "./redux/actions";
import { Button, Modal, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import alertify from "alertifyjs";
const EditModal = ({oldPhoto}) => {
  const dispatch = useDispatch();
  const handleUpdate = (values) => {
    const { title, thumbUrl } = values;
    const updatedUser = {
      title,
      thumbUrl: thumbUrl[0].thumbUrl,
      id: oldPhoto.id,
    };
    dispatch(Actions.homePageActions.editNews(updatedUser));
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

  const validateMessages = {
    required: "${label} is required!",
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
          validateMessages={validateMessages}
          onFinish={handleUpdate}
        >
          <Form.Item name="title" label="Title">
            <Input />
          </Form.Item>
          <Form.Item
            name="thumbUrl"
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="photo"
          >
            <Upload
              multiple={false}
              name="thumbUrl"
              action="/upload.do"
              listType="picture"
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
            <Button
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default EditModal;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Actions from "./redux/actions";
import alertify from "alertifyjs";
const AddModal = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    const { title, photo } = values;
    dispatch(
      Actions.homePageActions.addNews({
        title,
        photo: photo[0],
        newDate: ( Number(new Date())),
      })
    );
    form.resetFields();
    setIsModalOpen(false);
    alertify.success("eklendi");
    
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
          top: "10px",
          left: "60px",
        }}
        type="primary"
        onClick={showModal}
      >
        Ekle
      </Button>
      <Modal
        title="Add News"
        open={isModalOpen}
        onOk={handleCancel}
        onCancel={handleCancel}
      >
        <Form
        form={form}
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item name="title" label="Title">
            <Input  />
          </Form.Item>
          <Form.Item
            name="photo"
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            extra="photo"
          >
            <Upload
              multiple={false}
              name="logo"
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
            <Button  type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddModal;


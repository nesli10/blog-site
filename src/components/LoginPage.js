import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
//import Actions from "../redux/actions";
//import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoogleOutlined } from "@ant-design/icons";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";

const LoginPage = () => {
  //const dispatch = useDispatch();
  //const loginData = useSelector((state) => state.login);

  // const onFinish = (values) => {
  //   // betul.aydemir@mahrek.com.tr
  //   // 123

  //   dispatch(
  //     Actions.loginPageActions.setLogin({
  //       email: values.email,
  //       password: values.password,
  //     })
  //   );
  // };
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(false);
  const onFinish = () => {
    setAdmin(true);
  };
  useEffect(() => {
    if (admin) {
      navigate("/adminpage");
    }
  }, [admin]);

  // useEffect(() => {
  //   if (loginData.token) {
  //     navigate("/adminpage");
  //   }
  // }, [loginData]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login">
      <Helmet>
        <title>Giriş Sayfası</title>
      </Helmet>
      <Navbar></Navbar>
      <h1 className="loginbaslik">GİRİŞ SAYFASI</h1>
      <Form
        className="loginform"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="loginitem">
          <Form.Item
            wrapperCol={{
              offset: 10,
              span: 16,
            }}
          >
            <Button className="googlebuton" type="primary">
              <GoogleOutlined />
              Google ile giriş yap
            </Button>
          </Form.Item>
          <Form.Item
            label="email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;

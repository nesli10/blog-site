import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
//import Actions from "../redux/actions";
//import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoogleOutlined } from '@ant-design/icons';


const LoginPage = () => {
  document.title = "Giriş Sayfası"
  //const dispatch = useDispatch();
  const navigate = useNavigate();
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
   const [admin,setAdmin] =useState(false);
    const onFinish = ()=>{
      setAdmin(true);
    }
   useEffect(() =>{
    if(admin){
      navigate("/adminpage")
    }
    },[admin] );
  
  // useEffect(() => {
  //   if (loginData.token) {
  //     navigate("/adminpage");
  //   }
  // }, [loginData]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
 

  return (
    <div>
    <h1 className="loginbaslik">GİRİŞ SAYFASI</h1>
    <Form
      className="login"
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
      <Form.Item
        wrapperCol={{
          offset: 10,
          span: 16,
        }}
      >
        <Button  type="primary"
        style={{
              borderRadius: "20px",
              marginRight: "3rem",
            }}
        >
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
        <Button   type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default LoginPage;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Actions from "../redux/actions";
import { Helmet } from "react-helmet";
import { Button, Space, Table, Popconfirm, Layout, Menu } from "antd";
import {
  QuestionCircleOutlined,
  DesktopOutlined,
  UserOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import alertify from "alertifyjs";
import AddModal from "../AddModal";
import EditModal from "../EditModal";
const { Header, Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to="/">ANASAYFA</Link>, "1", <AppstoreOutlined />),
  getItem("haberler", "2", <DesktopOutlined />),
  getItem("kullanıcılar", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
];
const AdminPage = () => {
  const photoData = useSelector((state) => state.homeReducer.photo);
  const dispatch = useDispatch();
  const removePhoto = (id) => {
    dispatch(Actions.homePageActions.deleteNews(id));
    alertify.error("silindi");
  };
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(true);
  const handleLogout = () => {
    setAdmin(false);
    navigate("/loginpage");
  };
  const [collapsed, setCollapsed] = useState(false);

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "başlık",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "fotoğraf",
      dataIndex: "url",
      key: "url",
      render: (url) => <img width="20%" src={url} />,
    },

    {
      title: "işlem",
      render: (photo) => (
        <>
          <Space size="middle">
            <Popconfirm
              title="Are you sure？"
              onConfirm={() => removePhoto(photo.id)}
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            >
              <Button type="primary" danger>
                {" "}
                sil
              </Button>
            </Popconfirm>

            <EditModal oldPhoto={photo} />
          </Space>
        </>
      ),
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Admin Sayfası</title>
      </Helmet>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div
            style={{
              height: 32,
              margin: 16,
              color: "white",
            }}
          >
            <p style={{ textAlign: "center" }}> MENÜ</p>
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={["2"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          <Header className="adminheader" />
          <Content className="admincontent">
            <div
              style={{
                minHeight: 360,
              }}
            >
              <div>
                {admin ? (
                  <Button
                    className="adminbuton"
                    type="primary"
                    onClick={handleLogout}
                  >
                    Çıkış
                  </Button>
                ) : (
                  ""
                )}
              </div>
              <AddModal></AddModal>
              <div>
                <Table
                  className="admintable"
                  columns={columns}
                  dataSource={photoData}
                />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default AdminPage;


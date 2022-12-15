import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Actions from "../redux/actions";
import {
  Button,
  Space,
  Table,
  Popconfirm,
  Breadcrumb,
  Layout,
  Menu,
  theme,
} from "antd";
import {
  QuestionCircleOutlined,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
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
  document.title = "Admin Sayfası";

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
      title: "title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "photo",
      dataIndex: "url",
      key: "url",
      render: (url) => <img width="20%" src={url} />,
    },

    {
      title: "islem",
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
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          style={{ position: "relative", bottom: "1px" }}
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
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            style={{
              padding: 0,
              height: "0px",
            }}
          />
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <div
              style={{
                minHeight: 360,
              }}
            >
              <div>
                {admin ? (
                  <Button
                    type="primary"
                    style={{
                      left: "94%",
                      top: "10px",
                    }}
                    onClick={handleLogout}
                  >
                    logout
                  </Button>
                ) : (
                  ""
                )}
              </div>
              <AddModal></AddModal>
              <div>
                <Table
                  style={{ margin: "50px" }}
                  pagination={false}
                  columns={columns}
                  dataSource={photoData.slice(4980)}
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


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../redux/actions";
import { Button, Space, Table, Popconfirm } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import alertify from "alertifyjs";
import AddModal from "../AddModal";
import EditModal from "../EditModal";

function AdminPage() {
  const photoData = useSelector((state) => state.homeReducer.photo);
  const dispatch = useDispatch();

  const removePhoto = (id) => {
    dispatch(Actions.homePageActions.deleteNews(id));
    alertify.error("silindi");
  };
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
  );
}

export default AdminPage;

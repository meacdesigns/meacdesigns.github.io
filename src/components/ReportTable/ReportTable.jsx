import { Button, Table } from "antd";

const ReportTable = ({ documents, type, onAction, rowKey }) => {
  const columns = [
    {
      title: "#",
      dataIndex: "name",
      render: (value, item, index) => {
        return <>{index + 1}</>;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mobile Number",
      dataIndex: "mobile_number",
      key: "mobile_number",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
    },
    {
      title: "Created On",
      dataIndex: "created_on",
      key: "message",
    },
    {
      title: "Active",
      dataIndex: "created_on",
      render: (_, item) => {
        return (
          <>
            {type === "ACTIVE" && (
              <Button
                onClick={() =>
                  onAction(item.db_id, {
                    active: false,
                  })
                }
              >
                Done
              </Button>
            )}
            {type === "DONE" && (
              <Button
                onClick={() =>
                  onAction(item.db_id, {
                    active: true,
                  })
                }
              >
                Active
              </Button>
            )}
          </>
        );
      },
    },
  ];
  return (
    <Table
      rowKey={rowKey}
      scroll={{ x: 1000 }}
      dataSource={documents}
      columns={columns}
    />
  );
};

export default ReportTable;

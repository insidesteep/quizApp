import { Tabs, Layout, Row, Col, Space, Radio } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Flex from "../../../../components/Flex";
import { ClockCircleOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;
const { Header } = Layout;

const quzzAmount = [];

for (let i = 1; i <= 30; i++) {
  quzzAmount.push(i);
}

const MainPage = () => {
  return (
    <>
      <Header>
        <Flex alignItems="center" justifyContent="space-between">
          <Avatar />
          <p style={{ color: "#fff", margin: 0 }}>Question 1 of 30</p>
          <p style={{ color: "#fff", margin: 0 }}>
            00:55 mins - time taken <ClockCircleOutlined />
          </p>
        </Flex>
      </Header>
      <Row align="center">
        <Col span={24}>
          <Tabs defaultActiveKey="1">
            {quzzAmount.map((q) => (
              <TabPane tab={q} key={q}>
                <div style={{ padding: "0 40rem" }}>
                  <h3 style={{ margin: "5rem 0" }}>Test Question</h3>
                  <Radio.Group optionType="button">
                    <Space direction="vertical">
                      <Radio.Button value={1}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "30px",
                            height: "30px",
                            border: "2px solid #1890ff",
                            borderRadius: "50%",
                          }}
                        >
                          A
                        </div>
                        Answer 1
                      </Radio.Button>{" "}
                      <Radio.Button value={1}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "30px",
                            height: "30px",
                            border: "2px solid #1890ff",
                            borderRadius: "50%",
                          }}
                        >
                          B
                        </div>
                        Answer 2
                      </Radio.Button>{" "}
                      <Radio.Button value={1}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "30px",
                            height: "30px",
                            border: "2px solid #1890ff",
                            borderRadius: "50%",
                          }}
                        >
                          C
                        </div>
                        Answer 3
                      </Radio.Button>{" "}
                      <Radio.Button value={1}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "30px",
                            height: "30px",
                            border: "2px solid #1890ff",
                            borderRadius: "50%",
                          }}
                        >
                          D
                        </div>
                        Answer 4
                      </Radio.Button>
                    </Space>
                  </Radio.Group>
                </div>
              </TabPane>
            ))}
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default MainPage;

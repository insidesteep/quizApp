import { Tabs, Layout, Row, Col, Space, Radio, Button } from "antd";
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
    <div className="test">
      <Header>
        <Flex alignItems="center" justifyContent="space-between">
          <Avatar />
          <p className="test__question-count">
            Question <span style={{ color: "#40a9ff" }}>1</span> of 30
          </p>
          <p className="test__time">
            00:55 mins - time taken{" "}
            <ClockCircleOutlined style={{ color: "#40a9ff" }} />
          </p>
        </Flex>
      </Header>
      <Row align="center">
        <Col span={24}>
          <Tabs defaultActiveKey="1" centered>
            {quzzAmount.map((q) => (
              <TabPane tab={q} key={q}>
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  className="test__contain"
                >
                  <h3 style={{ margin: "5rem 0", color: "#414141" }}>
                    Test Question
                  </h3>
                  <Radio.Group optionType="button">
                    <Space direction="vertical">
                      <Radio.Button value={1}>
                        <div className="test__answer">A</div>
                        Answer 1
                      </Radio.Button>{" "}
                      <Radio.Button value={2}>
                        <div className="test__answer">B</div>
                        Answer 2
                      </Radio.Button>{" "}
                      <Radio.Button value={3}>
                        <div className="test__answer">C</div>
                        Answer 3
                      </Radio.Button>{" "}
                      <Radio.Button value={4}>
                        <div className="test__answer">D</div>
                        Answer 4
                      </Radio.Button>
                    </Space>
                  </Radio.Group>

                  <div style={{ margin: "2rem 0" }}>
                    <Button type="primary">Next</Button>
                  </div>
                </Flex>
              </TabPane>
            ))}
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};

export default MainPage;

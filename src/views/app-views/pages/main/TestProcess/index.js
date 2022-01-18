import { Tabs, Col, Space, Radio, Button } from "antd";
import Flex from "../../../../../components/Flex";

const { TabPane } = Tabs;

const quzzAmount = [];

for (let i = 1; i <= 30; i++) {
  quzzAmount.push(i);
}

const TestProcess = () => {
  return (
    <Col span={24}>
      <Tabs defaultActiveKey="1" centered >
        {quzzAmount.map((q) => (
          <TabPane tab={q} key={q} disabled={q != 2}>
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
  );
};

export default TestProcess;

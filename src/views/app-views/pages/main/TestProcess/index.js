import { Tabs, Col, Space, Radio, Button, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Flex from "../../../../../components/Flex";
import {
  showLoadingNextTest,
  fetchNextTest,
} from "../../../../../redux/actions/question";

const { TabPane } = Tabs;

const quzzAmount = [];

for (let i = 1; i <= 25; i++) {
  quzzAmount.push(i);
}

const TestProcess = () => {
  const [tab, setTab] = useState("1");
  const [value, setValue] = useState(null);
  const { testData } = useSelector((state) => state.question);
  const dispatch = useDispatch();



  
  const handleNextTab = () => {
    const cb = () => {
      setTab("" + (+tab + 1));
      setValue(null);
    };

    if (value) {
      console.log(5555)
      dispatch(showLoadingNextTest());
      dispatch(
        fetchNextTest(
          {
            test_id: testData.data.test_info.id,
            answer_number: value,
          },
          cb
        )
      );
    }
  };

  const handleChangeAnswer = (e) => setValue(e.target.value);

  return (
    <Col span={24}>
      <Tabs activeKey={tab} centered style={{ padding: "0.5rem" }}>
        {quzzAmount.map((q) => (
          <TabPane tab={q} key={q}>
            {testData.data && Object.keys(testData.data).length != 0 && (
              <Flex
                flexDirection="column"
                alignItems="center"
                className="test__contain"
              >
                <h3 style={{ margin: "3rem 0", color: "#414141" }}>
                  {testData.data.test_info.name}
                </h3>
                <Radio.Group optionType="button" onChange={handleChangeAnswer}>
                  <Space direction="vertical">
                    <Radio.Button value={1}>
                      <div className="test__answer">A</div>
                      {testData.data.test_info.answer_1}
                    </Radio.Button>{" "}
                    <Radio.Button value={2}>
                      <div className="test__answer">B</div>
                      {testData.data.test_info.answer_2}
                    </Radio.Button>{" "}
                    <Radio.Button value={3}>
                      <div className="test__answer">C</div>
                      {testData.data.test_info.answer_3}
                    </Radio.Button>{" "}
                    <Radio.Button value={4}>
                      <div className="test__answer">D</div>
                      {testData.data.test_info.answer_4}
                    </Radio.Button>
                  </Space>
                </Radio.Group>

                <div style={{ margin: "2rem 0" }}>
                  <Tooltip title={!value && "Выберите ответ!"}>
                    <Button
                      disabled={!value}
                      loading={testData.loadingNext}
                      type="primary"
                      size="large"
                      onClick={handleNextTab}
                    >
                      {+tab === 25 ? "Finish" : "Next"}
                    </Button>
                  </Tooltip>
                </div>
              </Flex>
            )}
          </TabPane>
        ))}
      </Tabs>
    </Col>
  );
};

export default TestProcess;

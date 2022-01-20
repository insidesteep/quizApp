import { Tabs, Col, Space, Radio, Button, Tooltip, Image } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Flex from "../../../../../components/Flex";
import {
  showLoadingNextTest,
  fetchNextTest,
} from "../../../../../redux/actions/question";
import { API_BASE_URL } from "../../../../../configs/AppConfig";
import IntlMessage from "../../../../../components/IntlMessage";
import AuthLang from "../../../../../configs/LangConfigs/auth";

const { TabPane } = Tabs;

const quzzAmount = [];

for (let i = 1; i <= 25; i++) {
  quzzAmount.push(i);
}

const setLocale = (isLocaleOn, localeKey, values = {}) =>
  isLocaleOn ? <IntlMessage id={localeKey} values={values}/> : localeKey.toString();

const TestProcess = ({ localization = true }) => {
  const [value, setValue] = useState(null);
  const { testData } = useSelector((state) => state.question);
  const dispatch = useDispatch();
  const [tab, setTab] = useState("1");

  useEffect(() => {
    if (testData.data?.number_of_test) {
      setTab("" + testData.data.number_of_test);
    }
  }, [testData.data]);

  const handleNextTab = () => {
    const cb = () => {
      setTab("" + (+tab + 1));
      setValue(null);
    };

    if (value) {
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
      <Tabs
        activeKey={tab}
        centered
        style={{ padding: "0.5rem" }}
        animated
        renderTabBar={(props, DefaultTabBar) => (
          <DefaultTabBar
            {...props}
            className={
              props.activeKey < testData.data?.number_of_test
                ? "question__solved"
                : ""
            }
          />
        )}
      >
        {quzzAmount.map((q) => (
          <TabPane
            tab={q}
            key={q}
            disabled={
              q < testData.data?.number_of_test ||
              q > testData.data?.number_of_test
            }
          >
            {testData.data && Object.keys(testData.data).length != 0 && (
              <Flex
                flexDirection="column"
                alignItems="center"
                className="test__contain"
              >
                <h3 style={{ margin: "2rem 0", color: "#414141", textAlign: "center" }}>
                  {testData.data.test_info?.name}
                </h3>
                <Flex
                  style={{ marginBottom: "2rem" }}
                  flexDirection="column"
                  alignItems="center"
                  className="question__preview-images"
                >
                  {testData.data?.test_info?.img_url_1 && (
                    <Image
                      width={150}
                      src={`/temp/${testData.data.test_info.img_url_1}`}
                    />
                  )}
                  {testData.data?.test_info?.img_url_2 && (
                    <Image
                      width={150}
                      src={`/temp/${testData.data.test_info.img_url_2}`}
                    />
                  )}
                  {testData.data?.test_info?.img_url_3 && (
                    <Image
                      width={150}
                      src={`/temp/${testData.data.test_info.img_url_3}`}
                    />
                  )}
                </Flex>

                <Radio.Group optionType="button" onChange={handleChangeAnswer}>
                  <Space direction="vertical">
                    <Radio.Button value={1}>
                      <div className="test__answer">A</div>
                      <div>{testData.data.test_info.answer_1}</div>
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
                      {+tab === 25
                        ? setLocale(localization, AuthLang.test.button.finish)
                        : setLocale(localization, AuthLang.test.button.next)}
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

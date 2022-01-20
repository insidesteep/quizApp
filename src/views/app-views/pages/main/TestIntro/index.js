import {
  Tabs,
  Col,
  Space,
  Radio,
  Button,
  Row,
  Form,
  Card,
  Typography,
  Input,
  Select,
  Image,
  Divider,
  Spin,
  Alert
} from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Flex from "../../../../../components/Flex";
import {
  showLoadingTestData,
  fetchStartTest,
} from "../../../../../redux/actions/question";

const { Title, Paragraph } = Typography;

const TestIntro = () => {
  const [lang, setLang] = useState(1);
  const { userInfo } = useSelector((state) => state.auth);
  const { testData } = useSelector((state) => state.question);
  const dispatch = useDispatch();

  const onStart = () => {
    dispatch(showLoadingTestData());
    dispatch(
      fetchStartTest({
        lang,
        subject_id: userInfo.subjectId,
      })
    );
  };

  const handleChangeLang = (value) => {
    setLang(value);
  };

  return (
    <div className="test__intro">
      <Title style={{ textAlign: "center", marginBottom: "3rem" }}>
        Olimpiada - 2022
      </Title>
      <Spin spinning={testData.loading}>
        <Card>
          <Alert
            description="Choose your testing language and see how many of the 25 questions
            you can answer correctly!"
            type="warning"
            showIcon
          />

          <Paragraph style={{ padding: "0.5rem 0" }}>
            Subject: {userInfo.subjectName}
          </Paragraph>
          <Form layout="vertical" size="large">
            <Form.Item>
              <Select value={lang} onChange={handleChangeLang}>
                <Select.Option value={1}>
                  <Flex alignItems="center" justifyContent="space-between">
                    O'zbekcha <img src="/img/uz.png" width={18} />
                  </Flex>
                </Select.Option>

                <Select.Option value={2}>
                  <Flex alignItems="center" justifyContent="space-between">
                    Русский <img src="/img/ru.png" width={18} />
                  </Flex>
                </Select.Option>

                <Select.Option value={3}>
                  <Flex alignItems="center" justifyContent="space-between">
                    English <img src="/img/en.png" width={18} />
                  </Flex>
                </Select.Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Flex justifyContent="center">
                <Button type="primary" onClick={onStart}>
                  Start
                </Button>
              </Flex>
            </Form.Item>
          </Form>
        </Card>
      </Spin>
    </div>
  );
};

export default TestIntro;

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
} from "antd";
import { useSelector } from "react-redux";
import Flex from "../../../../../components/Flex";

const { Title, Paragraph } = Typography;

const TestIntro = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="test__intro">
      <Title  style={{ textAlign: "center", marginBottom: "3rem"}}>Olimpiada - 2022</Title>
      <Card>
        <Title
          type="warning"
          level={5}
          style={{ margin: "2rem 0", textAlign: "center" }}
        >
          Choose your testing language and see how many of the 25 questions you
          can answer correctly!
        </Title>

        <Paragraph style={{ padding: "0.5rem 0" }}>
          Subject: {userInfo.subjectName}
        </Paragraph>
        <Form layout="vertical" size="large">
          <Form.Item>
            <Select defaultValue={1}>
              <Select.Option value={1}>
                <Flex alignItems="center" justifyContent="space-between">
                  Русский <img src="/img/ru.png" width={18} />
                </Flex>
              </Select.Option>
              <Select.Option value={2}>
                <Flex alignItems="center" justifyContent="space-between">
                  O'zbekcha <img src="/img/uz.png" width={18} />
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
              <Button type="primary">Start</Button>
            </Flex>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default TestIntro;

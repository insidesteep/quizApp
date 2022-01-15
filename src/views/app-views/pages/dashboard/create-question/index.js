import { Col, Divider, Row, Tabs, Typography } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import CreateForm from "./CreateForm.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showLoadingQuestionCount,
  fetchQuestionCount,
} from "../../../../../redux/actions/question";
import ListQuestions from "./ListQuestions.js/index.js";

const { Title, Paragraph, Text } = Typography;
const { TabPane } = Tabs;

const CreateQuestion = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [lang, setLang] = useState("1");

  useEffect(() => {
    if (lang && userInfo.subjectId) {
      dispatch(showLoadingQuestionCount());
      dispatch(fetchQuestionCount({ lang, subject_id: userInfo.subjectId }));
    }
  }, [lang, userInfo.subjectId]);

  const handleChangeLang = (value) => {
    setLang(value);
  };

  return (
    <Col span={23}>
      <Title level={3}>Create New Question</Title>
      <Paragraph type="warning">
        <WarningOutlined size="large" />
        <Text type="secondary">
          {" "}
          Eslatma: Birinchi turgan javoblar, to'gri javob hisoblanadi
        </Text>
      </Paragraph>

      <Divider />
      <Tabs
        type="card"
        onChange={handleChangeLang}
        activeKey={lang}
        destroyInactiveTabPane
      >
        <TabPane tab="O'zbek" key={1}>
          <Row gutter={8}>
            <Col span={12}>
              <CreateForm lang={1} />
            </Col>
            <Col span={12}>
              <ListQuestions />
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Русский" key={2}>
          <CreateForm lang={2} />
        </TabPane>
        <TabPane tab="English" key={3}>
          <CreateForm lang={3} />
        </TabPane>
      </Tabs>
    </Col>
  );
};

export default CreateQuestion;
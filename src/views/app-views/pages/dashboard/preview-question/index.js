import { Col, Divider, Tabs, Typography } from "antd";
import { useState } from "react";
import Questions from "./Questions";

const { Title, Paragraph, Text } = Typography;
const { TabPane } = Tabs;

const PreviewQuestions = () => {
  const [lang, setLang] = useState("1");

  const handleChangeLang = (key) => {
    setLang(key);
  };

  return (
    <Col span={23}>
      <Title level={3}>Preview Questions</Title>

      <Divider />
      <Tabs
        type="card"
        onChange={handleChangeLang}
        activeKey={lang}
        destroyInactiveTabPane
      >
        <TabPane tab="O'zbek" key={1}>
          <Questions lang={lang} />
        </TabPane>
        <TabPane tab="Русский" key={2}>
          <Questions lang={lang} />
        </TabPane>
        <TabPane tab="English" key={3}>
          <Questions lang={lang} />
        </TabPane>
      </Tabs>
    </Col>
  );
};

export default PreviewQuestions;

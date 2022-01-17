import {
  Col,
  Divider,
  Tabs,
  Typography,
  Row,
  Card,
  Tag,
  Image,
  Badge,
} from "antd";
import Flex from "../../../../../components/Flex";

const { Title, Paragraph, Text } = Typography;
const { TabPane } = Tabs;

const PreviewQuestions = () => {
  return (
    <Col span={23}>
      <Title level={3}>Preview Questions</Title>

      <Divider />
      <Tabs
        type="card"
        // onChange={handleChangeLang}
        // activeKey={lang}
        // destroyInactiveTabPane
      >
        <TabPane tab="O'zbek" key={1}>
          <Card
            className="question__preview-card"
            title={
              <Flex alignItems="center" justifyContent="space-between">
                <div className="question__priview-header">
                  <h4>№1</h4>
                  <Divider type="vertical" />
                  <h5>Test question?</h5>
                </div>
                <div className="question__preview-images">
                  <Image
                    width={50}
                    src="https://pizzamizza.uz/temp/6/17-01-2022-12-06-8nWogP-app-icon-set-flat_1325-488.jpg"
                  />
                  <Image
                    width={50}
                    src="https://pizzamizza.uz/temp/6/17-01-2022-12-06-8nWogP-app-icon-set-flat_1325-488.jpg"
                  />
                  <Image
                    width={50}
                    src="https://pizzamizza.uz/temp/6/17-01-2022-12-06-8nWogP-app-icon-set-flat_1325-488.jpg"
                  />
                </div>
              </Flex>
            }
          >
            <div>
              <div className="question__preview-answer">
                <Tag
                  color="green"
                  style={{ alignSelf: "flex-start", marginRight: "1rem" }}
                >
                  A
                </Tag>
                <div className="question__preview-answer-title">
                  <p>awdwadw</p>
                  <Image
                    width={50}
                    src="https://pizzamizza.uz/temp/6/17-01-2022-12-06-8nWogP-app-icon-set-flat_1325-488.jpg"
                  />
                </div>
              </div>
              <div className="question__preview-answer">
                <Tag style={{ alignSelf: "flex-start", marginRight: "1rem" }}>
                  B
                </Tag>
                <div className="question__preview-answer-title">
                  <p>awdwadw</p>
                </div>
              </div>
              <div className="question__preview-answer">
                <Tag style={{ alignSelf: "flex-start", marginRight: "1rem" }}>
                  C
                </Tag>
                <div className="question__preview-answer-title">
                  <p>awdwadw</p>
                  <Image
                    width={50}
                    src="https://pizzamizza.uz/temp/6/17-01-2022-12-06-8nWogP-app-icon-set-flat_1325-488.jpg"
                  />
                </div>
              </div>
              <div className="question__preview-answer">
                <Tag style={{ alignSelf: "flex-start", marginRight: "1rem" }}>
                  D
                </Tag>
                <div className="question__preview-answer-title">
                  <p>awdwadw</p>
                  <Image
                    width={50}
                    src="https://pizzamizza.uz/temp/6/17-01-2022-12-06-8nWogP-app-icon-set-flat_1325-488.jpg"
                  />
                </div>
              </div>
            </div>
          </Card>
          <Card
            className="question__preview-card"
            title={
              <Flex alignItems="center" justifyContent="space-between">
                <div className="question__priview-header">
                  <h4>№1</h4>
                  <Divider type="vertical" />
                  <h5>Test question?</h5>
                </div>
                <div className="question__preview-images">
                  <Image
                    width={50}
                    src="https://pizzamizza.uz/temp/6/17-01-2022-12-06-8nWogP-app-icon-set-flat_1325-488.jpg"
                  />
                  <Image
                    width={50}
                    src="https://pizzamizza.uz/temp/6/17-01-2022-12-06-8nWogP-app-icon-set-flat_1325-488.jpg"
                  />
                  <Image
                    width={50}
                    src="https://pizzamizza.uz/temp/6/17-01-2022-12-06-8nWogP-app-icon-set-flat_1325-488.jpg"
                  />
                </div>
              </Flex>
            }
          >
            <div>
              <div className="question__preview-answer">
                <Tag
                  color="green"
                  style={{ alignSelf: "flex-start", marginRight: "1rem" }}
                >
                  A
                </Tag>
                <div className="question__preview-answer-title">
                  <p>awdwadw</p>
                  <Image
                    width={50}
                    src="https://pizzamizza.uz/temp/6/17-01-2022-12-06-8nWogP-app-icon-set-flat_1325-488.jpg"
                  />
                </div>
              </div>
              <div className="question__preview-answer">
                <Tag style={{ alignSelf: "flex-start", marginRight: "1rem" }}>
                  B
                </Tag>
                <div className="question__preview-answer-title">
                  <p>awdwadw</p>
                </div>
              </div>
              <div className="question__preview-answer">
                <Tag style={{ alignSelf: "flex-start", marginRight: "1rem" }}>
                  C
                </Tag>
                <div className="question__preview-answer-title">
                  <p>awdwadw</p>
                  <Image
                    width={50}
                    src="https://pizzamizza.uz/temp/6/17-01-2022-12-06-8nWogP-app-icon-set-flat_1325-488.jpg"
                  />
                </div>
              </div>
              <div className="question__preview-answer">
                <Tag style={{ alignSelf: "flex-start", marginRight: "1rem" }}>
                  D
                </Tag>
                <div className="question__preview-answer-title">
                  <p>awdwadw</p>
                  <Image
                    width={50}
                    src="https://pizzamizza.uz/temp/6/17-01-2022-12-06-8nWogP-app-icon-set-flat_1325-488.jpg"
                  />
                </div>
              </div>
            </div>
          </Card>
          <Card
            className="question__preview-card"
            title={
              <Flex alignItems="center" justifyContent="space-between">
                <div className="question__priview-header">
                  <h4>№1</h4>
                  <Divider type="vertical" />
                  <h5>Test question?</h5>
                </div>
                <div className="question__preview-images">
                  <Image
                    width={50}
                    src="https://pizzamizza.uz/temp/6/17-01-2022-12-06-8nWogP-app-icon-set-flat_1325-488.jpg"
                  />
                  <Image
                    width={50}
                    src="https://pizzamizza.uz/temp/6/17-01-2022-12-06-8nWogP-app-icon-set-flat_1325-488.jpg"
                  />
                  <Image
                    width={50}
                    src="https://pizzamizza.uz/temp/6/17-01-2022-12-06-8nWogP-app-icon-set-flat_1325-488.jpg"
                  />
                </div>
              </Flex>
            }
          >
            <div>
              <div className="question__preview-answer">
                <Tag
                  color="green"
                  style={{ alignSelf: "flex-start", marginRight: "1rem" }}
                >
                  A
                </Tag>
                <div className="question__preview-answer-title">
                  <p>awdwadw</p>
                  <Image
                    width={50}
                    src="https://pizzamizza.uz/temp/6/17-01-2022-12-06-8nWogP-app-icon-set-flat_1325-488.jpg"
                  />
                </div>
              </div>
              <div className="question__preview-answer">
                <Tag style={{ alignSelf: "flex-start", marginRight: "1rem" }}>
                  B
                </Tag>
                <div className="question__preview-answer-title">
                  <p>awdwadw</p>
                </div>
              </div>
              <div className="question__preview-answer">
                <Tag style={{ alignSelf: "flex-start", marginRight: "1rem" }}>
                  C
                </Tag>
                <div className="question__preview-answer-title">
                  <p>awdwadw</p>
                  <Image
                    width={50}
                    src="https://pizzamizza.uz/temp/6/17-01-2022-12-06-8nWogP-app-icon-set-flat_1325-488.jpg"
                  />
                </div>
              </div>
              <div className="question__preview-answer">
                <Tag style={{ alignSelf: "flex-start", marginRight: "1rem" }}>
                  D
                </Tag>
                <div className="question__preview-answer-title">
                  <p>awdwadw</p>
                  <Image
                    width={50}
                    src="https://pizzamizza.uz/temp/6/17-01-2022-12-06-8nWogP-app-icon-set-flat_1325-488.jpg"
                  />
                </div>
              </div>
            </div>
          </Card>
        </TabPane>
        <TabPane tab="Русский" key={2}></TabPane>
        <TabPane tab="English" key={3}></TabPane>
      </Tabs>
    </Col>
  );
};

export default PreviewQuestions;

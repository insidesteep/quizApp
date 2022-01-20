import { Progress, Card, Typography, Alert, Result } from "antd";
import { FrownOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import Flex from "../../../../../components/Flex";
import IntlMessage from "../../../../../components/IntlMessage";
import AuthLang from "../../../../../configs/LangConfigs/auth";

const { Title, Link, Paragraph } = Typography;

const setLocale = (isLocaleOn, localeKey) =>
  isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();

const TestResult = ({ localization = true }) => {
  const { testData } = useSelector((state) => state.question);
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <Card
      style={{
        maxWidth: "500px",
        width: "100%",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <Flex flexDirection="column" alignItems="center">
        <Title level={2} style={{ color: "#69c0ff", marginBottom: "2rem" }}>
          {setLocale(localization, AuthLang.test.result.title)}
        </Title>
        {testData.testStatus == 2 && testData.data?.test_result && (
          <>
            <Progress
              type="circle"
              status={
                testData.data.test_result.correctly < 21
                  ? "exception"
                  : "success"
              }
              percent={(testData.data.test_result.correctly * 100) / 25}
              format={() => `${testData.data.test_result.correctly}/25`}
            />
            {testData.data.zoom_url && userInfo.subjectId != 2 ? (
              <Flex
                style={{ marginTop: "2rem" }}
                alignItems="center"
                justifyContent="center"
              >
                <Link
                  href={testData.data.zoom_url.split("\r\n\r\n")[0]}
                  target="_blank"
                >
                  <img
                    src="/img/zoom.svg"
                    width={25}
                    style={{ marginRight: "0.5rem" }}
                  />{" "}
                  {setLocale(localization, AuthLang.test.result.zoom)}
                </Link>
              </Flex>
            ) : (
              <Alert
                style={{ marginTop: "2rem" }}
                type="info"
                description={testData.data.zoom_url.link}
                showIcon
              />
            )}
          </>
        )}
        {testData.testStatus == 3 && (
          <Result
            icon={<FrownOutlined />}
            extra={
              <Paragraph>
                {setLocale(localization, AuthLang.test.result.fail)}
              </Paragraph>
            }
          />
        )}
      </Flex>
    </Card>
  );
};

export default TestResult;

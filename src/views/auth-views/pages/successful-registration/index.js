import { Result, Typography, Row, Col, Card } from "antd";
import { useSelector } from "react-redux";
import Flex from "../../../../components/Flex";
import IntlMessage from "../../../../components/IntlMessage";
import authLang from "../../../../configs/LangConfigs/auth";

const { Paragraph, Text } = Typography;

const setLocale = (isLocaleOn, localeKey) =>
  isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();

const SuccessfuRegistration = ({ localization = true }) => {
  const { termRegData } = useSelector((state) => state.auth);

  return (
    <div className="auth-wrapper">
      <Flex alignItems="center" justifyContent="center">
        <Row align="center">
          <Col sm={12} xs={22}>
            <Card>
              {" "}
              <Result
                status="success"
                title={setLocale(
                  localization,
                  authLang.registration.successful.title
                )}
                subTitle={
                  <Paragraph type="secondary">
                    {setLocale(
                      localization,
                      authLang.registration.successful.subTitle
                    )}
                  </Paragraph>
                }
                extra={[
                  <>
                    {termRegData && (
                      <>
                        <Paragraph>
                          {setLocale(
                            localization,
                            authLang.registration.successful.login
                          )}
                          : <Text type="danger">{termRegData.email}</Text>
                        </Paragraph>
                        <Paragraph>
                          {setLocale(
                            localization,
                            authLang.registration.successful.password
                          )}
                          :{" "}
                          <Text type="danger">
                            {termRegData.password.slice(0, 3) + "*****"}
                          </Text>
                        </Paragraph>
                      </>
                    )}
                  </>,
                ]}
              />
            </Card>
          </Col>
        </Row>
      </Flex>
    </div>
  );
};

export default SuccessfuRegistration;

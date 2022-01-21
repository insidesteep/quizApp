import { useState, useEffect } from "react";
import {
  Layout,
  Card,
  Row,
  Col,
  Typography,
  Radio,
  Tooltip,
  Result,
} from "antd";
import { PhoneTwoTone } from "@ant-design/icons";
import Flex from "../../../../components/Flex";
import RegisterForm from "../../../../components/Auth/RegisterForm";
import LoginForm from "../../../../components/Auth/LoginForm";
import IntlMessage from "../../../../components/IntlMessage";
import authLang from "../../../../configs/LangConfigs/auth";
import { useSelector, useDispatch } from "react-redux";
import { onLocaleChange } from "../../../../redux/actions/locale";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { APP_PREFIX_PATH } from "../../../../configs/AppConfig";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
const { Sider, Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const setLocale = (isLocaleOn, localeKey) =>
  isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();

const AuthPage = ({ localization = true }) => {
  const [authState, setAuthState] = useState("login");
  const { localeValue } = useSelector((state) => state.locale);
  const { token, userInfo } = useSelector((state) => state.auth);
  const history = useHistory();
  const screens = useBreakpoint();
  const dispatch = useDispatch();

  const handleChangeAuthState = (e) => {
    setAuthState(e.target.value);
  };

  const handleChangeLocale = (e) => {
    dispatch(onLocaleChange(e.target.value));
  };

  return (
    <div className="auth-wrapper">
      <Row style={{ height: "100%" }}>
        <Col
          xs={0}
          md={12}
          lg={16}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              width: !screens.xl ? "90%" : "50%",
              margin: "1rem 0",
              borderRadius: "1rem",
            }}
          >
            <Result
              title={
                <p style={{ fontSize: "1rem" }}>
                  {setLocale(localization, authLang.testStart)}
                </p>
              }
            />
          </div>
        </Col>
        <Col
          xs={24}
          md={12}
          lg={8}
          style={{
            backgroundColor: "#fff",
            padding: "3rem",
            paddingTop: "4rem",
            height: "100%",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              width: "100%",
              position: "absolute",
              left: "0",
              top: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem 3rem",
            }}
          >
            <Paragraph style={{ margin: 0 }}>
              <PhoneTwoTone /> +998 (99) 703-11-01
            </Paragraph>
            <Radio.Group
              size="small"
              defaultValue={localeValue}
              onChange={handleChangeLocale}
            >
              <Radio.Button value="ru">
                <img src="/img/ru.png" width={18} />
              </Radio.Button>

              <Radio.Button value="uz">
                <img src="/img/uz.png" width={18} />
              </Radio.Button>
              <Radio.Button value="en">
                <img src="/img/en.png" width={18} />
              </Radio.Button>
            </Radio.Group>
          </div>
          <Row>
            <Col>
              <Title level={1}>
                {setLocale(localization, authLang.brandName)}
              </Title>
            </Col>
          </Row>
          {/* <Row gutter={5}>
            <Col>
              <Radio.Group
                defaultValue="login"
                buttonStyle="solid"
                onChange={handleChangeAuthState}
              >
                <Radio.Button value="login">
                  {setLocale(localization, authLang.switchAuth.login)}
                </Radio.Button>

                <Radio.Button value="registration">
                  {setLocale(localization, authLang.switchAuth.registration)}
                </Radio.Button>
              </Radio.Group>
            </Col>
          </Row> */}
          <Row>
            <Col>
              <LoginForm />
              {/* {authState === "login" ? <LoginForm /> : <RegisterForm />} */}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
    // <Layout style={{ height: "100%" }}>
    //   <Content>C</Content>
    //   <Sider width={"45%"}>
    //     <div style={{ position: "absolute", right: "15px", top: "15px" }}>
    //       <Radio.Group
    //         defaultValue={localeValue}
    //         buttonStyle="solid"
    //         onChange={handleChangeLocale}
    //         o
    //       >
    //         <Radio.Button value="ru">RU</Radio.Button>
    //         <Radio.Button value="uz">UZB</Radio.Button>
    //         <Radio.Button value="en">ENG</Radio.Button>
    //       </Radio.Group>
    //     </div>
    //     <Flex
    //       flexDirection="column"
    //       alignItems="center"
    //       justifyContent="center"
    //     >
    //       <Title level={1} style={{ color: "#fff" }}>
    //         {setLocale(localization, authLang.brandName)}
    //       </Title>
    //       <Card style={{ padding: "1.5rem" }}>
    //         <Row gutter={5}>
    //           <Col>
    //             <Radio.Group
    //               defaultValue="login"
    //               buttonStyle="solid"
    //               onChange={handleChangeAuthState}
    //             >
    //               <Radio.Button value="login">
    //                 {setLocale(localization, authLang.switchAuth.login)}
    //               </Radio.Button>
    //               <Radio.Button value="registration">
    //                 {setLocale(localization, authLang.switchAuth.registration)}
    //               </Radio.Button>
    //             </Radio.Group>
    //           </Col>
    //         </Row>
    //         <Row>
    //           <Col>
    //             {authState === "login" ? <LoginForm /> : <RegisterForm />}
    //           </Col>
    //         </Row>
    //       </Card>
    //     </Flex>
    //   </Sider>
    // </Layout>
  );
};

export default AuthPage;

import { useState } from "react";
import { Layout, Card, Row, Col, Typography, Radio, Tooltip } from "antd";
import Flex from "../../../../components/Flex";
import RegisterForm from "../../../../components/Auth/RegisterForm";
import LoginForm from "../../../../components/Auth/LoginForm";
import IntlMessage from "../../../../components/IntlMessage";
import authLang from "../../../../configs/LangConfigs/auth";
import { useSelector, useDispatch } from "react-redux";
import { onLocaleChange } from "../../../../redux/actions/locale";

const { Sider, Content } = Layout;
const { Title, Text } = Typography;

const setLocale = (isLocaleOn, localeKey) =>
  isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();

const AuthPage = ({ localization = true }) => {
  const [authState, setAuthState] = useState("");
  const { localeValue } = useSelector((state) => state.locale);
  console.log();
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
        <Col xs={0} md={12} lg={16}></Col>
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
          <div style={{ position: "absolute", right: "15px", top: "15px" }}>
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
          <Row gutter={5}>
            <Col>
              <Radio.Group
                defaultValue="registration"
                buttonStyle="solid"
                onChange={handleChangeAuthState}
              >
                <Tooltip title="Coming Soon">
                  <Radio.Button value="login" disabled>
                    {setLocale(localization, authLang.switchAuth.login)}
                  </Radio.Button>
                </Tooltip>
                ,
                <Radio.Button value="registration">
                  {setLocale(localization, authLang.switchAuth.registration)}
                </Radio.Button>
              </Radio.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              {authState === "login" ? <LoginForm /> : <RegisterForm />}
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

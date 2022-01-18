import { Form, Row, Col, Input, Upload, Button } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { injectIntl } from "react-intl";
import IntlMessage from "../../IntlMessage";
import authLang from "../../../configs/LangConfigs/auth";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, signIn } from "../../../redux/actions/auth";

const setLocale = (isLocaleOn, localeKey) =>
  isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();

const LoginForm = ({ localization = true, intl }) => {
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [form] = Form.useForm();


  const onFinish = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values);

        console.log(showLoading, signIn);
        dispatch(showLoading());
        dispatch(signIn(values));
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form layout="vertical" size="large" name="login" form={form}>
      <Row>
        <Col span={24}>
          <Form.Item
            label={setLocale(localization, authLang.login.email)}
            name="email"
            rules={[
              {
                required: true,
                message: setLocale(
                  localization,
                  authLang.login.rules.emailRequired
                ),
              },
              {
                type: "email",
                message: setLocale(
                  localization,
                  authLang.login.rules.emailValidate
                ),
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="text-primary" />}
              placeholder={intl.formatMessage({
                id: "login.email.placeholder",
              })}
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label={setLocale(localization, authLang.login.password)}
            name="password"
            rules={[
              {
                required: true,
                message: setLocale(
                  localization,
                  authLang.login.rules.passwordRequired
                ),
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="text-primary" />}
              placeholder={intl.formatMessage({
                id: "login.password.placeholder",
              })}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={onFinish}
              loading={loading}
            >
              {setLocale(localization, authLang.login.submit)}
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default injectIntl(LoginForm);

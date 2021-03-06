import { Form, Row, Col, Input, Upload, Button, Select, Spin } from "antd";
import {
  PictureOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { injectIntl } from "react-intl";
import IntlMessage from "../../IntlMessage";
import authLang from "../../../configs/LangConfigs/auth";
import { useDispatch, useSelector } from "react-redux";
import { signUp, showLoading } from "../../../redux/actions/auth";
import {
  fetchSubjects,
  showLoadingSubjects,
} from "../../../redux/actions/subject";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const setLocale = (isLocaleOn, localeKey) =>
  isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();

const RegisterForm = ({ localization = true, intl }) => {
  const [photo, setPhoto] = useState("");
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const { loading: subjectsLoading, data: subjects } = useSelector(
    (state) => state.subject
  );
  const [form] = Form.useForm();
  const history = useHistory();

  const rules = {
    firstName: [
      {
        required: true,
        message: setLocale(
          localization,
          authLang.registration.rules.firstNameRequired
        ),
      },
    ],
    lastName: [
      {
        required: true,
        message: setLocale(
          localization,
          authLang.registration.rules.lastNameRequired
        ),
      },
    ],
    middleName: [
      {
        required: true,
        message: setLocale(
          localization,
          authLang.registration.rules.middleNameRequired
        ),
      },
    ],
    photo: [
      {
        required: true,
        message: setLocale(
          localization,
          authLang.registration.rules.photoRequired
        ),
      },
    ],
    phone: [
      {
        required: true,
        message: setLocale(
          localization,
          authLang.registration.rules.phoneRequired
        ),
      },
    ],
    email: [
      {
        required: true,
        message: setLocale(
          localization,
          authLang.registration.rules.emailRequired
        ),
      },
      {
        type: "email",
        message: setLocale(
          localization,
          authLang.registration.rules.emailValidate
        ),
      },
    ],
    password: [
      {
        required: true,
        message: setLocale(
          localization,
          authLang.registration.rules.passwordRequired
        ),
      },
    ],
    institute: [
      {
        required: true,
        message: setLocale(
          localization,
          authLang.registration.rules.instituteRequired
        ),
      },
    ],
    faculty: [
      {
        required: true,
        message: setLocale(
          localization,
          authLang.registration.rules.facultyRequired
        ),
      },
    ],
    subject: [
      {
        required: true,
        message: setLocale(
          localization,
          authLang.registration.rules.subjectRequired
        ),
      },
    ],
  };

  const onGetSubjects = () => {
    dispatch(showLoadingSubjects());
    dispatch(fetchSubjects());
  };

  const onFinish = () => {
    form
      .validateFields()
      .then((values) => {
        dispatch(showLoading());

        dispatch(signUp(values, history));
      })
      .catch(() => {});
  };

  const handleChangePhoto = (info) => {
    const reader = new FileReader();
    reader.readAsDataURL(info.file.originFileObj);
    reader.addEventListener("load", () => setPhoto(reader.result));
  };

  return (
    <Form layout="vertical" size="large" form={form}>
      <Row gutter={8}>
        <Col lg={8} xs={24}>
          <Form.Item
            label={setLocale(localization, authLang.registration.lastName)}
            name="lastname"
            rules={rules.lastName}
          >
            <Input
              placeholder={intl.formatMessage({
                id: "registration.lastName.placeholder",
              })}
            />
          </Form.Item>
        </Col>{" "}
        <Col lg={8} xs={24}>
          <Form.Item
            label={setLocale(localization, authLang.registration.firstName)}
            name="firstname"
            rules={rules.firstName}
          >
            <Input
              placeholder={intl.formatMessage({
                id: "registration.firstName.placeholder",
              })}
            />
          </Form.Item>
        </Col>{" "}
        <Col lg={8} xs={24}>
          <Form.Item
            label={setLocale(localization, authLang.registration.middleName)}
            name="fathername"
            rules={rules.middleName}
          >
            <Input
              placeholder={intl.formatMessage({
                id: "registration.middleName.placeholder",
              })}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} xs={24}>
          <Form.Item
            label={setLocale(localization, authLang.registration.photo)}
            name="student_photo"
            rules={rules.photo}
            className="auth-upload"
          >
            <Upload.Dragger
              customRequest={(options) => console.log(options)}
              multiple={false}
              showUploadList={false}
              onChange={handleChangePhoto}
            >
              {photo ? (
                <div
                  style={{
                    maxWidth: "100px",
                    objectFit: "cover",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src={photo} style={{ width: "100%", height: "100%" }} />
                </div>
              ) : (
                <>
                  <p className="ant-upload-drag-icon">
                    <UserOutlined />
                  </p>
                  <p className="ant-upload-hint">
                    {setLocale(localization, authLang.registration.photoDesc)}
                  </p>
                </>
              )}
            </Upload.Dragger>
          </Form.Item>
        </Col>
        <Col lg={12} xs={24}>
          <Form.Item
            label={setLocale(localization, authLang.registration.email)}
            name="email"
            rules={rules.email}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder={intl.formatMessage({
                id: "registration.email.placeholder",
              })}
            />
          </Form.Item>
          <Form.Item
            label={setLocale(localization, authLang.registration.password)}
            name="password"
            rules={rules.password}
          >
            <Input
              prefix={<LockOutlined />}
              placeholder={intl.formatMessage({
                id: "registration.password.placeholder",
              })}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col lg={12} xs={24}>
          <Form.Item
            label={setLocale(localization, authLang.registration.phone)}
            name="phone_number"
            rules={rules.phone}
          >
            <Input
              prefix={<PhoneOutlined />}
              placeholder={intl.formatMessage({
                id: "registration.phone.placeholder",
              })}
            />
          </Form.Item>
        </Col>

        <Col lg={12} xs={24}>
          <Form.Item
            label={setLocale(localization, authLang.registration.institute)}
            name="institute_name"
            rules={rules.institute}
          >
            <Input
              placeholder={intl.formatMessage({
                id: "registration.institute.placeholder",
              })}
            />
          </Form.Item>
        </Col>
        <Col lg={12} xs={24}>
          <Form.Item
            label={setLocale(localization, authLang.registration.faculty)}
            name="faculty"
            rules={rules.faculty}
          >
            <Input
              placeholder={intl.formatMessage({
                id: "registration.faculty.placeholder",
              })}
            />
          </Form.Item>
        </Col>

        <Col lg={12} xs={24}>
          <Form.Item
            label={setLocale(localization, authLang.registration.subject)}
            name="subject"
            rules={rules.subject}
          >
            <Select
              placeholder={intl.formatMessage({
                id: "registration.subject.placeholder",
              })}
              onClick={onGetSubjects}
              loading={subjectsLoading}
              notFoundContent={subjectsLoading ? <Spin /> : null}
            >
              {subjects.map((subj) => (
                <Select.Option key={subj.id} value={subj.id}>
                  {subj.name}
                </Select.Option>
              ))}
            </Select>
            {/* <Input
              placeholder={intl.formatMessage({
                id: "registration.subject.placeholder",
              })}
            /> */}
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={onFinish}
              loading={loading}
              style={{ width: "100%" }}
            >
              {setLocale(localization, authLang.registration.submit)}
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default injectIntl(RegisterForm);

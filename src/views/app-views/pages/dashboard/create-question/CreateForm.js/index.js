import { Button, Card, Input, Upload, Tag, Tooltip, Form, Spin } from "antd";
import {
  SaveOutlined,
  CheckOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createQuestion,
  showLoadingCreate,
} from "../../../../../../redux/actions/question";

const rules = {
  question: [
    {
      required: true,
      message: "Iltimos, savolni kiriting",
    },
  ],
  answer_1: [
    {
      required: true,
      message: "Iltimos, 1-javobni kiriting kiriting",
    },
  ],
  answer_2: [
    {
      required: true,
      message: "Iltimos, 2-javobni kiriting kiriting",
    },
  ],
  answer_3: [
    {
      required: true,
      message: "Iltimos, 3-javobni kiriting kiriting",
    },
  ],
  answer_4: [
    {
      required: true,
      message: "Iltimos, 4-javobni kiriting kiriting",
    },
  ],
};

// {
//   uid: 1,
//   name: "img",
//   status: "done",
//   url: "https://user-images.githubusercontent.com/16330002/29263294-83b0c562-811b-11e7-9218-02d0b5b9097e.png",
// }

const CreateForm = ({ lang }) => {
  const [imgList, setImgList] = useState([]);
  const [answerImg, setAnswerImg] = useState({
    1: [],
    2: [],
    3: [],
    4: [],
  });
  const [form] = Form.useForm();
  const { questionCount, loadingQuestionCount, loadingCreate, questionData } =
    useSelector((state) => state.question);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onChangeImg = ({ fileList: newImgList }) => {
    setImgList(newImgList);
  };

  const onChangeAwnserImg = (answerNum, fileList) => {
    setAnswerImg({ ...answerImg, [answerNum]: fileList });
  };

  const onFinish = () => {
    form
      .validateFields()
      .then((values) => {
        dispatch(showLoadingCreate());
        dispatch(
          createQuestion({ ...values, lang, subjectId: userInfo.subjectId })
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <Spin
      spinning={loadingQuestionCount || loadingCreate || questionData.loading}
    >
      <Form layout="vertical" form={form}>
        <Card title={`Savol №${+questionCount + 1}`}>
          <Form.Item name="question" rules={rules.question}>
            <Input.TextArea rows={3} size="large" placeholder="Savolni kiriting" />
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            <div className="answer">
              <span>A</span>
              <div className="answer__img">
                <Form.Item
                  name={["answer_1", "answer"]}
                  noStyle
                  rules={rules.answer_1}
                >
                  <Input
                    placeholder="Javob 1"
                    suffix={
                      <Tag color="#87d068">
                        <CheckOutlined />
                      </Tag>
                    }
                  />
                </Form.Item>
                <Form.Item name={["answer_1", "img"]} noStyle>
                  <Upload
                    listType="picture-card"
                    customRequest={({ file, onSuccess }) => {
                      setTimeout(() => {
                        onSuccess("ok");
                      }, 0);
                    }}
                    fileList={answerImg[1]}
                    onChange={({ fileList }) => onChangeAwnserImg(1, fileList)}
                    //   onPreview={onPreview}
                  >
                    {answerImg[1].length < 1 && (
                      <Tooltip title="Rasm yuklash">
                        <PictureOutlined />
                      </Tooltip>
                    )}
                  </Upload>
                </Form.Item>
              </div>
            </div>
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            <div className="answer">
              <span>B</span>
              <div className="answer__img">
                <Form.Item
                  name={["answer_2", "answer"]}
                  noStyle
                  rules={rules.answer_2}
                >
                  <Input placeholder="Javob 2" />
                </Form.Item>
                <Form.Item name={["answer_2", "img"]} noStyle>
                  <Upload
                    listType="picture-card"
                    customRequest={({ file, onSuccess }) => {
                      setTimeout(() => {
                        onSuccess("ok");
                      }, 0);
                    }}
                    fileList={answerImg[2]}
                    onChange={({ fileList }) => onChangeAwnserImg(2, fileList)}
                    //   onPreview={onPreview}
                  >
                    {answerImg[2].length < 1 && (
                      <Tooltip title="Rasm yuklash">
                        <PictureOutlined />
                      </Tooltip>
                    )}
                  </Upload>
                </Form.Item>
              </div>
            </div>
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            <div className="answer">
              <span>C</span>
              <div className="answer__img">
                <Form.Item
                  name={["answer_3", "answer"]}
                  noStyle
                  rules={rules.answer_3}
                >
                  <Input placeholder="Javob 3" />
                </Form.Item>
                <Form.Item name={["answer_3", "img"]} noStyle>
                  <Upload
                    listType="picture-card"
                    customRequest={({ file, onSuccess }) => {
                      setTimeout(() => {
                        onSuccess("ok");
                      }, 0);
                    }}
                    fileList={answerImg[3]}
                    onChange={({ fileList }) => onChangeAwnserImg(3, fileList)}
                    //   onPreview={onPreview}
                  >
                    {answerImg[3].length < 1 && (
                      <Tooltip title="Rasm yuklash">
                        <PictureOutlined />
                      </Tooltip>
                    )}
                  </Upload>
                </Form.Item>
              </div>
            </div>
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            <div className="answer">
              <span>D</span>
              <div className="answer__img">
                <Form.Item
                  name={["answer_4", "answer"]}
                  noStyle
                  rules={rules.answer_4}
                >
                  <Input placeholder="Javob 4" />
                </Form.Item>
                <Form.Item name={["answer_4", "img"]} noStyle>
                  <Upload
                    listType="picture-card"
                    customRequest={({ file, onSuccess }) => {
                      setTimeout(() => {
                        onSuccess("ok");
                      }, 0);
                    }}
                    fileList={answerImg[4]}
                    onChange={({ fileList }) => onChangeAwnserImg(4, fileList)}
                    //   onPreview={onPreview}
                  >
                    {answerImg[4].length < 1 && (
                      <Tooltip title="Rasm yuklash">
                        <PictureOutlined />
                      </Tooltip>
                    )}
                  </Upload>
                </Form.Item>
              </div>
            </div>
          </Form.Item>
          <Card title="Savolga tegishli rasmlar">
            <div>
              <Form.Item name="question_images">
                <Upload
                  listType="picture-card"
                  customRequest={({ file, onSuccess }) => {
                    setTimeout(() => {
                      onSuccess("ok");
                    }, 0);
                  }}
                  fileList={imgList}
                  onChange={onChangeImg}
                  //   onPreview={onPreview}
                >
                  {imgList.length < 3 && "+ Upload"}
                </Upload>
              </Form.Item>
            </div>
          </Card>
        </Card>

        <div className="create-form__button">
          <Button
            type="primary"
            size="large"
            icon={<SaveOutlined />}
            htmlType="submit"
            onClick={onFinish}
          >
            Save
          </Button>
        </div>
      </Form>
    </Spin>
  );
};

export default CreateForm;

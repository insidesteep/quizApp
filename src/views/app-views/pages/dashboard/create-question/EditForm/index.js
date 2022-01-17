import { Button, Card, Input, Upload, Tag, Tooltip, Form, Spin } from "antd";
import {
  SaveOutlined,
  CheckOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateQuestion,
  showLoadingCreate,
} from "../../../../../../redux/actions/question";

const rules = {
  question: [
    {
      required: true,
      message: "Please enter a question",
    },
  ],
  answer_1: [
    {
      required: true,
      message: "Please enter a 'Answer 1'",
    },
  ],
  answer_2: [
    {
      required: true,
      message: "Please enter a 'Answer 2'",
    },
  ],
  answer_3: [
    {
      required: true,
      message: "Please enter a 'Answer 3'",
    },
  ],
  answer_4: [
    {
      required: true,
      message: "Please enter a 'Answer 4'",
    },
  ],
};

// {
//   uid: 1,
//   name: "img",
//   status: "done",
//   url: "https://user-images.githubusercontent.com/16330002/29263294-83b0c562-811b-11e7-9218-02d0b5b9097e.png",
// }

const scrollToRef = (ref) => window.scrollTo(0, ref.current.input.scrollIntoView({ behavior: "smooth" }))   

const EditForm = ({ lang, questionNum }) => {
  const [imgList, setImgList] = useState([]);
  const [answerImg, setAnswerImg] = useState({
    1: [],
    2: [],
    3: [],
    4: [],
  });
  const [form] = Form.useForm();
  const questionNameRef = useRef(null);
  const { questionCount, loadingQuestionCount, loadingCreate, questionData } =
    useSelector((state) => state.question);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (questionData.data) {
      form.setFieldsValue({
        question: questionData.data.name,
        answer_1: {
          answer: questionData.data.answer_1,
          img: questionData.data.answer_img_1,
        },
        answer_2: {
          answer: questionData.data.answer_2,
          img: questionData.data.answer_img_2,
        },
        answer_3: {
          answer: questionData.data.answer_3,
          img: questionData.data.answer_img_3,
        },
        answer_4: {
          answer: questionData.data.answer_4,
          img: questionData.data.answer_img_4,
        },
        question_images: [
          questionData.data.img_url_1,
          questionData.data.img_url_2,
          questionData.data.img_url_3,
        ],
      });

      const answersImgList = {};

      for (let i = 1; i <= 4; i++) {
        if (questionData.data[`answer_img_${i}`]) {
          answersImgList[i] = [
            {
              uid: i,
              name: "",
              status: "done",
              url: `https://pizzamizza.uz/temp/${
                questionData.data[`answer_img_${i}`]
              }`,
            },
          ];
        } else {
          answersImgList[i] = [];
        }
      }

      const imgList = [];

      for (let i = 1; i <= 3; i++) {
        if (questionData.data[`img_url_${i}`]) {
          imgList.push({
            uid: i,
            name: "",
            status: "done",
            url: `https://pizzamizza.uz/temp/${
              questionData.data[`img_url_${i}`]
            }`,
          });
        }
      }

      setImgList(imgList);

      setAnswerImg(answersImgList);

      
      scrollToRef(questionNameRef)
      questionNameRef.current.focus()
    }
  }, [questionData.data]);

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
        console.log(values);
        dispatch(showLoadingCreate());
        dispatch(
          updateQuestion({
            ...values,
            lang,
            subjectId: userInfo.subjectId,
            testId: questionData.data.id,
          })
        );
      })

      .catch((error) => console.log(error));
  };

  return (
    <Spin
      spinning={loadingQuestionCount || loadingCreate || questionData.loading}
    >
      <Form layout="vertical" form={form}>
        <Card title={`Question №${questionNum}`}>
          <Form.Item name="question" rules={rules.question}>
            <Input size="large" placeholder="Question" ref={questionNameRef} />
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
                    placeholder="Answer 1"
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
                      <Tooltip title="Добавить изображение">
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
                  <Input placeholder="Answer 2" />
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
                      <Tooltip title="Добавить изображение">
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
                  <Input placeholder="Answer 3" />
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
                      <Tooltip title="Добавить изображение">
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
                  <Input placeholder="Answer 4" />
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
                      <Tooltip title="Добавить изображение">
                        <PictureOutlined />
                      </Tooltip>
                    )}
                  </Upload>
                </Form.Item>
              </div>
            </div>
          </Form.Item>
          <Card title="Images">
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

export default EditForm;

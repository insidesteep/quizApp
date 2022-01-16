import { Tag, Card, Badge } from "antd";
import {PlusOutlined} from "@ant-design/icons"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showLoadingQuestion,
  getQuestion,
} from "../../../../../../redux/actions/question";

const ListQuestions = ({ lang, setSelectedQuestion, selectedQuestion }) => {
  const { testInfoId, questionCount } = useSelector((state) => state.question);
  const { userInfo } = useSelector((state) => state.auth);
  const [questions, setQuestions] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (testInfoId) {
      const arr = [];

      for (let i = 0; i < 100; i++) {
        if (testInfoId[i]) {
          arr.push({ testId: testInfoId[i].test_id, value: i + 1 });
        } else {
          arr.push({ testId: 0, value: i + 1 });
        }
      }

      setQuestions(arr);
    }
  }, [testInfoId]);

  useEffect(() => {
    setSelectedQuestion(parseInt(questionCount) + 1);
  }, [questionCount]);

  const handleGetQuestion = (testId, questionNum) => {
    const cb = () => setSelectedQuestion(questionNum);

    if (testId) {
      dispatch(showLoadingQuestion());
      dispatch(
        getQuestion(
          {
            lang,
            subject_id: userInfo.subjectId,
            test_id: testId,
          },
          cb
        )
      );
    } else {
      console.log(questionNum == parseInt(questionCount) + 1);
      if (questionNum == parseInt(questionCount) + 1) {
        setSelectedQuestion(questionNum);
      }
    }
  };

  const setActiveClass = (selectedQuestion, idx) => {
    return selectedQuestion == idx + 1 ? "question__item--active" : "";
  };

  return (
    <Card title="All Questions">
      {questions.map((q, idx) => (
        <Badge size="small" key={idx} color="yellow" count={idx == questionCount ? "+" : ""} offset={[-5,5]} style={{lineHeight: "12px"}}>
          <div
            className={`question__item ${
              q.testId ? "question__item--exist" : ""
            } ${setActiveClass(selectedQuestion, idx)} ${
              idx == questionCount ? "question__item--new" : ""
            }`}
            onClick={() => handleGetQuestion(q.testId, q.value)}
          >
            {q.value}
          </div>
        </Badge>
      ))}
    </Card>
  );
};

export default ListQuestions;

import { Tag, Card } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showLoadingQuestion,
  getQuestion,
} from "../../../../../../redux/actions/question";

const ListQuestions = ({ lang, setSelectedQuestion }) => {
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

  const handleGetQuestion = (testId, questionNum) => {
    const cb = () => setSelectedQuestion(questionNum);

    if (testId) {
      console.log(testId);
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
    }
  };

  return (
    <Card title="All Questions">
      {questions.map((q, idx) => (
        <div
          key={idx}
          className={`question__item ${
            q.testId ? "question__item--exist" : ""
          } ${idx == questionCount ? "question__item--current" : ""}`}
          onClick={() => handleGetQuestion(q.testId, q.value)}
        >
          {q.value}
        </div>
      ))}
    </Card>
  );
};

export default ListQuestions;

import { Tag, Card } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ListQuestions = () => {
  const { testInfoId, questionCount } = useSelector((state) => state.question);
  const [questions, setQuestions] = useState([]);

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
  console.log(questions);

  return (
    <Card title="All Questions">
      {questions.map((q, idx) => (
        <div
          key={idx}
          className={`question__item ${
            q.testId ? "question__item--exist" : ""
          } ${idx == questionCount ? "question__item--current" : ""}`}
        >
          {q.value}
        </div>
      ))}
    </Card>
  );
};

export default ListQuestions;

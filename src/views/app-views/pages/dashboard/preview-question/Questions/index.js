import { Divider, Card, Tag, Image, Spin, Pagination } from "antd";
import Flex from "../../../../../../components/Flex";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showLoadingPreviewQuestions,
  fetchPreviewQuestions,
} from "../../../../../../redux/actions/question";

const Questions = ({ lang }) => {
  const [page, setPage] = useState(1);
  const { preview } = useSelector((state) => state.question);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (lang && userInfo.subjectId && page) {
      console.log(2222);
      dispatch(showLoadingPreviewQuestions());
      dispatch(
        fetchPreviewQuestions({
          lang,
          subject_id: userInfo.subjectId,
          page_id: page,
        })
      );
    }
  }, [lang, page, userInfo.subjectId]);

  const nextPage = (page) => {
    setPage(page);
  };

  return (
    <Spin spinning={preview.loading}>
      {preview.data.test_info && preview.data.all_items > 10 && (
        <div className="question__preview-pagination">
          <Pagination
          size="small"
            total={preview.data.all_items}
            current={page}
            onChange={nextPage}
          />
        </div>
      )}
      {preview.data.test_info.map((q, idx) => (
        <Card
          key={q.id}
          className="question__preview-card"
          title={
            <Flex alignItems="center" justifyContent="space-between">
              <div className="question__priview-header">
                <h4>№{idx + 1}</h4>
                <Divider type="vertical" />
                <h5>{q.name}</h5>
              </div>
              <div className="question__preview-images">
                {q.img_url_1 && (
                  <Image
                    width={50}
                    height={50}
                    src={`https://pizzamizza.uz/temp/${q.img_url_1}`}
                  />
                )}
                {q.img_url_2 && (
                  <Image
                    width={50}
                    height={50}
                    src={`https://pizzamizza.uz/temp/${q.img_url_2}`}
                  />
                )}
                {q.img_url_3 && (
                  <Image
                    width={50}
                    height={50}
                    src={`https://pizzamizza.uz/temp/${q.img_url_3}`}
                  />
                )}
              </div>
            </Flex>
          }
        >
          <div>
            <div className="question__preview-answer">
              <Tag
                color="green"
                style={{ alignSelf: "flex-start", marginRight: "1rem" }}
              >
                A
              </Tag>
              <div className="question__preview-answer-title">
                <p>{q.answer_1}</p>
                {q.answer_img_1 && (
                  <Image
                    width={50}
                    height={50}
                    src={`https://pizzamizza.uz/temp/${q.answer_img_1}`}
                  />
                )}
              </div>
            </div>
            <div className="question__preview-answer">
              <Tag style={{ alignSelf: "flex-start", marginRight: "1rem" }}>
                B
              </Tag>
              <div className="question__preview-answer-title">
                <p>{q.answer_2}</p>
                {q.answer_img_2 && (
                  <Image
                    width={50}
                    height={50}
                    src={`https://pizzamizza.uz/temp/${q.answer_img_2}`}
                  />
                )}
              </div>
            </div>
            <div className="question__preview-answer">
              <Tag style={{ alignSelf: "flex-start", marginRight: "1rem" }}>
                C
              </Tag>
              <div className="question__preview-answer-title">
                <p>{q.answer_3}</p>
                {q.answer_img_3 && (
                  <Image
                    width={50}
                    height={50}
                    src={`https://pizzamizza.uz/temp/${q.answer_img_3}`}
                  />
                )}
              </div>
            </div>
            <div className="question__preview-answer">
              <Tag style={{ alignSelf: "flex-start", marginRight: "1rem" }}>
                D
              </Tag>
              <div className="question__preview-answer-title">
                <p>{q.answer_4}</p>
                {q.answer_img_4 && (
                  <Image
                    width={50}
                    height={50}
                    src={`https://pizzamizza.uz/temp/${q.answer_img_4}`}
                  />
                )}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </Spin>
  );
};

export default Questions;

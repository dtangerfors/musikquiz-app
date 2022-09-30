import React, {useEffect} from "react";
import { graphql } from "gatsby";
import { useSelector, useDispatch } from "react-redux";
import { Layout } from "../../../components/Layout";
import Logo from "../../../components/Logo";

import bgImage from "../../../images/musikquiz-1-cover.webp";
import IndexButton from "../../../components/answers/IndexButton";

export const answerQuery = graphql`
  query ($id: String) {
    prismicQuiz(id: { eq: $id }) {
      data {
        theme_color
        body {
          ... on PrismicQuizDataBodyQuestion {
            id
            primary {
              answer {
                text
              }
              artist {
                text
              }
              question {
                text
              }
              song {
                text
              }
              time_limit
            }
          }
        }
        quiz_title {
          text
        }
      }
    }
  }
`;

const AnswerPage = ({ data }) => {
  const quiz = data.prismicQuiz.data;

  const dispatch = useDispatch();
  const questionIndex = useSelector((state) => state.index);
  const setQuestions = (value) => {
    dispatch({
      type: "SET_QUESTIONS",
      questions: value,
    });
  };
  const setThemeColor = (value) => {
    dispatch({
      type: "SET_THEME_COLOR",
      questions: value,
    });
  };

  useEffect(() => {
    dispatch({
      type: "SET_INDEX",
      index: 0
    })
  }, [])

  setQuestions(quiz.body);
  setThemeColor(quiz.theme_color);

  return (
    <Layout>
      <main style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="flex flex-col min-h-screen justify-between max-w-screen-lg mx-auto">
          <header className="w-32 mt-12">
            <Logo fillColor={quiz.theme_color} />
          </header>
          <div className="bg-white border-2 border-black flex flex-col my-auto">
            <div className="border-b-2 border-black">
              <ul className="flex">
                {quiz.body.map((question, index) => {
                  return (
                    <IndexButton index={index}/>
                  );
                })}
              </ul>
            </div>
            <div className="flex border-b-2 border-black">
              <div className="px-10 py-6 border-r-2 border-black flex-1">
                <p>
                  <span className="font-sans text-gray-500 uppercase text-sm">
                    Artist
                  </span>
                  <span className="block font-sans-condensed font-extrabold text-2xl">
                    {quiz.body[questionIndex].primary.artist.text}
                  </span>
                </p>
              </div>
              <div className="px-10 py-6 flex-1">
                <p>
                  <span className="font-sans text-gray-500 uppercase text-sm">
                    Låt
                  </span>
                  <span className="block font-sans-condensed font-extrabold text-2xl">
                    {quiz.body[questionIndex].primary.song.text}
                  </span>
                </p>
              </div>
            </div>
            <div>
              <div className="p-10 pb-6 pl-0 ml-10 border-b-2 border-gray-300">
                <span className="font-sans text-gray-500 uppercase text-sm">
                  Fråga
                </span>
                <p className="font-sans text-gray-700 text-sm max-w-prose">
                  {quiz.body[questionIndex].primary.question.text}
                </p>
              </div>
              <div className="p-10">
                <p className="block font-sans-condensed font-extrabold text-5xl">
                  {quiz.body[questionIndex].primary.answer.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AnswerPage;

export const Head = () => <title>Answers</title>;

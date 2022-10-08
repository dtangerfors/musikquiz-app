import React, { useEffect } from "react";
import { graphql } from "gatsby";
import { useSelector, useDispatch } from "react-redux";
import { useHotkeys } from "react-hotkeys-hook";
import { Layout } from "../../../components/Layout";
import Logo from "../../../components/Logo";

import bgImage from "../../../images/musikquiz-1-cover.webp";
import IndexButton from "../../../components/answers/IndexButton";
import AnswerPagination from "../../../components/answers/AnswerPagination";

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
        video_background {
          type
          url
          raw
        }
      }
    }
  }
`;

const AnswerPage = ({ data }) => {
  const quiz = data.prismicQuiz.data;

  const dispatch = useDispatch();
  const questionIndex = useSelector((state) => state.index);
  const questions = useSelector((state) => state.questions);

  const setQuestions = (value) => {
    dispatch({
      type: "SET_QUESTIONS",
      questions: value,
    });
  };

  const setThemeColor = (value) => {
    dispatch({
      type: "SET_THEME_COLOR",
      theme_color: value,
    });
  };

  useHotkeys(
    "right",
    () => {
      if (!(questionIndex >= questions.length - 1)) {
        dispatch({
          type: "INCREMENT",
          currentIndex: questionIndex,
        });
        dispatch({
          type: "SET_QUIZ_COMPONTENT",
          quiz_component: "song",
        });
      } else {
        return null;
      }
    },
    [questionIndex]
  );

  useHotkeys(
    "left",
    () => {
      if (questionIndex >= 1) {
        dispatch({
          type: "DECREMENT",
          currentIndex: questionIndex,
        });
        dispatch({
          type: "SET_QUIZ_COMPONTENT",
          quiz_component: "song",
        });
      }
    },
    [questionIndex]
  );

  // useEffect(() => {
  //   dispatch({
  //     type: "SET_INDEX",
  //     index: 0,
  //   });
  // });

  setQuestions(quiz.body);
  setThemeColor(quiz.theme_color);

  return (
    <Layout>
      <main>
        <div className="flex flex-col min-h-screen justify-between max-w-screen-lg mx-auto">
          <header className="w-32 mt-12">
            <Logo fillColor={quiz.theme_color} />
          </header>
          <div className="bg-white border-2 border-black flex flex-col my-auto">
            <div className="border-b-2 border-black">
              <AnswerPagination quiz={quiz.body} />
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
        {quiz.video_background.raw.kind === "image" ? (
          <figure className="absolute -z-10 w-full h-full inset-0">
            <img
              src={quiz.video_background.url}
              className="w-full h-full object-cover"
            />
          </figure>
        ) : (
          <figure className="absolute -z-10 w-full h-full inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={quiz.video_background.url}></source>
            </video>
          </figure>
        )}
      </main>
    </Layout>
  );
};

export default AnswerPage;

export const Head = () => <title>Answers</title>;

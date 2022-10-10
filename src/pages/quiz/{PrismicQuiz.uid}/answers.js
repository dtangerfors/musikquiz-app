import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import { useSelector, useDispatch } from "react-redux";
import { useHotkeys } from "react-hotkeys-hook";
import { motion } from "framer-motion";
import { fadeUp, transition } from "../../../animations";
import { Layout } from "../../../components/Layout";
import Logo from "../../../components/Logo";
import AnswerBoard from "../../../components/answers/AnswerBoard";

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

  const [showAnswers, setShowAnwers] = useState(false);

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


  useHotkeys(
    "space",
    () => {
      setShowAnwers(true)
    }
  );


  setQuestions(quiz.body);
  setThemeColor(quiz.theme_color);

  return (
    <Layout>
      <main>
        <div className="flex flex-col min-h-screen justify-between max-w-screen-lg mx-auto">
          <header className="w-32 mt-12">
            <Logo fillColor={quiz.theme_color} />
          </header>
          <AnswerBoard quiz={quiz} />
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

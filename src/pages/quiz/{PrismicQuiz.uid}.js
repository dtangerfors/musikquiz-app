import React, { useState } from "react";
import { graphql } from "gatsby";
import { Layout } from "../../components/Layout";

import bgImage from "../../images/musikquiz-1-cover.webp";
import Quiz from "../../components/Quiz";

export const query = graphql`
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

const SingleQuiz = ({ data }) => {
  const [isPlayed, setIsPlayed] = useState(false);

  if (!data) return null;
  const quiz = data.prismicQuiz.data;

  return (
    <Layout>
      <main style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="flex flex-col min-h-screen justify-center max-w-screen-lg mx-auto">
          {isPlayed ? <Quiz questions={quiz.body} /> : <><header className="py-24 flex flex-wrap flex-col justify-center items-center">
            <h1
              className="block font-sans-condensed font-extrabold text-5xl mb-8"
              style={{ color: quiz.theme_color }}
            >
              {quiz.quiz_title.text}
            </h1>
            <p className="font-sans text-white text-xl">
              {quiz.body.length} låtar • 1 fråga till varje låt
            </p>
          </header>
          <div>
            <button
              type="button"
              onClick={() => setIsPlayed(!isPlayed)}
              className="block bg-white border-2 border-black py-4 px-8 font-sans leading-none text-black text-lg uppercase rounded-full"
            >
              Starta quiz
            </button>
          </div></>}
        </div>
      </main>
    </Layout>
  );
};

export default SingleQuiz;

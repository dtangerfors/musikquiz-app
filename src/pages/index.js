import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import Card from "../components/Card";
import Logo from "../components/Logo";

import bgImage from "../images/musikquiz-1-cover.webp";

export const query = graphql`
  query {
    allPrismicQuiz {
      edges {
        node {
          data {
            quiz_title {
              text
            }
            cover_photo {
              url
              alt
            }
          }
          url
          uid
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  if (!data) return null;
  const quizzes = data.allPrismicQuiz.edges;

  return (
    <Layout>
      <main className="bg-black min-h-screen">
        <header
          className="border-b-2 border-white bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="flex flex-col max-w-screen-lg mx-auto pt-36 pb-56">
            <h1 className="font-sans-condensed font-extrabold text-4xl text-white">
              <span className="sr-only">Musikquiz</span>
              <span className="w-32 block">
                <Logo fillColor="#FFF" />
              </span>
            </h1>
          </div>
        </header>
        <div className="flex flex-col max-w-screen-lg mx-auto">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 -mt-20">
            {quizzes.map((quiz) => {
              return <Card key={`quiz-${quiz.node.uid}`} data={quiz} />;
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

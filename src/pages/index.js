import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import Card from "../components/Card";
import Logo from "../components/Logo";

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
      <main className="bg-black">
        <div className="flex flex-col min-h-screen max-w-screen-lg mx-auto">
          <header className="pt-24 pb-4 mb-8 border-b-2 border-white">
            <h1 className="font-sans-condensed font-extrabold text-4xl text-white">
              <span className="sr-only">Musikquiz</span>
              <span className="w-32 block"><Logo fillColor="#FFF"/></span>
            </h1>
          </header>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {quizzes.map(quiz => {
              return <Card key={`quiz-${quiz.node.uid}`} data={quiz} />
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

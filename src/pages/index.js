import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import Card from "../components/Card";

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

  console.log(quizzes)

  return (
    <Layout>
      <main>
        <div className="flex flex-col min-h-screen max-w-screen-lg mx-auto">
          <header className="pt-24 pb-4 mb-8 border-b-2 border-black">
            <h1 className="font-sans-condensed font-extrabold text-4xl text-black">
              Musikquiz
            </h1>
          </header>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {quizzes.map(quiz => {
              return <Card data={quiz} />
            })}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

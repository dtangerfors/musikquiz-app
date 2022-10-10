import React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../../../components/Layout";
import Logo from "../../../components/Logo";

export const finishedQuery = graphql`
  query ($id: String) {
    prismicQuiz(id: { eq: $id }) {
      data {
        theme_color
        video_background {
          type
          url
          raw
        }
      }
    }
  }
`;

const Finished = ({ data }) => {
  const quiz = data.prismicQuiz.data;

  return (
    <Layout>
      <main>
        <div className="flex flex-col min-h-screen justify-between max-w-screen-lg mx-auto">
          <header className="w-32 mt-12">
            <Logo fillColor={quiz.theme_color} />
          </header>
          <div className="my-auto">
            <p className="font-sans-condensed font-extrabold text-5xl text-white text-center mb-10">
              Dags för svaren …
            </p>
            <div className="flex justify-center">
              <Link
                to="../answers"
                className="block bg-white border-2 border-black py-4 px-8 font-sans leading-none text-black text-lg uppercase rounded-full"
              >
                Visa svar
              </Link>
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

export default Finished;

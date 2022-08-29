import * as React from "react"
import Counter from "../components/Counter"
import { Layout } from "../components/Layout"
import Pagination from "../components/Pagination"

import bgImage from "../images/musikquiz-1-cover.webp"

const QuestionPage = () => {
  return (
   <Layout>
      <main style={{backgroundImage: `url(${bgImage})`}}>
         <div className="flex flex-col min-h-screen justify-between max-w-screen-lg mx-auto">
            <Counter seconds={60} question={1}/>
            <section>
               <header className="py-24">
                  <h1 className="font-sans-condensed font-extrabold text-4xl text-[#b6e85f]">Låten är från hennes första album skrivet på svenska, och även det första albumet hon släppte under sitt egna namn. En av Sveriges största låtskrivare och sångare, som belönats med H.M. Konungens medalj i guld av 8:e storleken, har skrivit ett flertal låtar på albumet. Vad heter låtskrivaren?
</h1>
               </header>
            </section>
            <footer className="mb-12">
               <Pagination />
            </footer>
         </div>
      </main>
   </Layout>
    
  )
}

export default QuestionPage

export const Head = () => <title>Question</title>

import React from "react";
import { Link } from 'gatsby'
 
const Card = ({data}) => {
   if (!data) return null;
   const quiz = data.node;

   return (
      <Link to={quiz.url} className="border-2 border-black">
         <figure className="border-b-2 border-black"><img src={quiz.data.cover_photo.url} alt={quiz.data.cover_photo.alt}/></figure>
         <div className="p-4 py-2">
            <p className="text-lg">{quiz.data.quiz_title.text}</p>
         </div>
      </Link>
   )
}

export default Card
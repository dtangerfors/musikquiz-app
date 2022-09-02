import { createStore as reduxCreateStore } from "redux";

const initState = {
  options: {
    loading: false,
    question_category: ``,
    question_difficulty: ``,
    question_type: ``,
    amount_of_questions: 50,
  },
  questions: [],
};

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_QUESTIONS":
      return {
        ...state,
        questions: action.questions,
      };
    default:
      return state;
  }
};

const createStore = () => reduxCreateStore(Reducer, initialState);
export default createStore;

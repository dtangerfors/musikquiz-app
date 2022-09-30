import { createStore as reduxCreateStore } from "redux";

const initState = {
  index: 0,
  questions: [],
  theme_color: "#b6e85f",
};

const Reducer = (state = initState, action) => {
  console.log(state, action);

  switch (action.type) {
    case "SET_INDEX":
      return {
        ...state,
        index: action.index,
      };
    case "INCREMENT":
      return {
        ...state,
        index: action.currentIndex + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        index: action.currentIndex - 1,
      };
    case "SET_QUESTIONS":
      return {
        ...state,
        questions: action.questions,
      };
      case "SET_THEME_COLOR":
      return {
        ...state,
        theme_color: action.theme_color,
      };
    default:
      return state;
  }
};

const createStore = () => reduxCreateStore(Reducer, initState);
export default createStore;

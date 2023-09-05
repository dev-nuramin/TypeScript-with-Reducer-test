import { useReducer } from "react";
import { counterReducerType, counterState } from "../types/Types";

const initialState = {
  count: 0,
};

const counterReducer = (
  state: counterState,
  { type, payload }: counterReducerType
) => {
  switch (type) {
    case "desc":
      return {
        count: state.count - 1,
      };
    case "inc":
      return {
        count: state.count + 1,
      };
    case "reset":
      return {
        count: 0,
        payload,
      };

    default:
      return state;
      break;
  }
};
const Counter = () => {
  const [countMe, dispatch] = useReducer(counterReducer, initialState);
  return (
    <>
      <h1>{countMe.count}</h1>
      <button onClick={() => dispatch({ type: "desc" })}>--</button>
      <button onClick={() => dispatch({ type: "inc" })}>++</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default Counter;

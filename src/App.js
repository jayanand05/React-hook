import logo from "./logo.svg";
import "./App.css";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import EffectCounter from "./components/EffectCounter";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import DataFetching2 from "./components/DataFetching2";
import DataFetching3 from "./components/DataFetching3";
import ComponentC from "./components/ComponentC";
import React from "react";
import ReducerCount from "./components/ReducerCount";
import ReducerCount2 from "./components/ReducerCount2";
import HookCounterFour from "./components/HookCounterFour";
import ParentComponent from "./components/ParentComponent";
import Counter from "./components/Counter";
import FocusInput from "./components/FocusInput";

export const UserContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

function App() {
  return (
    <div className="App">
      {/* <ParentComponent /> */}
      {/* <Counter /> */}
      <FocusInput />
    </div>
  );
}

//const [count, dispatch] = useReducer(reducer, initialState);
// <UserContext.Provider
//   value={{ countState: count, countDispatch: dispatch }}
// >
//</UserContext.Provider>
{
  /* <HookCounter /> */
}
{
  /* <HookCounterTwo /> */
}
{
  /* <HookCounterThree /> */
}
{
  /* <HookCounterFour /> */
}
{
  /* <EffectCounter /> */
}
{
  /* <HookMouse /> */
}
{
  /* <MouseContainer /> */
}
{
  /* <IntervalHookCounter /> */
}
{
  /* <DataFetching /> */
}
{
  /* <DataFetching2 /> */
}
{
  /* <DataFetching3 /> */
}
{
  /* <ReducerCount /> */
}
{
  /* <ReducerCount2 /> */
}

export default App;

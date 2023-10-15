import React, { useContext } from "react";
import { UserContext } from "../App";

function ComponentF() {
  const user = useContext(UserContext);
  return (
    <div>
      <button onClick={() => user.countDispatch("increment")}>Increment</button>
      <button onClick={() => user.countDispatch("decrement")}>Decrement</button>
      <button onClick={() => user.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentF;

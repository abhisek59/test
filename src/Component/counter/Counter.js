import React, { useReducer } from "react";
import { counterReducer } from "../../Reducer/CounterReducer";

function Coun() {
  const [state, dispatch] = useReducer(counterReducer, { age: 5 });

  const handleClick = () => {
    dispatch({ type: "incremented_age" });
  };

  return (
    <div>
      <button onClick={handleClick}>Incremented age</button>
      {state.age}
    </div>
  );
}

export default Coun;

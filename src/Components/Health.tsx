import React, { useState } from "react";
import AddHealth from "./AddHealth";
// import SetHealth from "./SetHealth";
import SubtractHealth from "./SubtractHealth";

const Health = (props?: any) => {
  
  const [health, setHealth] = useState(0);
  const healthList: number[]|number = [];

  const onChangeHandler = (event?: any) => {
    setHealth(event.target.value)
  };

  const onSubmitHandler = (event?: any) => {
    event.preventDefault();
    healthList.push(health)
  };

  const healthForm = (
    <form onSubmit={onSubmitHandler}>
      <label>
        Input Health:
        <input type={"number"} name="setHealth" onChange={onChangeHandler}/>
        <button type="submit">Add</button>
      </label>
    </form>
  );

  return (
    <div className="health-wrapper">
      <div>{healthForm}</div>
      <div className="health">{health}</div>
      <AddHealth />
      <SubtractHealth />
    </div>
  );
};

export default Health;

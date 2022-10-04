import React, { useState } from "react";
import AddHealth from "./AddHealth";
// import SetHealth from "./SetHealth";
import SubtractHealth from "./SubtractHealth";

const Health = (props?: any) => {
  const [health, setHealth] = useState<number>(0);
  const healthList: number[] = [];

  const onChangeHandler = (event?: any) => {
    const newHealth = event.target.value;
    setHealth((prevState) => ([...health, newHealth]));
  };

  const onSubmitHandler = (event?: any) => {
    event.preventDefault();
    healthList.push(health);
    console.log(health, healthList);
  };

  const healthForm = (
    <form onSubmit={onSubmitHandler}>
      <label>
        Input Health:
        <input type={"number"} name="setHealth" onChange={onChangeHandler} />
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

import { Child } from "./Child";

const Parent = () => {
  return <Child color="red" onClick={() => console.log("eren")} />;
};

export default Parent;

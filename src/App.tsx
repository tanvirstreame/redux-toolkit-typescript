
import logo from './logo.svg';
import './App.css';
import { FC } from "react";
import { useSelector } from "./redux/store";
import { useDispatch } from "react-redux";
import { additional, subtraction } from "./redux/slice/counterSlice";

const App: FC = () => {
  const count = useSelector((state: any) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(additional(1))}>UP</button>
      <button onClick={() => dispatch(subtraction(1))}>DOWN</button>
    </div>
  );
};

export default App;

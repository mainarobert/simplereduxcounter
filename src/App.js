import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";

function App() {
  const count = useSelector( state => state.counter.count);
  const dispach = useDispatch()

  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <button onClick={()=>dispach(increment())}>increment</button>
      <button onClick={()=>dispach(decrement())}>decrement</button>
      <button onClick={()=>dispach(incrementByAmount(5))}>increment by 5</button>
    </div>
  );
}

export default App;

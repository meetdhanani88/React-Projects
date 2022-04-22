import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';
import { fetchfake } from '../store/counter';
const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const Toggle = useSelector(state => state.counter.Toggle)
  const data = useSelector(state => state.counter.data)


  console.log(data);
  const toggleCounterHandler = () => {
    dispatch(counterActions.Toggle())
  };

  function increment() {
    dispatch(counterActions.increment(5))
    dispatch(fetchfake())
  }
  function decrement() {
    dispatch(counterActions.decrement())
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {Toggle && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </main>
  );
};

export default Counter;

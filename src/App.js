import "./App.css";
import MyContext from "./MyContext";

function App() {
  const contextValue = {
    data: " hello data from mycontext",
  };
  // const [count, setCount] = useState(0);

  // const squaredCount = useMemo(() => {
  //   console.log("computing squared count");
  //   return count * count;
  // }, [count]);

  return (
    <div className="App">
      {/* <p>count: {count}</p> */}
      {/* <p>squared count: {squaredCount}</p> */}

      {/* <button onClick={() => setCount(count + 1)}>increase count</button> */}
    </div>
  );
}

export default App;

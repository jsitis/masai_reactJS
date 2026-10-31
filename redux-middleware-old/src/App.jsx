import "./App.css";
import ClickButton from "./components/ClickButton";
import Counter from "./components/Counter";
import { increment } from "./redux/action";
import store from "./redux/store";

function App() {

  return (
    <>
      <Counter />
    </>
  );
}

export default App;

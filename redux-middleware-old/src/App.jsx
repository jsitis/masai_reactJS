import "./App.css";
import ClickButton from "./components/ClickButton";
import { increment } from "./redux/action";
import store from "./redux/store";

function App() {
  console.log("initial state:", store.getState());

  store.dispatch(increment());

  console.log("Updated State:", store.getState());

  return (
    <>
      <ClickButton />
    </>
  );
}

export default App;

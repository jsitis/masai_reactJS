import { useState, createContext } from "react";
import "./App.css";
import { useContext } from "react";
import { DataComponent } from "./context/DataComponent";

/* Below program shows working of context API. 

const UserContext = createContext();

function App() {
  const [user, setUser] = useState("John");

  return (
    <UserContext.Provider value={user}>
      <Parent />
    </UserContext.Provider>
  );
}

function Parent() {
  return <Child />;
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  const user = useContext(UserContext)
  return <h1>Hello, {user}</h1>;
} */

/* Below program shows how to create a reusable wrapper component using the children prop.

function Box({ children }) {
  return (
    <div style={{ border: "2px solid red", padding: "10px", margin: "10px" }}>
      {children}
    </div>
  );
}

function App() {
  return (
    <>
      <Box>
        <h1>Hello from React!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          nemo?
        </p>
      </Box>
      <Box>
        <h1>Hello from React!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, ullam
          voluptates? Non accusamus sapiente eaque.
        </p>
      </Box>
    </>
  );
} */

function App() {
  return (
    <>
      <h1>Hello from React!</h1>
      <DataComponent />
    </>
  );
}

export default App;

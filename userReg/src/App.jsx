import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Select from "./components/Select";
import Button from "./components/Button";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  function handleRegister() {
    if (!name || !email || !password || !role) {
      alert("Please fill all fields");
      return;
    }
    alert(`User Registered: \n\n Name: ${name}\n Role: ${role}`);
    setName("");
    setEmail("");
    setPassword("");
    setRole("");
  }

  return (
    <>
      <h1>Registration Form</h1>
      <Input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        type="email"
        value={email}
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        value={password}
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Select
        options={["Manager", "Developer", "Designer"]}
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <Button text="Register" onClick={handleRegister} />
    </>
  );
}

export default App;

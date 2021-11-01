import React, { useState } from "react";

import "./App.css";
import Input from "./components/Input";
import Card from "./components/Card";

interface Person {
  name: string;
  hobby: string;
  age: number;
}

function App() {
  const [list, setList] = useState<Person[]>([] as Person[]);
  const [name, setName] = useState<string>("");
  const [hobby, setHobby] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  const handleSubmit = (name: string, hobby: string, age: number) => {
    const person = { name, hobby, age };

    setList([...list, person]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Input placeholder="nome" onChange={(e) => setName(e.target.value)} />
        <Input placeholder="hobby" onChange={(e) => setHobby(e.target.value)} />
        <Input
          placeholder="age"
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <button onClick={() => handleSubmit(name, hobby, age)}>Enviar</button>
        <div className="container__Card">
          {list.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              hobby={item.hobby}
              age={item.age}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;

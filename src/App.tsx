import React, { useState } from 'react';
import { List } from './components/List';
import './App.css';

export interface IPeople {
  name: string,
  image: string,
  note?: string,
  addPeople: number
}

function App() {

  const [people, setPeople] = useState<IPeople[] | undefined>();

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
    </div>
  );
}

export default App;

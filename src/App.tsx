import { useState } from 'react';
import { List } from './components/List';
import { AddToList } from './components/AddToList';
import './App.css';

export interface IPerson {
  name: string,
  image: string,
  note?: string,
  addPeople: number
}

export interface IPeople {
  people: IPerson[]
}

function App() {
  const [people, setPeople] = useState<IPeople['people']>([]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;

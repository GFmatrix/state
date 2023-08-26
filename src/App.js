import React from 'react';
import Accordion from './pages/home'; // Adjust the import path based on your project structure

const data = [
  {
    header: "Accordion Header 1",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: 0,
  },
  {
    header: "Accordion Header 2",
    body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    id: 1,
  },
  {
    header: "Accordion Header 3",
    body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    id: 2,
  },
];

function App() {
  return (
    <div className="App">
      <h1>Accordion Example</h1>
      <Accordion data={data} />
    </div>
  );
}

export default App;

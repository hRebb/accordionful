import React from 'react';
import AccordionMenu, { AccordionItemProps } from './Components/AccordionMenu';
import './App.css';


const items: AccordionItemProps[] = [
  {
    title: "Item 1",
    content: "Contenu de l'item 1",
  },
  {
    title: "Item 2",
    content: "Contenu de l'item 2",
  },
  {
    title: "Item 3",
    content: "Contenu de l'item 3",
  },
];

const App = () => {
  return (
    <div className='App'>
      <h1>Menu en accordion</h1>
      <AccordionMenu items={items} />
    </div>
  );
};

export default App;

import "./App.css";
// import CardDetails from "./CardDetails";
// import CreateCard from "./CreateCard";

import React, { useState, createContext } from "react";
import CreateListContext from "./CreateListContext";


export const CardContext = createContext(null);

function App() {
  
  return (
    // <CardContext.Provider value={{cardData, setCardData}}>
<div className="App">
      <nav className="navbar">App bar</nav>
      <nav className="board">Board</nav>
      {/* <div className="board-columns">

        <div className="card-container">
          {cardData.map((card, index) => (
            <CardDetails card={card} erase={()=> deleteCard(index)} key={index} />
          ))}
          <CreateCard className="card" addNewCard={addNewCard} />
        </div> 
      </div> */}
      <div>
        
      <CreateListContext />
      </div>
      
    </div>
    // </CardContext.Provider>
    
  );
}

export default App;

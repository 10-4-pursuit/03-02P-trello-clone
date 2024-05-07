import React, { useEffect, useState, createContext } from "react";
import  CardDetails  from "./CardDetails";

export const CardContext = createContext(null);

function CreateCard({}) {
  const [cardData, setCardData] = useState([]);
  const [newCardData, setNewCardData] = useState({
    title: "",
    description: "",
    label: "",
    dueDate: "",
    comment: "",
  });

  const [editingIndex, setEditingIndex] = useState(-1);

  /*function to create a new card with its own parameter that will be referenced in
the component it is passed to. setCardData updates the card data array by
making a copy of it and referencing the parameter to a different state*/
  const addNewCard = () => {
    if(newCardData.title)
    setCardData((prev) => [...prev, newCardData]);
    resetForm();
  };

  /* creates a copy of cardData and removes 1 element from the array at the specified
index, then updates the card data array*/
  const deleteCard = (index) => {
    setCardData((prev) => prev.filter((_, i) => i !== index));
  };

  /*we pass editcard 2 parameters one being the index to find the card
we want to edit, and a parameter to reference t=a copy of the card at that given index.
we make a copy of card data and go to the index of the card we want and copy it into
newcardtoedit */
  const editCard = (editData) => {
    setCardData((prev) =>
      prev.map((item, index) => (index === editingIndex ? editData : item))
    );
    resetForm();
  };

  const updateCardInfo = (key, value) => {
    setNewCardData((prev) => ({ ...prev, [key]: value }));
  };

  const resetForm = () => {
    setNewCardData({
      title: "",
      description: "",
      label: "",
      dueDate: "",
      comment: "",
    });
    setEditingIndex(-1);
  };

  const onFormSubmit = (event) => {
    alert("works fine")
    event.preventDefault();
    if (editingIndex !== -1) {
      editCard();
    } else {
      addNewCard();
    }

    console.log("test-card")
  };

  return (
    <CardContext.Provider
      value={{
        cardData,
        setCardData,
        newCardData,
        setNewCardData,
        addNewCard,
        editCard,
        deleteCard,
        updateCardInfo,
        setEditingIndex,
      }}
    >
      <form onSubmit={onFormSubmit}>
        <div className="cardForm">
          <input
            type="text"
            value={newCardData.title}
            onChange={(e) => updateCardInfo("title", e.target.value)}
            placeholder="Enter a title for the card"
          ></input>
          <textarea
            value={newCardData.description}
            onChange={(e) => updateCardInfo("description", e.target.value)}
            placeholder="Description"
          ></textarea>

          <select
            name="label"
            id="label"
            value={newCardData.label}
            onChange={(e) => updateCardInfo("label", e.target.value)}
          >
            <option value="placeholder">Choose an option</option>
            <option value="Urgent">Urgent</option>
            <option value="High Priority">High Priority</option>
            <option value="Medium Priority">Medium Priority</option>
            <option value="Low Priority">Low Priority</option>
            <option value="Optional">Optional</option>
          </select>
          <label htmlFor="dueDate"> Choose Due Date</label>
          <input
            type="date"
            id="dueDate"
            value={newCardData.dueDate}
            onChange={(e) => updateCardInfo("dueDate", e.target.value)}
            placeholder="Choose Due Date"
          ></input>
          <textarea
            value={newCardData.comment}
            onChange={(e) => updateCardInfo("comment", e.target.value)}
            placeholder="Enter comments"
          ></textarea>
          <input type="submit" value="Add Card" />
        </div>
        <div>
          {cardData.map((card, index) => (
            <CardDetails card={card} key={index} index={index} />
          ))}
        </div>
      </form>
    </CardContext.Provider>
  );
}

export default CreateCard;

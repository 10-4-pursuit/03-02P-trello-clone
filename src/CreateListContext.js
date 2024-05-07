import React, { useState, createContext } from "react";
import ListDetailsContext from "./ListDetailsContext";
import CreateCard from "./CreateCard";

export const ListContext = createContext(null);

function CreateListContext() {
  const [listData, setListData] = useState([]);
  const [title, setTitle] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setListData([...listData, title]);
    setTitle("");
  };

  const deleteList = (index) => {
    setListData((currentList) => currentList.filter((_, i) => i !== index));
  };

  const editList = (index, newData) => {
    setListData((currentList) =>
      currentList.map((item, i) => (i === index ? newData : item))
    );
  };

  return (
    <ListContext.Provider
      value={{ listData, setListData, editList, deleteList }}
    >
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter a title for the list"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        ></input>
        <button type="submit">Add a list</button>
       
      </form>
      <div>
          {listData.map((list, index) => (
            <>
              <ListDetailsContext list={list} key={index} index={index} />
              <CreateCard />
            </>
          ))}
        </div>
    </ListContext.Provider>
  );
}

export default CreateListContext;

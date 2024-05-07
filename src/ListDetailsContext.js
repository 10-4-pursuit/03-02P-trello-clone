import React, { useContext, useState } from "react";
import { ListContext } from "./CreateListContext";

const ListDetails = ({ list, index }) => {
  const { deleteList, editList } = useContext(ListContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(list);

  const handleEdit = () => {
    editList(index, newTitle);
    setIsEditing(false);
  };

  return (
    <div className="new-list">
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <p>{list}</p>
      )}
      <button type="button" onClick={() => deleteList(index)}>
        Delete List
      </button>
      {isEditing ? (
        <button type="button" onClick={handleEdit}>
          Save
        </button>
      ) : (
        <button type="button" onClick={() => setIsEditing(true)}>
          Edit List
        </button>
      )}

    </div>
  );
};

export default ListDetails;

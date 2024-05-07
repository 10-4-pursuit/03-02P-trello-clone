import React, { useContext, useState } from "react";
import { CardContext } from "./CreateCard";

const CardDetails = ({ card, key, index }) => {
  const { deleteCard, editCard, setEditingIndex} = useContext(CardContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...card });

  const handleEditChange = (field, value) => {
    setEditData((prev) => ({ ...prev, [field]: value }));
  };

  const saveEdits = () => {
    editCard(editData);
    setIsEditing(false);
  };
  return (
    <div className="filled-card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editData.title}
            onChange={(e) => handleEditChange("title", e.target.value)}
          />
          <textarea
            value={editData.description}
            onChange={(e) => handleEditChange("description", e.target.value)}
          />
          <input
            type="text"
            value={editData.label}
            onChange={(e) => handleEditChange("label", e.target.value)}
          />
          <input
            type="date"
            value={editData.dueDate}
            onChange={(e) => handleEditChange("dueDate", e.target.value)}
          />
          <textarea
            value={editData.comment}
            onChange={(e) => handleEditChange("comment", e.target.value)}
          />
          <button onClick={saveEdits}>Save</button>
        </>
      ) : (
        <>
          <p>{card.title}</p>
          <p>{card.description}</p>
          <p>{card.label}</p>
          <p>{card.dueDate}</p>
          <p>{card.comment}</p>
          <button type="button" onClick={() => deleteCard(index)}>
            Delete Card
          </button>
          <button type="button" onClick={() => {setEditingIndex(index); setIsEditing(true)} }>
            Edit Card
          </button>
        </>
      )}
    </div>
  );
};

export default CardDetails;

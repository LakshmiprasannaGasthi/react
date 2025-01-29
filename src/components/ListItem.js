import React from "react";

const ListItem = ({ details, onDelete, image }) => (
  <li className="list-item">
    {Object.entries(details).map(([key, value]) => (
      <p key={key}>
        <strong>{key.replace(/([A-Z])/g, " $1")}:</strong> {value}
      </p>
    ))}
    {image && (
      <img src={image} alt="Item" style={{ maxWidth: "100px", maxHeight: "100px" }} />
    )}
    <button className="small-btn" onClick={onDelete}>
      Delete
    </button>
  </li>
);

export default ListItem;

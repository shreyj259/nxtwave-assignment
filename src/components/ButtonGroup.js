import React from "react";

const ButtonGroup = ({ selectedTag, handleBtnClick }) => {
  return (
    <div className="btn-group">
      <button
        onClick={() => handleBtnClick("resources")}
        className={`${selectedTag === "resources" ? "active-btn" : ""}`}
      >
        Resources
      </button>
      <button
        onClick={() => handleBtnClick("request")}
        className={`${selectedTag === "request" ? "active-btn" : ""}`}
      >
        Requests
      </button>
      <button
        onClick={() => handleBtnClick("user")}
        className={`${selectedTag === "user" ? "active-btn" : ""}`}
      >
        Users
      </button>
    </div>
  );
};

export default ButtonGroup;

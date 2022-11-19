import React from "react";
import Card from "./Card";
import "./styles/cardcontainer.css";

const CardContainer = ({ data, indexOfFirstPost, indexOfLastPost }) => {
  return (
    <div className="flex-container card-container">
      {data.slice(indexOfFirstPost, indexOfLastPost).map((item) => {
        return (
          <Card
            key={item.id}
            title={item.title}
            icon={item.icon_url}
            link={item.link}
            description={item.description}
            category={item.category}
          />
        );
      })}
    </div>
  );
};

export default CardContainer;

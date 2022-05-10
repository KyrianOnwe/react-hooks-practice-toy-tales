import React from "react";

function ToyCard(card) {
  console.log(card)
  const { id, name, image } = card
  return (
    <div className="card" id={id}>
      <h2>{name /* Toy's Name */ }</h2>
      <img
        src={image /* Toy's Image */}
        alt={name /* Toy's Name */}
        className="toy-avatar"
      />
      <p>{"" /* Toy's Likes */} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

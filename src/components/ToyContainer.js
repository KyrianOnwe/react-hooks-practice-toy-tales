import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer(toys) {
  const tOys = toys.toys
  return (
    <div id="toy-collection">{/* Render the collection of ToyCards */tOys.map((toy) => <ToyCard id={toy.id} name={toy.name} image={toy.image} key={toy.id} />)}
    </div>
  );
}

export default ToyContainer;

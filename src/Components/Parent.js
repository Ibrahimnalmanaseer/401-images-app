import React, { useState } from "react";

import ImageCard from "./Card";
import '../Styles/Card.css'

function Parent() {

  
  const [image] = useState([
    "https://i.pinimg.com/originals/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg",
    "https://static.sadhguru.org/d/46272/1633199491-1633199490440.jpg",
    "https://wallpapercave.com/wp/u9AVLry.jpg",
  ]);
  const [title] = useState(["nature1", "nature2", "nature3"]);
  const [id] = useState([1, 2, 3]);
  const [totallikes, settotallikes] = useState(0);

  const increaseTotallikes = () => {
    settotallikes(totallikes + 1);
  };

  return (
    <>
    <div>
      <h1>Total Likes : {totallikes}</h1>
      </div>
      <div className="allcards">
      {image.map((value, index) => (
        <ImageCard
          image={image[index]}
          title={title[index]}
          id={id[index]}
          increaseTotallikes={increaseTotallikes}
        />
      ))}
      </div>
    </>
  );
}

export default Parent;

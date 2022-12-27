import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import '../Styles/Card.css'

function ImageCard(props) {
  const [likes, setlikes] = useState(0);

  const increaseCardlikes = () => {
    props.increaseTotallikes();

    setlikes(likes + 1);
  };

  return (

    <Card classname='card' border="primary" style={{ width: "18rem" }}>
      <Card.Img  classname='cardimage' variant="top" src={props.image} onClick={increaseCardlikes} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          id : {props.id}
         
        </Card.Text>
        <Card.Text>
          
          Likes: {likes}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default ImageCard;

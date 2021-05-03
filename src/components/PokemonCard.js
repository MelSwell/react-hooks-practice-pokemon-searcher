import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, sprites }) {
  const [isFacingForward, setIsFacingForward] = useState(true)

  function flipImage() {
    setIsFacingForward((isFacingForward) => !isFacingForward)
  }

  return (
    <Card>
      <div onClick={flipImage}>
        <div className="image">
          <img src={isFacingForward ? sprites.front : sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

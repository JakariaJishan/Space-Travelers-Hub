import React from "react";

function ActiveRocket({ activeRocket }) {
  return <div>
    <h3>{activeRocket.rocket.name}</h3>
  </div>;
}

export default ActiveRocket;

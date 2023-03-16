import React from 'react';
import '../style/profile.css';

function ActiveRocket({ activeRocket }) {
  return (
    <div>
      <p className="activ">{activeRocket.name}</p>
    </div>
  );
}

export default ActiveRocket;

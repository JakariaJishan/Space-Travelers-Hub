import React from 'react';
import '../style/profile.css';

function ActiveMission({ activeMission }) {
  return (
    <div>
      <p className="activ">{activeMission.mission_name}</p>
    </div>
  );
}

export default ActiveMission;

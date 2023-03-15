import React from 'react';

function ActiveMission({ activeMission }) {
  return (
    <div>
      <h3>{activeMission.mission_name}</h3>
    </div>
  );
}

export default ActiveMission;

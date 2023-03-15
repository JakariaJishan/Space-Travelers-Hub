import React from 'react';

function RenderMissions({ mission, handleJoin, handleLeave }) {
  const id = mission.mission_id;
  const name = mission.mission_name;
  const { reserved } = mission;
  return (
    <div>
      id:
      {id}
      {' '}
      | mission name:
      {' '}
      {name}
      {reserved ? <b>Active Member</b> : <b>NOT A MEMBER</b>}
      {reserved ? (
        <button type="button" onClick={() => handleLeave(id)}>
          Leave Mission
        </button>
      ) : (
        <button type="button" onClick={() => handleJoin(id)}>
          Join Mission
        </button>
      )}
    </div>
  );
}

export default RenderMissions;

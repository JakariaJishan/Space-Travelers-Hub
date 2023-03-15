import React from 'react';
import '../style/missions.css';

function RenderMissions({ mission, handleJoin, handleLeave }) {
  const { description } = mission;
  const name = mission.mission_name;
  const id = mission.mission_id;
  const { reserved } = mission;
  return (
    <div className="mission_container">
      <div className="mission-name"><h3>{name}</h3></div>
      <div className="description">{description}</div>
      <div className="status">{reserved ? <b className="cyan">Active Member</b> : <b className="gray">NOT A MEMBER</b>}</div>
      <div className="toogle">
        {reserved ? (
          <button type="button" onClick={() => handleLeave(id)} className="red">Leave Mission</button>
        ) : (
          <button type="button" onClick={() => handleJoin(id)}>
            Join Mission
          </button>
        )}
      </div>
    </div>
  );
}

export default RenderMissions;

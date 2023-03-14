import React from "react";

function RenderMissions({ mission, handleJoin, handleLeave }) {
  const { mission_id, mission_name, reserved } = mission;
  return (
    <div>
      id:{mission_id} | mission name: {mission_name}
      {reserved ? <b>Active Member</b> : <b>NOT A MEMBER</b>}
      {reserved ? (
        <button type="button" onClick={() => handleLeave(mission_id)}>
          Leave Mission
        </button>
      ) : (
        <button type="button" onClick={() => handleJoin(mission_id)}>
          Join Mission
        </button>
      )}
    </div>
  );
}

export default RenderMissions;

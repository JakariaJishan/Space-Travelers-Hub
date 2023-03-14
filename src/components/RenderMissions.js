import React from 'react';

function RenderMissions({mission, handleJoin}) {
    const {mission_id, mission_name} = mission
  return (
    <div>
        id:{mission_id} |
        mission name: {mission_name}
        <button type='button' onClick={()=> handleJoin(mission_id)}>Join Mission</button>
    </div>
  )
}

export default RenderMissions
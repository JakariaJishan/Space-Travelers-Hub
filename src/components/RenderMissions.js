import React from 'react';

function RenderMissions({mission}) {
    const {mission_id, mission_name} = mission
  return (
    <div>
        id:{mission_id} |
        mission name: {mission_name}
    </div>
  )
}

export default RenderMissions
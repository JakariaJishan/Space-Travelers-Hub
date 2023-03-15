import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinMissions, leaveMissions } from '../app/missions/missionsSlice';
import RenderMissions from './RenderMissions';

function Missions() {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  const handleJoin = (id) => {
    dispatch(joinMissions(id));
  };
  const handleLeave = (id) => {
    dispatch(leaveMissions(id));
  };
  

  return (
    <div>
      {missions.map((mission) => (
        <RenderMissions
          key={mission.mission_id}
          mission={mission}
          handleJoin={handleJoin}
          handleLeave={handleLeave}
        />
      ))}
    </div>
  );
}

export default Missions;

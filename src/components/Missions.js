import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinMissions, leaveMissions } from '../app/missions/missionsSlice';
import RenderMissions from './RenderMissions';
import '../style/missions.css';

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
    <div className="otro">
      <div className="mission_container">
        <h2 className="table"> Mission</h2>
        <h2 className="table"> Description</h2>
        <h2 className="table"> Status</h2>
        <h2 className="table"> </h2>
      </div>
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

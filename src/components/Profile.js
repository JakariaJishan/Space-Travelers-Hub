import React from 'react';
import { useSelector } from 'react-redux';
import ActiveMission from './ActiveMission';
import ActiveRocket from './ActiveRockets';

function Profile() {
  const missions = useSelector((state) => state.missions.missions);
  const activeMissions = missions.filter((mission) => mission.reserved);
  const rockets = useSelector((state) => state.rockets.rockets);
  const activeRocket = rockets.filter((rocket) => rocket.reserved);
  return (
    <div>
      {activeMissions.map((activeMission) => (
        <ActiveMission
          key={activeMission.mission_id}
          activeMission={activeMission}
        />
      ))}
      {activeRocket.map((activeRocket) => (
        <ActiveRocket
          key={activeRocket.id}
          activeRocket={activeRocket}
        />
      ))}

    </div>
  );
}

export default Profile;

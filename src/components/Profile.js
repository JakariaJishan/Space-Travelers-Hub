import React from 'react';
import { useSelector } from 'react-redux';
import ActiveMission from './ActiveMission';
import ActiveRocket from './ActiveRockets';
import '../style/profile.css';

function Profile() {
  const missions = useSelector((state) => state.missions.missions);
  const activeMissions = missions.filter((mission) => mission.reserved);
  const rockets = useSelector((state) => state.rockets.rockets);
  const activeRocket = rockets.filter((rocket) => rocket.reserved);
  return (
    <div className="profile">
      <section className="myMission">
        <h2>My Missions</h2>
        {activeMissions.map((activeMission) => (
          <ActiveMission
            key={activeMission.mission_id}
            activeMission={activeMission}
          />
        ))}
      </section>
      <section className="myRockets">
        <h2>My Rockets</h2>
        {activeRocket.map((activeRocket) => (
          <ActiveRocket
            key={activeRocket.id}
            activeRocket={activeRocket}
          />
        ))}
      </section>
    </div>
  );
}

export default Profile;

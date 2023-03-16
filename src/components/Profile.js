import React from 'react';
import { useSelector } from 'react-redux';
import '../style/profile.css';
import ActiveMission from './ActiveMission';
import ActiveRocket from './ActiveRockets';

function Profile() {
  const missions = useSelector((state) => state.missions.missions);
  const activeMissions = missions.filter((mission) => mission.reserved);
  const rockets = useSelector((state) => state.rockets.rockets);
  const activeRocket = rockets.filter((rocket) => rocket.reserved);

  return (
    <>
      <div className="profile">
        <section className="myMission">
          <h2>My Missions</h2>
          {activeMissions[0]
            && activeMissions.map((activeMission) => (
              <ActiveMission
                key={activeMission.mission_id}
                activeMission={activeMission}
              />
            ))}
          {!activeMissions[0] && <p>No Missions Activated</p>}
        </section>

        <section className="myRockets">
          <h2>My Rockets</h2>
          {activeRocket[0]
            && activeRocket.map((activeRocket) => (
              <ActiveRocket key={activeRocket.id} activeRocket={activeRocket} />
            ))}
          {!activeRocket[0] && <p>No Rockets Found</p>}
        </section>
      </div>
    </>
  );
}

export default Profile;

import React from "react";
import { useSelector } from "react-redux";
import ActiveMission from "./ActiveMission";
import ActiveRocket from "./ActiveRockets";
import Rockets from "./Rockets";

function Profile() {
  const missions = useSelector((state) => state.missions.missions);
  const activeMissions = missions.filter((mission) => mission.reserved);
  const rockets = useSelector((state) => state.rockets.rockets);
  const activeRocket = rockets.filter((rocket) => rocket.reserved);
  console.log(activeRocket);
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
      {/* <section>
      <h2>My Rockets</h2>
        <ul>
          {rockets.filter((rocket) => rocket.reserved).map((rocket) => (
            <li key={rocket.id}>
              {rocket.name}
            </li>
          ))}
        </ul>
      </section> */}
    </div>
  );
}

export default Profile;

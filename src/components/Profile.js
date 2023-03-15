import React from "react";
import { useSelector } from "react-redux";
import ActiveMission from "./ActiveMission";
import ActiveRocket from "./ActiveRockets";

function Profile() {
  const missions = useSelector((state) => state.missions.missions);
  const activeMissions = missions.filter((mission) => mission.reserved);
  return (
    <div>
      {activeMissions.map((activeMission) => (
        <ActiveMission
          key={activeMission.mission_id}
          activeMission={activeMission}
        />
      ))}
      {/* {ActiveRocket.map((activeRocket) => (
        <ActiveMission
          key={activeRocket.id}
          activeRocket={activeRocket}
        />
      ))} */}
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

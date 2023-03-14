import React from "react";
import { useSelector } from "react-redux";
import ActiveMission from "./ActiveMission";

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
    </div>
  );
}

export default Profile;

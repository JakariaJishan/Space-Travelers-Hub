import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMissions } from "../app/missions/missionsSlice";
import RenderMissions from "./RenderMissions";

function Missions() {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  return (
    <div>
      {missions.map((mission) => (
        <RenderMissions key={mission.mission_id} mission={mission} />
      ))}
    </div>
  );
}

export default Missions;

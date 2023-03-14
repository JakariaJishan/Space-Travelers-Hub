import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMissions } from '../app/missions/missionsSlice';

function Missions() {
  // const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  return (
    <div>Missions</div>
  );
}

export default Missions;

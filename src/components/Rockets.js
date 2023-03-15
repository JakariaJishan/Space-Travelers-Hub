import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../app/rockets/rocketsSlice';
import RenderRockets from './RenderRockets';

function Rockets() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  return (
    <div>
      {rockets.map((rocket) => (
        <RenderRockets key={rocket.id} rocket={rocket} />
      ))}
    </div>
  );
}

export default Rockets;

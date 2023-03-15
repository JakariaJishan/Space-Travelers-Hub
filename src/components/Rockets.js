import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, reserveRocket, cancelRocket } from '../app/rockets/rocketsSlice';
import RenderRockets from './RenderRockets';

function Rockets() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const handleReserve = (id) => {
    dispatch(reserveRocket(id))
  };

  const handleUnrerved = (id) => {
    dispatch(cancelRocket(id))
;  }

  return (
    <div>
      {rockets.map((rocket) => (
        <RenderRockets
          key={rocket.id}
          rocket={rocket}
          handleReserve={handleReserve}
          handleUnrerved={handleUnrerved}
        />
      ))}
    </div>
  );
}

export default Rockets;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reserveRocket, cancelRocket } from "../app/rockets/rocketsSlice";
import RenderRockets from './RenderRockets';

function Rockets() {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  const handleReserve = (id) => {
    dispatch(reserveRocket(id));
  };

  const handleUnrerved = (id) => {
    dispatch(cancelRocket(id));
  };

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

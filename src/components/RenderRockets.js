import React from 'react';

function RenderRockets({ rocket, handleReserve, handleUnrerved}) {
  //console.log(rocket);
  const { id, name, type, flickr_images, reserved } = rocket
  return (
    <div>
      id:{id} |
      name:{name} |
      type:{type} |
      {reserved ? <b></b> : <b>Reserved</b>}
      {reserved ? (
        <button type="button" onClick={() => handleReserve(id)}>
          Reserve Rocket
        </button>
      ) : (
        <button type="button" onClick={() => handleUnrerved(mission_id)}>
          Cancel Reservation
        </button>
      )}
    </div>
  );
}

export default RenderRockets

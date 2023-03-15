import React from 'react';

function RenderRockets({ rocket, handleReserve, handleUnrerved}) {
  //console.log(rocket);
  const { id, name, type, flickr_images, reserved } = rocket
  return (
    <div>
      id:{id} |
      name:{name} |
      type:{type} |
      {reserved ? <b>Reserved</b> : <b></b>}
      {reserved ? (
        <button type="button" onClick={() => handleUnrerved(id)}>
          Cancel Reservation
        </button>
      ) : (
        <button type="button" onClick={() => handleReserve(id)}>
          Reserve Rocket
        </button>
      )}
    </div>
  );
}

export default RenderRockets

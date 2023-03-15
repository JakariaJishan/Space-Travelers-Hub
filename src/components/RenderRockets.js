import React from 'react';

function RenderRockets({ rocket, handleReserve, handleUnrerved }) {
  const {
    id, name, type, reserved,
  } = rocket;
  // const images = rocket.flickr_images
  return (
    <div>
      id:
      {id}
      {' '}
      |
      name:
      {name}
      {' '}
      |
      type:
      {type}
      {' '}
      |
      {reserved ? <b>Reserved</b> : <b />}
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

export default RenderRockets;

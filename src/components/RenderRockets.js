import React from 'react';

function RenderRockets({ rocket, handleReserve, handleUnrerved }) {
  const {
    id, name, description, reserved,
  } = rocket;
  const images = rocket.flickr_images;
  return (
    <div>
      <img className="rocket-img" src={images} alt={name} />
      <section>
        <h2>{name}</h2>
        {reserved ? <b className="cyan">Reserved</b> : <b />}
        <b>{description}</b>
        {reserved ? (
          <button type="button" onClick={() => handleUnrerved(id)}>
            Cancel Reservation
          </button>
        ) : (
          <button type="button" onClick={() => handleReserve(id)} className="blue">
            Reserve Rocket
          </button>
        )}
      </section>
    </div>
  );
}

export default RenderRockets;

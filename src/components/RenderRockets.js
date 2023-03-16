import React from 'react';
import '../style/rockets.css';

function RenderRockets({ rocket, handleReserve, handleUnrerved }) {
  const {
    id, name, description, reserved,
  } = rocket;
  const images = rocket.flickr_images;
  return (
    <div className="rocket">
      <img style={{ width: '90%' }} className="rocket-img" src={images} alt={name} />
      <section>
        <h2>{name}</h2>
        <div>
          {reserved ? <b className="cyan">Reserved</b> : <p />}
          <b>{description}</b>
        </div>
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

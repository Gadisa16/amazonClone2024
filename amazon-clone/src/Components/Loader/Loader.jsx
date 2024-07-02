import React from 'react';
import { PulseLoader } from 'react-spinners';

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
    <PulseLoader
        color="rgba(54, 215, 183, 1)"
        margin={6}
        size={10}
        speedMultiplier={2}
    />
    </div>
  );
}

export default Loader;

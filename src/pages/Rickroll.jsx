import React from "react";

const Rickroll = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-4xl font-bold">Mija you can't denyyyyy Owo!</h1>
      <img
        src="https://media.tenor.com/_4YgA77ExHEAAAAC/rick-roll.gif"
        alt="Rick Astley Dancing"
        className="w-64 h-64 mt-4"
      />
      <audio autoPlay loop>
        <source src="https://www.myinstants.com/media/sounds/rick-roll.mp3" type="audio/mp3" />
      </audio>
      <button
        className="red white"
        onClick={() => (window.location.href = "/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Rickroll;

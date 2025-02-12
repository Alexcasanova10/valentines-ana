import React, { useState } from "react";
import Confetti from "react-confetti";

const Home = () => {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);

  return (
    <div
      className="main-body" 
    >
      {/* Efecto de corazones lloviendo */}
      <div className="">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className=" animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 2 + 3}s`,
              color: i % 2 === 0 ? "#85c9f0" : "#ff4d4d", // Azul celeste y rojo
            }}
          >
            💕💙🩵
          </span>
        ))}
      </div>

      {!accepted && !rejected && (
        <>
        
          {/* Contenedor con imágenes a los lados */}
          <div className="main-card">
                <div>
                    <h1 className="white">
                    Wanna be my shrimpina for Valentine's Day?
                    </h1>
                    
                    <div className="shrimp-group ">
                        <img
                        src="https://ih1.redbubble.net/image.3988918561.3148/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"
                        alt="Shrimp left"
                        className="image-size"
                        />
                        <img
                        src="https://pbs.twimg.com/media/FI26U3KaUAI5BON?format=jpg&name=900x900"
                        alt="Shrimpina right"
                        className="image-size "
                        />
                    </div>
                </div>
                {/* Botones */}
                <div className="btn-group">
                    <button
                    className="blue white"
                    onClick={() => setAccepted(true)}
                    >
                    Yes I do!
                    </button>
                    <button
                    className="red white"
                    onClick={() => setRejected(true)}
                    >
                    Ño
                    </button>
                </div>
          </div>

        </>
      )}

      {/* Si dice que sí */}
      {accepted && (
        <>
        <div className="main-card">
          <Confetti />
          <h1 className="text-3xl font-bold white text-center">
            You've earned an invitation for a picnic on March 9th Owo
          </h1>
          <div className="image-size-big">
        
          </div>
          
        </div>
        </>
      )}

      {/* Si dice que no */}
      {rejected && (
        <>
        <div className="main-card">
          <h1 className="text-3xl font-bold text-white text-center">😢 Sure?</h1>
          <button
            className="bg-red-500 text-white px-8 py-3 rounded-xl text-lg font-semibold mt-4"
            onClick={() => (window.location.href = "/rickroll")}
          >
            Yes...
          </button>
        </div>
        </>
      )}
    </div>
  );
};

export default Home;

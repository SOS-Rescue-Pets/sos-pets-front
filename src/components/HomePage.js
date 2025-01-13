import React, { useState } from 'react';
import './HomePage.css';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const buttonData = [
    {
      label: 'Busco a mi mascota',
      tooltip:
        'Si perdiste a tu mascota y quieres publicar y buscar avisos para encontrarla, haz clic aquí',
    },
    {
      label: 'Quiero adoptar',
      tooltip:
        'Si deseas adoptar una mascota y buscas opciones cerca de ti, haz clic aquí',
    },
    {
      label: 'Encontré una mascota',
      tooltip:
        'Si encontraste una mascota perdida y deseas ayudar a reunirla con su dueño, haz clic aquí',
    },
    {
      label: 'Dar en adopción',
      tooltip:
        'Si necesitas dar en adopción a tu mascota, este es el lugar adecuado para empezar',
    },
  ];

  return (
    <div className="home-container">
      {/* Sección izquierda: Imagen central */}
      <div className="left-section">
        <img src="/logo.png" alt="Cute Dogs" className="dog-image" />
      </div>

      {/* Sección derecha: Botones con icono */}
      <div className="right-section">
        {buttonData.map((button, index) => (
          <div
            key={index}
            className="button-container"
            onMouseEnter={() => setHoveredButton(index)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <button className="action-button">
              {button.label}
              <FontAwesomeIcon icon={faArrowRight} className="action-icon" />
            </button>
            {hoveredButton === index && (
              <div className="tooltip">{button.tooltip}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

import React, { useState } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";
import { FaLandmark } from "react-icons/fa";

const HomeMap = () => {
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;

  const location = [23.822459, 90.363819]; // Coordinates for "Plot # 77-78, Road # 9, Rupnagar R/A Mirpur-2 Dhaka, Dhaka 1216"
  const [isHovered, setIsHovered] = useState(false);

  const handleIconHover = () => {
    setIsHovered(true);
  };

  const handleIconLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="container mx-auto">
      <Map height={300} defaultCenter={location} defaultZoom={14}>
        <Marker
          width={50}
          anchor={location}
          color={color}
          onClick={() => setHue(hue + 20)}
        />
        <Marker
          width={50}
          anchor={location}
          color={color}
          onMouseEnter={handleIconHover}
          onMouseLeave={handleIconLeave}
        >
          <FaLandmark />
        </Marker>
        {isHovered && (
          <Overlay anchor={location} offset={[0, -20]}>
            <div>
              Plot # 77-78, Road # 9, Rupnagar R/A Mirpur-2 Dhaka, Dhaka 1216
            </div>
          </Overlay>
        )}
      </Map>
    </div>
  );
};

export default HomeMap;

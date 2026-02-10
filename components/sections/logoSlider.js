"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const items = [
  { img: "/avondale-1.png", text: "Avondale Finance" },
  { img: "/circle-logo-bailliff.png", text: "Bailiff Solution" },
  { img: "/fibernet.png", text: "Fibernet" },
  { img: "/meshvinmedia-1.png", text: "Meshvi" },
  { img: "/mmdf.png", text: "MDF" },
  { img: "/parivartanLogo.png", text: "Parivartan" },
  { img: "/ukclaims.png", text: "UK Claims" },
];

const LogoSlider = () => {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  
  useEffect(() => {
    const track = trackRef.current;
    let animation;

    const autoScroll = () => {
      if (!isDragging) {
        track.scrollLeft += 0.5; 
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }
      animation = requestAnimationFrame(autoScroll);
    };

    autoScroll();
    return () => cancelAnimationFrame(animation);
  }, [isDragging]);
  
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div
      className="slider-wrapper"
      ref={trackRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="slider-track">
        {[...items, ...items].map((item, index) => (
          <div className="slide" key={index}>
            <Image src={item.img} alt={item.text} width={100} height={100}/>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;

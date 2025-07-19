import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./Carousel.css";

const DRAG_BUFFER = 50; // Increased for better drag sensitivity
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Carousel({
  images = [], // Default to empty array for images
  baseWidth = 300,
  autoplay = true,
  autoplayDelay = 3000,
  pauseOnHover = true,
  loop = true,
  round = true,
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselImages = loop ? [...images, images[0]] : images;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);

  // Handle pause on hover
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  // Handle autoplay
  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev === images.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselImages.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, images.length, carouselImages.length, pauseOnHover]);

  // Handle loop reset
  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselImages.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  // Handle drag end
  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.min(prev + 1, carouselImages.length - 1));
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselImages.length - 1),
          right: 0,
        },
      };

  // Error handling for empty images
  if (!images.length) {
    console.warn("Carousel: No images provided");
    return <div className="text-center text-red-500">No images available</div>;
  }

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${round ? "rounded-full" : "rounded-lg"} bg-white shadow-md overflow-hidden`}
      style={{ width: `${baseWidth}px`, height: round ? `${baseWidth}px` : "200px" }}
    >
      <motion.div
        className="carousel-track flex"
        drag="x"
        {...dragProps}
        style={{
          gap: `${GAP}px`,
          x,
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={isResetting ? { duration: 0 } : SPRING_OPTIONS}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselImages.map((image, index) => {
          const range = [
            -(index + 1) * trackItemOffset,
            -index * trackItemOffset,
            -(index - 1) * trackItemOffset,
          ];
          const outputRange = [90, 0, -90];
          const rotateY = useTransform(x, range, outputRange, { clamp: false });
          return (
            <motion.div
              key={index}
              className={`carousel-item ${round ? "rounded-full" : "rounded-lg"} overflow-hidden`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : "100%",
                rotateY,
              }}
              transition={SPRING_OPTIONS}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className={`w-full h-full object-cover ${round ? "rounded-full" : "rounded-lg"}`}
                onError={() => console.error(`Failed to load image: ${image}`)}
              />
            </motion.div>
          );
        })}
      </motion.div>
      <div className="carousel-indicators-container">
        <div className="carousel-indicators flex justify-center gap-2 mt-2">
          {images.map((_, index) => (
            <motion.div
              key={index}
              className={`carousel-indicator w-2 h-2 rounded-full cursor-pointer ${
                currentIndex % images.length === index ? "bg-blue-900" : "bg-gray-300"
              }`}
              animate={{ scale: currentIndex % images.length === index ? 1.2 : 1 }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
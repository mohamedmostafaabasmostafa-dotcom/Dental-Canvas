import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  label?: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage, label }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  return (
    <div className="relative group">
      {label && <h3 className="text-xl font-bold mb-4 text-center">{label}</h3>}
      
      <div 
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize shadow-xl select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background) */}
        <img 
          src={afterImage} 
          alt="After" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <span className="absolute top-4 right-4 bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
          AFTER
        </span>

        {/* Before Image (Foreground - Clipped) */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src={beforeImage} 
            alt="Before" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute top-4 left-4 bg-slate-900/70 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
            BEFORE
          </span>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-primary">
            <MoveHorizontal size={20} />
          </div>
        </div>
      </div>
      
      <p className="text-center text-sm text-muted-foreground mt-3 italic">
        Drag slider to compare
      </p>
    </div>
  );
}

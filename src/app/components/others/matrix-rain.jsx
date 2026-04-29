'use client';

import { useEffect, useRef } from 'react';

const MatrixRain = ({ 
  speed = 1.7,
  chars = '0123456789アイウエオカキクケコサシスセソ',
  color = 'rgb(255, 217, 0)'
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let fontSize = 20;
    let columnsCount = Math.floor(width / fontSize);
    let drops = [];
    let animationId;

    const initDrops = () => {
      drops = [];
      for (let i = 0; i < columnsCount; i++) {
        drops.push({
          y: Math.random() * -height,
          speed: 2 + Math.random() * speed * 3,
          char: chars[Math.floor(Math.random() * chars.length)]
        });
      }
    };

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      columnsCount = Math.floor(width / fontSize);
      initDrops();
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px 'Courier New', monospace`;
      ctx.fillStyle = color;

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        const x = i * fontSize;
        ctx.fillText(drop.char, x, drop.y);
        drop.y += drop.speed;

        if (Math.random() < 0.02) {
          drop.char = chars[Math.floor(Math.random() * chars.length)];
        }

        if (drop.y > height) {
          drop.y = -fontSize;
          drop.speed = 2 + Math.random() * speed * 3;
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [speed, chars, color]);

  return <canvas ref={canvasRef} className="matrix-rain" />;
};

export default MatrixRain;
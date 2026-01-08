import { useEffect, useRef, useState } from 'react';

interface Node {
  x: number;
  y: number;
  layer: number;
  targetRadius: number;
  currentRadius: number;
}

interface Connection {
  from: number;
  to: number;
  opacity: number;
  targetOpacity: number;
}

export default function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const progressRef = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('coursework');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initializeNetwork();
    };

    const initializeNetwork = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      const layers = [4, 6, 8, 6, 4];
      const layerSpacing = width / (layers.length + 1);
      
      nodesRef.current = [];
      connectionsRef.current = [];

      layers.forEach((nodeCount, layerIndex) => {
        const x = layerSpacing * (layerIndex + 1);
        const nodeSpacing = height / (nodeCount + 1);
        
        for (let i = 0; i < nodeCount; i++) {
          const y = nodeSpacing * (i + 1);
          nodesRef.current.push({
            x,
            y,
            layer: layerIndex,
            targetRadius: 4 + Math.random() * 3,
            currentRadius: 0,
          });
        }
      });

      let nodeIndex = 0;
      for (let l = 0; l < layers.length - 1; l++) {
        const currentLayerStart = nodeIndex;
        const currentLayerEnd = nodeIndex + layers[l];
        const nextLayerStart = currentLayerEnd;
        const nextLayerEnd = nextLayerStart + layers[l + 1];

        for (let i = currentLayerStart; i < currentLayerEnd; i++) {
          for (let j = nextLayerStart; j < nextLayerEnd; j++) {
            if (Math.random() > 0.3) {
              connectionsRef.current.push({
                from: i,
                to: j,
                opacity: 0,
                targetOpacity: 0.1 + Math.random() * 0.3,
              });
            }
          }
        }
        nodeIndex = currentLayerEnd;
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      if (isVisible && progressRef.current < 1) {
        progressRef.current += 0.008;
      }

      const progress = progressRef.current;
      const totalLayers = 5;

      nodesRef.current.forEach((node) => {
        const layerDelay = node.layer / totalLayers;
        const layerProgress = Math.max(0, Math.min(1, (progress - layerDelay) * 2.5));
        node.currentRadius = node.targetRadius * layerProgress;

        if (node.currentRadius > 0.1) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.currentRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(51, 255, 51, ${0.6 + layerProgress * 0.4})`;
          ctx.fill();
          
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.currentRadius + 2, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(51, 255, 51, ${0.2 * layerProgress})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });

      connectionsRef.current.forEach((conn) => {
        const fromNode = nodesRef.current[conn.from];
        const toNode = nodesRef.current[conn.to];
        
        const connectionLayer = Math.max(fromNode.layer, toNode.layer);
        const layerDelay = connectionLayer / totalLayers;
        const layerProgress = Math.max(0, Math.min(1, (progress - layerDelay) * 2.5));
        conn.opacity = conn.targetOpacity * layerProgress;

        if (conn.opacity > 0.01) {
          const drawProgress = Math.max(0, Math.min(1, (progress - fromNode.layer / totalLayers) * 3));
          const endX = fromNode.x + (toNode.x - fromNode.x) * drawProgress;
          const endY = fromNode.y + (toNode.y - fromNode.y) * drawProgress;
          
          ctx.beginPath();
          ctx.moveTo(fromNode.x, fromNode.y);
          ctx.lineTo(endX, endY);
          ctx.strokeStyle = `rgba(51, 255, 51, ${conn.opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

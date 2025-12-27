import "./LinhaHexagono.css";
import Hexagono from "../../assets/hexagono.png";
import { useRef, useEffect, useState } from "react";

const ROTACOES = [0, 15, 30, 45];

function LinhaHexagono() {
  const LARGURA = 100;
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotacoesArray, setRotacoesArray] = useState<number[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      const quantidade = Math.ceil(width / LARGURA);
      
      // Gerar novo array de rotações quando a quantidade mudar
      const novasRotacoes = [];
      for (let i = 0; i < quantidade; i++) {
        novasRotacoes[i] = ROTACOES[Math.floor(Math.random() * ROTACOES.length)];
      }
      setRotacoesArray(novasRotacoes);
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="linha-hexagono-container" ref={containerRef}>
      {rotacoesArray.map((rotacao, index) => (
        <img
          key={index}
          src={Hexagono}
          alt=""
          style={{ transform: `rotate(${rotacao}deg)` }}
        />
      ))}
    </div>
  );
}

export default LinhaHexagono;

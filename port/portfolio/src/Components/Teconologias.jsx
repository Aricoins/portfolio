import anime from 'animejs/lib/anime.es.js';
import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SiCss3, SiHtml5, SiJavascript, SiMysql, SiPostgresql, SiSequelize, SiGit, SiGithub, SiTrello, SiSlack, SiReactrouter, SiRedux, SiTypescript, SiTailwindcss, SiReact, SiAngular, SiNextdotjs, SiNodedotjs, SiExpress, SiNestjs, SiGraphql, SiFirebase, SiMui, SiAntdesign, SiBootstrap, SiGooglecloud, SiVercel, SiSwagger, SiJest, SiMongodb, SiReactquery } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import AOS from 'aos';

const Tecnologi = styled.div`
  position: relative;
  background-color: ${({ currentColor }) => currentColor?.cuarto || '#1a1a1a'};
  width: 90%;
  height: 100%;
  opacity: 0.9;
  text-align: center;
  font-size: 2em;
  color: ${({ currentColor }) => currentColor?.quinto || '#ffffff'};
  text-decoration: solid 1px ${({ currentColor }) => currentColor?.cuarto || '#1a1a1a'};
  padding: 1%;   
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  background-color: black;

  @media (max-width: 800px) {
    margin: auto;
    font-size: 0.8em;
  }
`;

const GameContainer = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 15px;
  border-radius: 15px;
  margin: 10px auto;
  width: 100%;
  max-width: 100%;
  position: relative;
  overflow: visible;
  min-height: 600px;
  box-sizing: border-box;
  
  @media (max-width: 1200px) {
    padding: 12px;
    min-height: 550px;
  }
  
  @media (max-width: 768px) {
    padding: 10px;
    margin: 5px auto;
    min-height: 500px;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    padding: 8px;
    margin: 3px auto;
    min-height: 450px;
    border-radius: 8px;
  }
`;

const GameTitle = styled.h2`
  text-align: center;
  color: white;
  font-family: "audiowide";
  margin-bottom: 15px;
  font-size: 1.5em;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  
  @media (max-width: 900px) {
    font-size: 1.2em;
    margin-bottom: 10px;
  }
`;

const IconsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 8px;
  padding: 12px;
  background: rgba(255,255,255,0.1);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  margin-bottom: 15px;
  max-height: 150px;
  overflow-y: auto;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(45px, 1fr));
    gap: 6px;
    padding: 10px;
    max-height: 140px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
    gap: 4px;
    padding: 8px;
    max-height: 120px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 3px;
    padding: 6px;
    max-height: 100px;
  }
`;

const DraggableIcon = styled.div`
  font-size: 1.6em;
  color: ${props => props.matched ? '#4ade80' : props.selected ? '#fbbf24' : props.isDragging ? '#60a5fa' : '#e2e8f0'};
  cursor: ${props => props.matched ? 'default' : 'grab'};
  text-align: center;
  padding: 8px;
  border-radius: 8px;
  background: ${props => props.matched ? 'rgba(74, 222, 128, 0.2)' : props.selected ? 'rgba(251, 191, 36, 0.2)' : props.isDragging ? 'rgba(96, 165, 250, 0.2)' : 'rgba(255,255,255,0.1)'};
  transition: all 0.3s ease;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.matched ? 0.6 : props.isDragging ? 0.8 : 1};
  border: ${props => props.selected ? '2px solid #fbbf24' : props.isDragging ? '2px solid #60a5fa' : '2px solid transparent'};
  touch-action: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transform: ${props => props.isDragging ? 'scale(1.1) rotate(5deg)' : 'scale(1)'};
  z-index: ${props => props.isDragging ? 1000 : 1};
  
  &:hover, &:focus {
    color: ${props => props.matched ? '#4ade80' : '#60a5fa'};
    transform: ${props => props.isDragging ? 'scale(1.1) rotate(5deg)' : 'scale(1.1)'};
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    cursor: ${props => props.matched ? 'default' : 'grabbing'};
  }
  
  &:active {
    cursor: grabbing;
    transform: scale(1.05);
  }
  
  @media (max-width: 1200px) {
    font-size: 1.4em;
    padding: 6px;
    min-height: 36px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.2em;
    padding: 4px;
    min-height: 32px;
  }
  
  @media (max-width: 480px) {
    font-size: 1em;
    padding: 3px;
    min-height: 28px;
  }
`;

const NamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 8px;
  padding: 12px;
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 20px;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    gap: 6px;
    padding: 10px;
    max-height: 180px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    gap: 4px;
    padding: 8px;
    max-height: 160px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3px;
    padding: 6px;
    max-height: 140px;
  }
`;

const DropZone = styled.div`
  background: ${props => props.isOver ? 'rgba(74, 222, 128, 0.4)' : props.matched ? 'rgba(74, 222, 128, 0.2)' : 'rgba(255,255,255,0.1)'};
  border: 2px dashed ${props => props.matched ? '#4ade80' : props.isOver ? '#60a5fa' : '#94a3b8'};
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  color: ${props => props.matched ? '#4ade80' : props.isOver ? '#60a5fa' : 'white'};
  font-family: "Verdana";
  font-weight: bold;
  transition: all 0.3s ease;
  position: relative;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  line-height: 1.2;
  cursor: pointer;
  touch-action: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transform: ${props => props.isOver ? 'scale(1.05)' : 'scale(1)'};
  box-shadow: ${props => props.isOver ? '0 4px 16px rgba(96, 165, 250, 0.3)' : '0 2px 8px rgba(0,0,0,0.1)'};
  
  &:hover, &:focus {
    background: ${props => props.matched ? 'rgba(74, 222, 128, 0.3)' : 'rgba(96, 165, 250, 0.2)'};
    transform: scale(1.02);
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  @media (max-width: 1200px) {
    padding: 8px;
    min-height: 36px;
    font-size: 0.75rem;
  }
  
  @media (max-width: 768px) {
    padding: 6px;
    min-height: 32px;
    font-size: 0.7rem;
  }
  
  @media (max-width: 480px) {
    padding: 5px;
    min-height: 28px;
    font-size: 0.65rem;
    line-height: 1.1;
  }
`;

const Fireworks = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1000;
`;

const ScoreBoard = styled.div`
  text-align: center;
  color: white;
  font-family: "audiowide";
  font-size: 1.1em;
  margin-bottom: 10px;
  background: rgba(0,0,0,0.3);
  padding: 10px;
  border-radius: 8px;
  
  @media (max-width: 900px) {
    font-size: 1em;
    padding: 8px;
  }
`;

const TouchDragIndicator = styled.div`
  position: fixed;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  transform: translate(-50%, -50%);
  z-index: 10000;
  pointer-events: none;
  font-size: 1.8em;
  color: #60a5fa;
  text-shadow: 0 0 8px rgba(96, 165, 250, 0.7);
`;

const Tecnologias = ({ currentColor }) => {
    const [draggedItem, setDraggedItem] = useState(null);
    const [matches, setMatches] = useState({});
    const [score, setScore] = useState(0);
    const [showFireworks, setShowFireworks] = useState(false);
    const [dragOverZone, setDragOverZone] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [touchPosition, setTouchPosition] = useState({ x: 0, y: 0 });
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const gameContainerRef = useRef(null);

    // Game rules
    const maxMatches = 5;
    const coinsPerMatch = 200;
    const totalPossibleCoins = 1000;

    const technologies = [
        { id: 'react', name: 'React', icon: SiReact },
        { id: 'angular', name: 'Angular', icon: SiAngular },
        { id: 'nextjs', name: 'Next.js', icon: SiNextdotjs },
        { id: 'javascript', name: 'JavaScript', icon: SiJavascript },
        { id: 'typescript', name: 'TypeScript', icon: SiTypescript },
        { id: 'html', name: 'HTML', icon: SiHtml5 },
        { id: 'css', name: 'CSS', icon: SiCss3 },
        { id: 'redux', name: 'Redux', icon: SiRedux },
        { id: 'nodejs', name: 'Node.js', icon: SiNodedotjs },
        { id: 'express', name: 'Express', icon: SiExpress },
        { id: 'nestjs', name: 'Nest.js', icon: SiNestjs },
        { id: 'graphql', name: 'GraphQL', icon: SiGraphql },
        { id: 'postgresql', name: 'PostgreSQL', icon: SiPostgresql },
        { id: 'mongodb', name: 'MongoDB', icon: SiMongodb },
        { id: 'firebase', name: 'Firebase', icon: SiFirebase },
        { id: 'tailwind', name: 'Tailwind CSS', icon: SiTailwindcss },
        { id: 'mui', name: 'Material UI', icon: SiMui },
        { id: 'bootstrap', name: 'Bootstrap', icon: SiBootstrap },
        { id: 'git', name: 'Git', icon: SiGit },
        { id: 'vercel', name: 'Vercel', icon: SiVercel },
        { id: 'swagger', name: 'Swagger', icon: SiSwagger },
        { id: 'jest', name: 'Jest', icon: SiJest },
        { id: 'zustand', name: 'Zustand', icon: SiReact },
        { id: 'tanstack', name: 'Tanstack Query', icon: SiReactquery }
    ];

    useEffect(() => {
        AOS.init();
        // Detectar si es un dispositivo táctil
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    // Detectar elemento bajo el puntero
    const getElementUnderPoint = (x, y) => {
        document.elementFromPoint(x, y);
        return document.elementFromPoint(x, y);
    };

    // Manejo de inicio de arrastre
    const handleDragStart = (tech) => {
        if (matches[tech.id]) return;
        setDraggedItem(tech);
        setIsDragging(true);
    };

    // Manejo de fin de arrastre
    const handleDragEnd = () => {
        setIsDragging(false);
        setDragOverZone(null);
        setDraggedItem(null);
    };

    // Manejo de movimiento durante arrastre
    const handleDragMove = (e) => {
        if (!draggedItem) return;
        
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        
        if (!clientX || !clientY) return;
        
        setTouchPosition({ x: clientX, y: clientY });
        
        // Detectar elemento bajo el puntero
        const elementBelow = getElementUnderPoint(clientX, clientY);
        if (!elementBelow) return;
        
        // Verificar si está sobre una zona de destino
        const dropZone = elementBelow.closest('[data-drop-zone]');
        if (dropZone) {
            const techId = dropZone.getAttribute('data-drop-zone');
            setDragOverZone(techId);
        } else {
            setDragOverZone(null);
        }
    };

    // Manejo de soltar elemento
    const handleDrop = () => {
        if (!draggedItem || !dragOverZone) {
            handleDragEnd();
            return;
        }
        
        // Verificar si la coincidencia es correcta
        if (draggedItem.id === dragOverZone && !matches[dragOverZone]) {
            handleSuccessfulMatch(technologies.find(t => t.id === dragOverZone));
        }
        
        handleDragEnd();
    };

    // Manejo de coincidencia exitosa
    const handleSuccessfulMatch = (targetTech) => {
        setMatches(prev => ({ ...prev, [targetTech.id]: true }));
        setScore(prev => prev + coinsPerMatch);
        
        setShowFireworks(true);
        setTimeout(() => setShowFireworks(false), 1000);
        
        anime({
            targets: `.match-${targetTech.id}`,
            scale: [1, 1.5, 1],
            rotate: [0, 360],
            duration: 800,
            easing: 'easeInOutElastic(1, .8)'
        });
    };

    // Crear efectos de fuegos artificiales
    const createFireworks = () => {
        anime({
            targets: '.firework',
            translateX: [0, anime.random(-200, 200)],
            translateY: [0, anime.random(-200, 200)],
            scale: [0, 1, 0],
            opacity: [1, 1, 0],
            duration: 1000,
            easing: 'easeOutExpo'
        });
    };

    useEffect(() => {
        if (showFireworks) {
            createFireworks();
        }
    }, [showFireworks]);

    // Configurar eventos globales para el arrastre
    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleDragMove);
            window.addEventListener('touchmove', handleDragMove, { passive: false });
            window.addEventListener('mouseup', handleDrop);
            window.addEventListener('touchend', handleDrop);
        }
        
        return () => {
            window.removeEventListener('mousemove', handleDragMove);
            window.removeEventListener('touchmove', handleDragMove);
            window.removeEventListener('mouseup', handleDrop);
            window.removeEventListener('touchend', handleDrop);
        };
    }, [isDragging, draggedItem, dragOverZone]);

    const matchedCount = Object.keys(matches).length;
    const isGameComplete = matchedCount >= maxMatches;

    return (
        <>
            <Tecnologi currentColor={currentColor} data-aos="fade-up">
                <div style={{fontFamily: "audiowide", padding: "5%", fontSize: "large", width: "90%", margin: "auto"}}>
                    Ofrecemos soluciones digitales innovadoras utilizando las últimas tecnologías del mercado. Nuestra experiencia y conocimiento abarcan una amplia gama de herramientas y frameworks, lo que nos permite ofrecer productos de alta calidad y rendimiento.
                </div>
              
                <GameContainer ref={gameContainerRef}>
                    <GameTitle>🎮 Tech Match Challenge 🎮</GameTitle>
                    <ScoreBoard>
                        💰 {score} Aricoins | Objetivo: {totalPossibleCoins} | Aciertos: {matchedCount}/{maxMatches}
                        {isGameComplete && " 🎉 ¡Felicitaciones! ¡Ganaste el desafío! 🎉"}
                    </ScoreBoard>
                    
                    <div style={{color: 'white', textAlign: 'center', marginBottom: '15px', fontFamily: 'Verdana', fontSize: '0.9rem', lineHeight: '1.4'}}>
                        {isTouchDevice ? 
                            '👆 Toca un icono y arrástralo al nombre correspondiente' : 
                            '🖱️ Arrastra los iconos a sus nombres correspondientes'}
                        
                        {draggedItem && (
                            <div style={{marginTop: '8px', padding: '8px', background: 'rgba(251, 191, 36, 0.1)', borderRadius: '6px', border: '1px solid #fbbf24'}}>
                                <span style={{color: '#fbbf24', fontWeight: 'bold'}}>
                                    {isDragging ? '🎯 Arrastrando: ' : '✨ Seleccionado: '}{draggedItem.name}
                                </span>
                                <button 
                                    onClick={handleDragEnd}
                                    style={{
                                        marginLeft: '10px', 
                                        padding: '4px 12px', 
                                        fontSize: '0.75rem', 
                                        background: 'rgba(255,255,255,0.2)', 
                                        border: 'none', 
                                        borderRadius: '6px', 
                                        color: 'white', 
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        touchAction: 'manipulation'
                                    }}
                                    onMouseOver={(e) => e.target.style.background = 'rgba(255,255,255,0.3)'}
                                    onMouseOut={(e) => e.target.style.background = 'rgba(255,255,255,0.2)'}
                                >
                                    ❌ Cancelar
                                </button>
                            </div>
                        )}
                    </div>
                    
                    <IconsGrid>
                        {technologies.map(tech => {
                            const IconComponent = tech.icon;
                            return (
                                <DraggableIcon
                                    key={tech.id}
                                    onMouseDown={() => handleDragStart(tech)}
                                    onTouchStart={(e) => {
                                        e.preventDefault();
                                        handleDragStart(tech);
                                    }}
                                    matched={matches[tech.id]}
                                    selected={draggedItem?.id === tech.id}
                                    isDragging={isDragging && draggedItem?.id === tech.id}
                                    className={`match-${tech.id}`}
                                >
                                    <IconComponent />
                                </DraggableIcon>
                            );
                        })}
                    </IconsGrid>
                    
                    {isDragging && draggedItem && isTouchDevice && (
                        <TouchDragIndicator x={touchPosition.x} y={touchPosition.y}>
                            <draggedItem.icon />
                        </TouchDragIndicator>
                    )}
                    
                    <NamesGrid>
                        {technologies.map(tech => (
                            <DropZone
                                key={`drop-${tech.id}`}
                                data-drop-zone={tech.id}
                                matched={matches[tech.id]}
                                isOver={dragOverZone === tech.id}
                            >
                                {matches[tech.id] ? '✅ ' : dragOverZone === tech.id ? '🎯 ' : ''}{tech.name}
                            </DropZone>
                        ))}
                    </NamesGrid>
                    
                    {showFireworks && (
                        <Fireworks>
                            {[...Array(10)].map((_, i) => (
                                <div key={i} className="firework" style={{
                                    position: 'absolute',
                                    width: '6px',
                                    height: '6px',
                                    background: `hsl(${Math.random() * 360}, 100%, 50%)`,
                                    borderRadius: '50%'
                                }} />
                            ))}
                        </Fireworks>
                    )}
                </GameContainer>
                
                <div style={{
                    background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)", 
                    fontSize: "0.8rem", 
                    fontFamily: "audiowide", 
                    color: "white", 
                    textAlign: "center", 
                    padding: "15px",
                    borderRadius: "8px",
                    marginTop: "10px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                    lineHeight: "1.4"
                }}>
                    <div style={{marginBottom: "8px", color: "#60a5fa", fontWeight: "bold"}}>🛠️ Stack Tecnológico</div>
                    <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "8px", fontSize: "0.7rem"}}>
                        <div><strong style={{color: "#fbbf24"}}>Frontend:</strong> React, Angular, Next.js, JavaScript, TypeScript, HTML, CSS, Redux, Zustand</div>
                        <div><strong style={{color: "#4ade80"}}>Backend:</strong> Node.js, Express, Nest.js, GraphQL, Tanstack Query</div>
                        <div><strong style={{color: "#f472b6"}}>Databases:</strong> PostgreSQL, MongoDB, Firebase</div>
                        <div><strong style={{color: "#8b5cf6"}}>UI/UX:</strong> Tailwind CSS, Material UI, Bootstrap</div>
                        <div><strong style={{color: "#06b6d4"}}>Tools:</strong> Git, Vercel, Swagger, Jest</div>
                    </div>
                </div>
            </Tecnologi>
        </>
    );
};

Tecnologias.propTypes = {
  currentColor: PropTypes.shape({
    primero: PropTypes.string,
    segundo: PropTypes.string,
    tercero: PropTypes.string,
    cuarto: PropTypes.string,
    quinto: PropTypes.string
  })
};

Tecnologias.defaultProps = {
  currentColor: {
    primero: '#2d2d2d',
    segundo: '#60a5fa', 
    tercero: '#4ade80',
    cuarto: '#ffffff',
    quinto: '#e2e8f0'
  }
};

export default Tecnologias;
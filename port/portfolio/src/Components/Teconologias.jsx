import anime from 'animejs/lib/anime.es.js';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SiCss3, SiHtml5, SiJavascript, SiMysql, SiPostgresql, SiSequelize, SiGit, SiGithub, SiTrello, SiSlack, SiReactrouter, SiRedux, SiTypescript, SiTailwindcss, SiReact, SiAngular, SiNextdotjs, SiNodedotjs, SiExpress, SiNestjs, SiGraphql, SiFirebase, SiMui, SiAntdesign, SiBootstrap, SiGooglecloud, SiVercel, SiSwagger, SiJest } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import AOS from 'aos';




// const Bola8 = styled.img`
//   width: 40%;
//   position: absolute;
//   z-index: 2;
//   bottom: 50%;
//   left: 30%;
//   z-index: 0;
// `;

const Tecnologi = styled.div`
  position: relative;
  background-color: ${({ currentColor }) => currentColor.cuarto};
  width: 90%;
  height: 100%;
  opacity: 0.9;
  text-align: center;
  font-size: 2em;
  color: ${({ currentColor }) => currentColor.quinto};
  text-decoration: solid 1px ${({ currentColor }) => currentColor.cuarto};
  padding: 1%;   
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  background-color: "black"; 
  justify-content: "center";

  @media (max-width: 800px) {
    margin: auto;
    font-size: 0.8em;
  }
`;

const Galeria = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  width: 78%;
padding: 1%;
  background-color: ${({ currentColor }) => currentColor.primero};
  z-index: 1;
  margin: auto;
  font-size: x-large  ;
  color: ${({currentColor}) => currentColor.cuarto };
  

  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    font-size: 2em;
  }
`;

const Icono = styled.div`
width: 90%;
  grid-auto-flow: column;
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: max-content 1fr;
  font-size: 4em;
  padding: 25%;
  gap: 2%;
  margin: auto;
  transition: 2s;
  color: ${({ currentColor }) => currentColor.cuarto};

  &:hover {
    transition: 0.6s;
scale: 1.3;
z-index: 300;
gap: auto;
    color: ${({ currentColor }) => currentColor.segundo};
  }

  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  font-size: 3em;
    gap: 5%;
  }

  @media (max-width: 800px) {
    grid-template-columns: 15% 15% 15% 15% 15% 15% 15%;
    grid-template-rows: 50% 50%;
    gap: 1%;
    font-size: 2em;
    margin: "5%"
  }
`;

const Bola9 = styled.img`
  width: 2%;
  position: absolute;
  z-index: 1;
  top: 1%;
  left: 50%;
`;

const GameContainer = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 15px;
  border-radius: 15px;
  margin: 10px auto;
  width: 99%;
  position: relative;
  overflow: hidden;
  max-height: 85vh;
  
  @media (max-width: 900px) {
    padding: 12px;
    margin: 8px auto;
    max-height: 80vh;
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
  grid-template-columns: repeat(auto-fit, minmax(45px, 1fr));
  gap: 5px;
  padding: 10px;
  background: rgba(255,255,255,0.1);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  margin-bottom: 15px;
  max-height: 200px;
  overflow-y: auto;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
    gap: 4px;
    padding: 8px;
    max-height: 180px;
  }
`;

const DraggableIcon = styled.div`
  font-size: 1.5em;
  color: ${props => props.matched ? '#4ade80' : '#e2e8f0'};
  cursor: grab;
  text-align: center;
  padding: 5px;
  border-radius: 6px;
  background: ${props => props.matched ? 'rgba(74, 222, 128, 0.2)' : 'rgba(255,255,255,0.1)'};
  transition: all 0.3s ease;
  transform: ${props => props.isDragging ? 'scale(1.1) rotate(2deg)' : 'scale(1)'};
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: scale(1.02);
    background: rgba(255,255,255,0.2);
  }
  
  &:active {
    cursor: grabbing;
  }
  
  @media (max-width: 900px) {
    font-size: 1.2em;
    padding: 4px;
    min-height: 30px;
  }
`;

const NamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 5px;
  padding: 10px;
  max-height: 300px;
  overflow-y: auto;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 4px;
    padding: 8px;
    max-height: 280px;
  }
  
  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3px;
  }
`;

const DropZone = styled.div`
  background: ${props => props.isOver ? 'rgba(74, 222, 128, 0.3)' : 'rgba(255,255,255,0.1)'};
  border: 1px dashed ${props => props.matched ? '#4ade80' : props.isOver ? '#60a5fa' : '#94a3b8'};
  border-radius: 6px;
  padding: 6px;
  text-align: center;
  color: ${props => props.matched ? '#4ade80' : 'white'};
  font-family: "Verdana";
  font-weight: bold;
  transition: all 0.3s ease;
  position: relative;
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  line-height: 1.1;
  
  @media (max-width: 900px) {
    padding: 5px;
    min-height: 28px;
    font-size: 0.65rem;
  }
  
  @media (max-width: 600px) {
    padding: 4px;
    min-height: 25px;
    font-size: 0.6rem;
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

const Tecnologias = ({ currentColor }) => {
    const [draggedItem, setDraggedItem] = useState(null);
    const [matches, setMatches] = useState({});
    const [score, setScore] = useState(0);
    const [showFireworks, setShowFireworks] = useState(false);

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
        { id: 'firebase', name: 'Firebase', icon: SiFirebase },
        { id: 'tailwind', name: 'Tailwind CSS', icon: SiTailwindcss },
        { id: 'mui', name: 'Material UI', icon: SiMui },
        { id: 'bootstrap', name: 'Bootstrap', icon: SiBootstrap },
        { id: 'git', name: 'Git', icon: SiGit },
        { id: 'vercel', name: 'Vercel', icon: SiVercel },
        { id: 'swagger', name: 'Swagger', icon: SiSwagger },
        { id: 'jest', name: 'Jest', icon: SiJest }
    ];

    useEffect(() => {
        AOS.init();
    }, []);

    const handleDragStart = (e, tech) => {
        setDraggedItem(tech);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, targetTech) => {
        e.preventDefault();
        if (draggedItem && draggedItem.id === targetTech.id) {
            setMatches(prev => ({ ...prev, [targetTech.id]: true }));
            setScore(prev => prev + 1);
            
            setShowFireworks(true);
            setTimeout(() => setShowFireworks(false), 1000);
            
            anime({
                targets: `.match-${targetTech.id}`,
                scale: [1, 1.5, 1],
                rotate: [0, 360],
                duration: 800,
                easing: 'easeInOutElastic(1, .8)'
            });
        }
        setDraggedItem(null);
    };

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

    const isGameComplete = Object.keys(matches).length === technologies.length;

    return (
        <>
            <Tecnologi currentColor={currentColor} data-aos="fade-up">
                <div style={{fontFamily: "audiowide", padding: "5%", fontSize: "large", width: "90%", margin: "auto"}}>
                    Ofrecemos soluciones digitales innovadoras utilizando las últimas tecnologías del mercado. Nuestra experiencia y conocimiento abarcan una amplia gama de herramientas y frameworks, lo que nos permite ofrecer productos de alta calidad y rendimiento.
                </div>
                
                <GameContainer>
                    <GameTitle>🎮 Tech Match Challenge 🎮</GameTitle>
                    <ScoreBoard>
                        Puntaje: {score}/{technologies.length} 
                        {isGameComplete && " 🎉 ¡Felicitaciones! ¡Completaste el desafío! 🎉"}
                    </ScoreBoard>
                    
                    <div style={{color: 'white', textAlign: 'center', marginBottom: '10px', fontFamily: 'Verdana', fontSize: '0.8rem'}}>
                        Arrastra cada icono sobre su nombre correspondiente
                    </div>
                    
                    <IconsGrid>
                        {technologies.map(tech => {
                            const IconComponent = tech.icon;
                            return (
                                <DraggableIcon
                                    key={tech.id}
                                    draggable={!matches[tech.id]}
                                    onDragStart={(e) => handleDragStart(e, tech)}
                                    matched={matches[tech.id]}
                                    className={`match-${tech.id}`}
                                >
                                    <IconComponent />
                                </DraggableIcon>
                            );
                        })}
                    </IconsGrid>
                    
                    <NamesGrid>
                        {technologies.map(tech => (
                            <DropZone
                                key={`drop-${tech.id}`}
                                onDragOver={handleDragOver}
                                onDrop={(e) => handleDrop(e, tech)}
                                matched={matches[tech.id]}
                                isOver={draggedItem?.id === tech.id}
                            >
                                {matches[tech.id] ? '✅ ' : ''}{tech.name}
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
                
                <h3 style={{background: "black", fontSize: "small", fontFamily: "audiowide", color: "white", textAlign: "center", padding: "10px"}}>
                    Frontend: React, Angular, Next.js, JavaScript, TypeScript, HTML, CSS, Redux | 
                    Backend: Node.js, Express, Nest.js, GraphQL | 
                    Databases: PostgreSQL, Firebase | 
                    UI/UX: Tailwind CSS, Material UI, Bootstrap | 
                    Tools: Git, Vercel, Swagger, Jest
                </h3>
            </Tecnologi>
        </>
    );
};

export default Tecnologias;

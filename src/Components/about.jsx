import { useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types"; // Importamos PropTypes
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function About({ currentColor }) {
  const titleRef = useRef(null);
  const Container = styled.div`
    width: 90%;
    margin: 5% auto;
    padding: 2%;
    text-align: center;
    font-family: 'Audiowide', sans-serif;
    color: ${currentColor.primero};

    @media (max-width: 600px) {
      width: 100%;
      padding: 2%;
    }
  `;

  const Title = styled.h2`
    font-size: 2rem;
    color: ${currentColor.cuarto};
    margin-bottom: 2rem;
    font-family: 'Audiowide', sans-serif;
    font-weight: 700;
    background: linear-gradient(135deg, ${currentColor.primero} 0%, ${currentColor.segundo} 60%, ${currentColor.tercero} 100%);
    padding: 1.5rem 2rem;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
    border: 3px solid ${currentColor.cuarto};
    text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
    perspective: 1000px;
    transform-style: preserve-3d;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
      transition: left 0.5s;
    }

    &:hover::before {
      left: 100%;
    }

    &:hover {
      transform: rotateX(10deg) rotateY(15deg) translateZ(30px);
      box-shadow: 0 30px 60px rgba(0,0,0,0.4);
    }

    @media (max-width: 600px) {
      font-size: 1.4rem;
      margin-bottom: 1.5rem;
      padding: 1rem 1.5rem;
    }
  `;

  const Text = styled.p`
    font-size: 1.5rem;
    color: ${currentColor.quinto};
    line-height: 1.6;
    margin-top: 0.5;
    font-family: Verdana;

    @media (max-width: 600px) {
      font-size: 0.9rem;
    }
  `;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    AOS.init();

    // Animación inicial extraordinaria del título
    if (titleRef.current) {
      const titleText = titleRef.current.textContent;
      const words = titleText.split(' ');
      titleRef.current.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');
      
      const wordElements = titleRef.current.querySelectorAll('.word');
      
      // Estado inicial: palabras hundidas en 3D
      gsap.set(wordElements, {
        opacity: 0,
        rotateX: -90,
        rotateY: 45,
        transformOrigin: "center bottom",
        z: -200,
        scale: 0.5
      });

      // Animación de entrada espectacular
      gsap.to(wordElements, {
        opacity: 1,
        rotateX: 0,
        rotateY: 0,
        z: 0,
        scale: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "elastic.out(1, 0.8)",
        delay: 0.3
      });

      // Animación continua de respiración 3D
      gsap.to(wordElements, {
        y: "random(-8, 8)",
        rotationZ: "random(-2, 2)",
        rotationX: "random(-5, 5)",
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.2
      });
    }

    // ScrollTrigger solo para el título
    if (titleRef.current) {
      ScrollTrigger.create({
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 2,
        onUpdate: (self) => {
          const progress = self.progress;
          const title = titleRef.current;
          
          // Efecto matriz/glitch en el título
          if (progress > 0.2 && progress < 0.8) {
            const glitchIntensity = Math.sin(progress * Math.PI * 10) * 0.5 + 0.5;
            gsap.to(title, {
              textShadow: `
                ${Math.random() * 10 * glitchIntensity}px 0px 0px rgba(255,0,0,0.7), 
                ${Math.random() * -10 * glitchIntensity}px 0px 0px rgba(0,255,0,0.7),
                0px ${Math.random() * 10 * glitchIntensity}px 0px rgba(0,0,255,0.7)
              `,
              filter: `hue-rotate(${Math.random() * 360}deg) saturate(${1 + glitchIntensity})`,
              duration: 0.1
            });
          } else {
            gsap.to(title, {
              textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
              filter: "none",
              duration: 0.3
            });
          }
        }
      });
    }

    // Hover con explosión de partículas
    if (titleRef.current) {
      const handleMouseEnter = (e) => {
        const words = titleRef.current.querySelectorAll('.word');
        
        // Animación de hover 3D extrema
        gsap.to(words, {
          scale: 1.2,
          color: "#FF4757",
          textShadow: "0 0 30px rgba(255,71,87,0.9), 0 0 60px rgba(255,71,87,0.6)",
          rotateY: 25,
          rotateX: -15,
          z: 80,
          duration: 0.6,
          stagger: 0.08,
          ease: "back.out(2)"
        });

        // Crear explosión de partículas
        createParticleExplosion(e.target);
        
        // Shake effect
        gsap.to(titleRef.current, {
          x: "random(-5, 5)",
          duration: 0.1,
          repeat: 5,
          yoyo: true,
          ease: "power2.inOut"
        });
      };

      const handleMouseLeave = () => {
        const words = titleRef.current.querySelectorAll('.word');
        
        gsap.to(words, {
          scale: 1,
          color: currentColor.cuarto,
          textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
          rotateY: 0,
          rotateX: 0,
          z: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "elastic.out(1, 0.5)"
        });

        gsap.to(titleRef.current, {
          x: 0,
          duration: 0.3
        });
      };

      titleRef.current.addEventListener('mouseenter', handleMouseEnter);
      titleRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    // Función para crear explosión de partículas
    const createParticleExplosion = (element) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 6 + 2;
        const colors = ['#FF4757', '#FF6B6B', '#FFA502', '#FF3838', '#FF6348'];
        
        particle.style.cssText = `
          position: fixed;
          width: ${size}px;
          height: ${size}px;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          left: ${centerX}px;
          top: ${centerY}px;
          box-shadow: 0 0 ${size * 2}px currentColor;
        `;
        document.body.appendChild(particle);

        const angle = (Math.PI * 2 * i) / 30;
        const velocity = Math.random() * 150 + 50;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;

        gsap.to(particle, {
          x: x,
          y: y,
          opacity: 0,
          scale: 0,
          rotation: Math.random() * 360,
          duration: Math.random() * 2 + 1,
          ease: "power2.out",
          onComplete: () => particle.remove()
        });
      }
    };

  }, [currentColor]);

  return (
    <Container data-aos="fade-up">
      <Title ref={titleRef}>Desarrollo Full-Stack | Ariel Rogel</Title>
      <Text>
        Desarrollo aplicaciones web con performance optimizada y analítica detallada. 
        Especialista Full-Stack con 3+ años ayudando a startups y PyMEs a 
        digitalizar procesos y potenciar su crecimiento con React, Node.js y IA.
      </Text>
    </Container>
  );
}

// Definimos los PropTypes para la validación de las props
About.propTypes = {
  currentColor: PropTypes.shape({
    primero: PropTypes.string.isRequired, // 'primero' es requerido
    quinto: PropTypes.string.isRequired, // 'quinto' es requerido
  }).isRequired,
};

export default About;

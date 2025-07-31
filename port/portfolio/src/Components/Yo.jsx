import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import perfil from "../assets/descarga2.png";
import yo from "../assets/descarga.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import banner from "../assets/banner.webp";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';	

const Desktop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  margin-top: 5%;
  padding: 0px;
  box-shadow: 0 0 5px #000000;
  background-color: ${({ currentColor }) => currentColor.segundo};
  @media (max-width: 768px) {
    flex-direction: column;
  }
 `

const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  width: 90%;
  background-color: ${({ currentColor }) => currentColor.primero};
box-shadow: 0 0 5px #000000;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  color: ${({ currentColor }) => currentColor.cuarto};
  text-align: center;
  background-color: ${({ currentColor }) => currentColor.primero};
  border-radius: 10px;
  padding: 5%;
  border-radius: 10px 0 10px 0;
  box-shadow: 0 0 5px #000000;
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
    transform: rotateX(5deg) rotateY(10deg) translateZ(20px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.h4`
  font-size: 24px;
  color: ${({ currentColor }) => currentColor.cuarto};
  text-align: center;
  background-color: ${({ currentColor }) => currentColor.primero};
  border-radius: 10px;
  padding: 1%;
  box-shadow: 0 0 5px #000000;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: ${({ currentColor }) => currentColor.cuarto};
  text-align: center;
  background-color: ${({ currentColor }) => currentColor.primero};
  border-radius: 10px;
  padding: 1%;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Image = styled.img`
  width: 25%;
  opacity: 0.2;
  border-radius: 50%;
  margin: 5%;
  box-shadow: 0 0 5px #000000;
  border: 2px solid #656262;
  @media (max-width: 768px) {
    width: 20%;

  }
`;

const Yo = ({ currentColor, theme }) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    AOS.init({
      duration: 2000,
    });

    // Animación inicial dramática del título
    if (titleRef.current) {
      const titleWords = titleRef.current.textContent.split(' ');
      titleRef.current.innerHTML = titleWords.map(word => `<span class="word">${word}</span>`).join(' ');
      
      const words = titleRef.current.querySelectorAll('.word');
      
      gsap.set(words, {
        opacity: 0,
        rotateX: -90,
        transformOrigin: "center bottom",
        z: -100
      });

      gsap.to(words, {
        opacity: 1,
        rotateX: 0,
        z: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "back.out(2)",
        delay: 0.5
      });

      // Animación continua de partículas flotantes
      gsap.to(words, {
        y: "random(-3, 3)",
        rotationZ: "random(-1, 1)",
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.1
      });
    }

    // Efecto de scroll con distorsión
    if (containerRef.current) {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const skew = progress * 20 - 10;
          const scale = 1 + progress * 0.1;
          
          gsap.to(containerRef.current, {
            skewY: skew,
            scale: scale,
            duration: 0.3,
            ease: "power2.out"
          });
          
          // Efecto de "glitch" en ciertos puntos
          if (progress > 0.3 && progress < 0.7) {
            gsap.to(titleRef.current, {
              textShadow: `${Math.random() * 5}px ${Math.random() * 5}px 0px rgba(255,0,0,0.5), 
                          ${Math.random() * -5}px ${Math.random() * 5}px 0px rgba(0,255,0,0.5),
                          ${Math.random() * 5}px ${Math.random() * -5}px 0px rgba(0,0,255,0.5)`,
              duration: 0.1
            });
          } else {
            gsap.to(titleRef.current, {
              textShadow: "none",
              duration: 0.1
            });
          }
        }
      });
    }

    // Hover avanzado con partículas
    if (titleRef.current) {
      const handleMouseEnter = (e) => {
        const words = titleRef.current.querySelectorAll('.word');
        
        gsap.to(words, {
          scale: 1.1,
          color: "#FF6B6B",
          textShadow: "0 0 20px rgba(255,107,107,0.8)",
          rotateY: 15,
          z: 50,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(1.7)"
        });

        // Crear partículas en hover
        createParticles(e.target);
      };

      const handleMouseLeave = () => {
        const words = titleRef.current.querySelectorAll('.word');
        
        gsap.to(words, {
          scale: 1,
          color: currentColor.cuarto,
          textShadow: "none",
          rotateY: 0,
          z: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out"
        });
      };

      titleRef.current.addEventListener('mouseenter', handleMouseEnter);
      titleRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    const createParticles = (element) => {
      const rect = element.getBoundingClientRect();
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
          position: fixed;
          width: 4px;
          height: 4px;
          background: #FF6B6B;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1000;
          left: ${rect.left + Math.random() * rect.width}px;
          top: ${rect.top + Math.random() * rect.height}px;
        `;
        document.body.appendChild(particle);

        gsap.to(particle, {
          x: "random(-100, 100)",
          y: "random(-100, 100)",
          opacity: 0,
          scale: 0,
          duration: 1.5,
          ease: "power2.out",
          onComplete: () => particle.remove()
        });
      }
    };

  }, [currentColor]);

  return ( <>

    <img  src={banner} alt="banner" style={{width: "90%", margin: "auto", marginTop: "10%"}}  />
    <Desktop currentColor={{ currentColor, theme }}>
     
      <Container ref={containerRef} data-aos="fade-left" currentColor={currentColor}>
        <Title ref={titleRef} currentColor={currentColor}>Desarrollo Full-Stack & Ciberseguridad</Title>
        <Subtitle ref={subtitleRef} currentColor={currentColor}>por Ariel Rogel</Subtitle>
        <Description currentColor={currentColor}>
          Especialista en aplicaciones web avanzadas, APIs seguras y auditorías de ciberseguridad
        </Description>
      </Container>
      <Image data-aos="fade-right" src={theme === "light" ? yo : perfil} alt="yo" />
    </Desktop>
  </>
  
  );
};

export default Yo;
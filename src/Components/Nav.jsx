import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaProjectDiagram, FaEnvelope, FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Navigator = styled.div`
  position: fixed;
  z-index: 10000000;
  top: 0%;
  width: 100%;
  margin: auto;
  height: 9%;
  background-color: ${(props) => 
    props.$currentcolor.primero === "#FFFFFF" 
      ? "rgba(255, 255, 255, 0.90)"  // Tema claro: blanco semi-transparente
      : "rgba(26, 22, 37, 0.95)"     // Tema oscuro: más opaco para navegación
  };
  backdrop-filter: blur(15px);
  border-bottom: 1px solid ${(props) => 
    props.$currentcolor.primero === "#FFFFFF"
      ? "rgba(0, 0, 0, 0.1)"         // Borde suave para tema claro
      : "rgba(153, 90, 152, 0.3)"    // Borde violeta para tema oscuro
  };
  opacity: 1;
  display: flex;
  justify-content: stretch;
  align-items: center;
  align-content: center;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 700px) {
    top: 0%;
    width: 100%;
    margin: auto;
  }
`;

const Botones = styled.button`
  border: 2px solid ${(props) => 
    props.$currentcolor.primero === "#FFFFFF"
      ? "rgba(0, 0, 0, 0.2)"
      : props.$currentcolor.primero
  };
  color: ${(props) => props.$currentcolor.cuarto};
  background: ${(props) => 
    props.$currentcolor.primero === "#FFFFFF"
      ? "rgba(0, 0, 0, 0.05)"        // Fondo muy sutil para tema claro
      : "rgba(153, 90, 152, 0.8)"    // Fondo violeta semi-transparente para tema oscuro
  };
  backdrop-filter: blur(8px);
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 2px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  z-index: 70000000;
  padding: 8px;
  width: 100%;
  cursor: pointer;
  
  &:hover {
    background: ${(props) => 
      props.$currentcolor.primero === "#FFFFFF"
        ? "rgba(0, 0, 0, 0.15)"      // Hover más visible para tema claro
        : "rgba(153, 90, 152, 1)"    // Hover sólido para tema oscuro
    };
    color: ${(props) => props.$currentcolor.primero};
    transform: translateY(-2px);
  }
  
  @media screen and (max-width: 700px) {
    font-size: 10px;
    padding: 6px;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.$currentcolor.cuarto};
  background-color: ${(props) => props.$currentcolor.cuarto};
  width: 35%;
  display: inline-block;
  border-radius: 8%;
  transition-duration: 1s;
  z-index: 7;

  &.active {
    background-color: ${(props) => props.$currentcolor.segundo};
    font-weight: bold;
    color: ${(props) => props.$currentcolor.primero};
  }

  &:hover {
    align-self: center;
    width: 60%;
    color: red;
  }

  button {
    background-color: ${(props) => props.$currentcolor.primero};
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    color: ${(props) => props.$currentcolor.cuarto}; 
      &:hover {
      background-color: ${(props) => props.$currentcolor.marron};
      color: ${(props) => props.$currentcolor.amarillo};
      font-size: 110%;
    }
  }

  &:active {
    background-color: ${(props) => props.$currentcolor.primero};
    color: ${(props) => props.$currentcolor.marron};
  }
`;

// Funciones de navegación mejoradas con React Router
const scrollToSection = (sectionId, offset = -100) => {
  // Usar requestAnimationFrame para asegurar que el DOM esté listo
  requestAnimationFrame(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
};

// Hook personalizado para manejar navegación y scroll
const useNavigationHelpers = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToHomeSection = (sectionId, offset = -100) => {
    if (location.pathname === '/') {
      // Si ya estamos en home, hacer scroll directo
      scrollToSection(sectionId, offset);
    } else {
      // Si estamos en otra ruta, navegar a home primero
      navigate('/');
      // Usar un pequeño delay para asegurar que la página cargue
      setTimeout(() => {
        scrollToSection(sectionId, offset);
      }, 100);
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleProjectsClick = () => {
    navigateToHomeSection('proyectos');
  };

  const handleContactClick = () => {
    navigateToHomeSection('contacto');
  };

  return {
    handleHomeClick,
    handleProjectsClick,
    handleContactClick
  };
};

export default function Nav({ currentcolor }) {
  const location = useLocation();
  const { handleHomeClick, handleProjectsClick, handleContactClick } = useNavigationHelpers();

  return (
    <>
     <Navigator $currentcolor={currentcolor}>
        {/* Home */}
        <StyledLink 
          to="/" 
          $currentcolor={currentcolor}
          className={location.pathname === '/' ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault();
            handleHomeClick();
          }}
        >
          <Botones $currentcolor={currentcolor}>
            <FaHome style={{fontSize: "x-large"}} />
          </Botones>
        </StyledLink>

        {/* Proyectos */}
        <StyledLink 
          to="/" 
          $currentcolor={currentcolor}
          onClick={(e) => {
            e.preventDefault();
            handleProjectsClick();
          }}
        >
          <Botones $currentcolor={currentcolor}>
            <FaProjectDiagram style={{fontSize: "large"}} />
            <span style={{marginLeft: '5px', fontSize: '12px'}}>Proyectos</span>
          </Botones>
        </StyledLink>

        {/* SEO */}
        <StyledLink 
          to="/seo" 
          $currentcolor={currentcolor}
          className={location.pathname === '/seo' ? 'active' : ''}
        >
          <Botones $currentcolor={currentcolor}>
            <FaSearch style={{fontSize: "large"}} />
            <span style={{marginLeft: '5px', fontSize: '12px'}}>SEO</span>
          </Botones>
        </StyledLink>

        {/* Ciberseguridad */}
        {/* <StyledLink 
          to="/ciberseguridad" 
          $currentcolor={currentcolor}
          className={location.pathname === '/ciberseguridad' ? 'active' : ''}
        >
          <Botones $currentcolor={currentcolor}>
            <FaShieldAlt style={{fontSize: "large"}} />
            <span style={{marginLeft: '5px', fontSize: '12px'}}>Cyber</span>
          </Botones>
        </StyledLink> */}

        {/* Contacto */}
        <StyledLink 
          to="/" 
          $currentcolor={currentcolor}
          onClick={(e) => {
            e.preventDefault();
            handleContactClick();
          }}
        >
          <Botones $currentcolor={currentcolor}>
            <FaEnvelope style={{fontSize: "large"}} />
            <span style={{marginLeft: '5px', fontSize: '12px'}}>Contacto</span>
          </Botones>
        </StyledLink>
      </Navigator>
    </>
  );
}

// PropTypes validation
Nav.propTypes = {
  currentcolor: PropTypes.object.isRequired
};
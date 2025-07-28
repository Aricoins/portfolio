import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaProjectDiagram, FaEnvelope, FaSearch, FaShieldAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Navigator = styled.div`
  position: fixed;
  z-index: 10000000;
  top: 0%;
  width: 100%;
  margin: auto;
  height: 9%;
  background-color: ${(props) => props.$currentcolor.primero};
  opacity: 1;
  display: flex;
  justify-content: stretch;
  align-items: center;
  align-content: center;

  @media screen and (max-width: 700px) {
    top: 0%;
    width: 100%;
    margin: auto;
  }
`;

const Botones = styled.button`
  border: ${(props) => props.$currentcolor.primero} solid 4px;
  color: ${(props) => props.$currentcolor.cuarto};
  background: ${(props) => props.$currentcolor.cuarto};
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 2px;
  border-radius: 0% 0% 0% 10%;
  transition-duration: 0.5s;
  z-index: 70000000;
  padding: 0px;
  transition-duration: 1s;
  width: 100%;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    font-size: 10px;
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
        <StyledLink 
          to="/ciberseguridad" 
          $currentcolor={currentcolor}
          className={location.pathname === '/ciberseguridad' ? 'active' : ''}
        >
          <Botones $currentcolor={currentcolor}>
            <FaShieldAlt style={{fontSize: "large"}} />
            <span style={{marginLeft: '5px', fontSize: '12px'}}>Cyber</span>
          </Botones>
        </StyledLink>

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
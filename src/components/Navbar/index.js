import React from 'react';
import styled, { useTheme } from 'styled-components'; // Import styled
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'; // Import theme icons
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';

// Simple styled component for the theme toggle button
const ThemeToggleButton = styled.button`
  background-color: transparent;
  border: 1.8px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  padding: 0 12px; // Adjust padding
  margin-left: 12px; // Add some space from the GitHub button
  border-radius: 20px;
  transition: all 0.3s ease-in-out; // Smooth transition

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }

  @media screen and (max-width: 768px) {
    font-size: 0.9rem; // Smaller font on mobile
    padding: 0 8px;
    margin-left: 8px;
    height: 60%;
  }

  @media screen and (max-width: 640px) {
    // Hide on very small screens if needed, or adjust further
    margin-left: 6px;
  }
`;


const Navbar = ({ darkMode, setDarkMode }) => { // Accept props
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#certifications'>Certifications</NavLink>
          <NavLink href='#research'>Research</NavLink> {/* Added Research link */}
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
          {/* Add Theme Toggle Button */}
          <ThemeToggleButton onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <BsFillSunFill size={18} /> : <BsFillMoonFill size={18} />}
          </ThemeToggleButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <MobileLink href='#certifications' onClick={() => {
              setIsOpen(!isOpen)
            }}>Certifications</MobileLink>
            <MobileLink href='#research' onClick={() => { {/* Added Research mobile link */}
              setIsOpen(!isOpen)
            }}>Research</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar

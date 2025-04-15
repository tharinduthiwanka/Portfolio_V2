import React, { useState } from 'react'; // Import useState
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './CertificationsStyle'; // Added Toggle styles
import CertificationCard from '../Cards/CertificationCard'; // Import the card component
import { certifications, certificationCategories } from '../../data/constants'; // Import the certifications data and categories

const Certifications = () => {
  const [toggle, setToggle] = useState('all'); // State for selected category

  return (
    <Container id="certifications">
      <Wrapper>
        <Title>Certifications</Title>
        <Desc>
          Here are some of my certifications. (Placeholders for now)
        </Desc>
        {/* Toggle Button Group */}
        <ToggleButtonGroup >
          {certificationCategories.map((category, index) => (
            <React.Fragment key={category}>
              <ToggleButton
                active={toggle === category}
                onClick={() => setToggle(category)}
              >
                {category.toUpperCase()}
              </ToggleButton>
              {index !== certificationCategories.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </ToggleButtonGroup>

        <CardContainer>
          {/* Filter certifications based on toggle state */}
          {certifications
            .filter((item) => toggle === 'all' || item.category === toggle)
            .map((certification) => (
              <CertificationCard key={certification.id} certification={certification}/>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Certifications;

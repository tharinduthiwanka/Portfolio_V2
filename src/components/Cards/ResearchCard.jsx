import React from 'react'
import styled from 'styled-components'

// Consider renaming or using a generic icon if a document preview isn't always relevant
const LinkPreview = styled.a` // Changed from Document img to a link container
    display: none; // Initially hidden, shown on hover
    padding: 10px;
    background-color: ${({ theme }) => theme.card_light};
    border-radius: 10px;
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    font-weight: 500;
    margin-top: 10px; // Add some space
    &:hover{
        cursor: pointer;
        background-color: ${({ theme }) => theme.primary + '20'}; // Light primary background on hover
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4; // Limit description lines initially
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const Card = styled.div`
    width: 650px; // Keep width consistent with ExperienceCard for now
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    &:hover ${LinkPreview}{ // Show link on card hover
        display: inline-block; // Use inline-block or block as needed
    }
    &:hover ${Span}{ // Expand description on hover
        overflow: visible;
        -webkit-line-clamp: unset;
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }
    border: 0.1px solid #306EE8; // Keep border style consistent
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

// Consider using a generic research icon instead of an image if specific images aren't available
const Image = styled.img`
    height: 50px;
    width: 50px; // Make it square
    background-color: #eee; // Placeholder background
    border-radius: 10px;
    margin-top: 4px;
    object-fit: cover; // Ensure image covers the area
    @media only screen and (max-width: 768px){
        height: 40px;
        width: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

// Renamed fields for research context
const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Publication = styled.div` // Renamed from Company
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

// Added DOI styled component
const DOI = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    margin-top: 4px; // Add some space above DOI
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`;

// Removed Skills section

const ResearchCard = ({ researchItem }) => { // Changed component name and prop name
    return (
        <Card>
            <Top>
                {/* Use a default icon or the provided image */}
                <Image src={researchItem.img || 'path/to/default/research_icon.png'} />
                <Body>
                    <Title>{researchItem.title}</Title>
                    <Publication>{researchItem.publication}</Publication>
                    <Date>{researchItem.date}</Date>
                    {researchItem.doi && <DOI>DOI: {researchItem.doi}</DOI>} {/* Conditionally render DOI */}
                </Body>
            </Top>
            <Description>
                {researchItem?.desc &&
                    <Span>{researchItem.desc}</Span>
                }
            </Description>
            {researchItem.link && // Changed from doc to link
                <LinkPreview href={researchItem.link} target="_blank" rel="noopener noreferrer">
                    View Publication/Details
                </LinkPreview>
            }
        </Card>
    )
}

export default ResearchCard; // Changed export name

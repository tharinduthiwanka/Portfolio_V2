import React from 'react'
import styled from 'styled-components'

// Reusing Document style, maybe rename later if needed
const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
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
-webkit-line-clamp: 4; /* Show 4 lines initially */
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const Card = styled.div`
    width: 330px; /* Adjusted width for potentially more cards */
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
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
        transform: translateY(-5px); /* Re-added this line */
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    /* Keep hover effects for consistency */
    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;
    }
    border: 0.1px solid #854CE6; /* Keep border for consistency */
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

// Renamed from Name to Title for certification context
const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

// Renamed from Degree to IssuingOrg
const IssuingOrg = styled.div`
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

// Removed Grade style

const CertificationCard = ({ certification }) => {
    return (
        <Card>
            <Top>
                <Image src={certification.img} />
                <Body>
                    <Title>{certification.title}</Title>
                    <IssuingOrg>{certification.issuingOrg}</IssuingOrg>
                    <Date>{certification.date}</Date>
                </Body>
            </Top>
            <Description>
                {/* Optional description */}
                {certification.desc && <Span>{certification.desc}</Span>}
            </Description>
            {/* Optional document link */}
            {certification.credentialID && (
                 <a href={certification.credentialURL} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>
                    <Document src={certification.img} /> {/* Reusing image for now, could be a generic doc icon */}
                    <div style={{fontSize: '12px', color: '#854CE6', marginTop: '4px'}}>Credential ID: {certification.credentialID}</div>
                 </a>
            )}
        </Card>
    )
}

export default CertificationCard;

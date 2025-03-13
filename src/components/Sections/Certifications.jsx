import React from "react";
import styled from "styled-components";
import cp from "../../images/cp.png";
import da from "../../images/da.png";
import dbx from "../../images/databricks.png";
import aa from "../../images/aa.png";
import rh from "../../images/redhat.png";



const certifications = [
    {
      title: "Pega Certified Senior System Architect",
      provider: "Pega",
      image: "https://academyartifacts.s3.amazonaws.com/Images/Prod/PEGACPSSA88V1_Current.png",
      credentialLink: "https://drive.google.com/file/d/1N9CYusytpFc6VoBEcFKZQeSQqc9tJkr5/view?usp=sharing"
    },
    {
      title: "Pega Certified System Architect",
      provider: "Pega",
      image: "https://academy.pega.com/sites/default/files/styles/480/public/media/images/2024-08/BA.png?itok=dw5X23-q",
      credentialLink: "https://drive.google.com/file/d/1ATppzN32VXl8QDRWTupIApQm3MhTQb_u/view"
    },
    {
        title: "Google Tensorflow Developer",
        provider: "Google",
        image: "https://www.thetestspecimen.com/img/tensorflow-certificate/tensorflow-badge-1920w.png",
        credentialLink: "https://www.credential.net/f5d82822-ab03-4d86-8bb0-1af35b7a8c4b#acc.LK9xrIY4"
      },
      {
        title: "Databricks Generative AI Fundamentals",
        provider: "Databricks",
        image: dbx,
        credentialLink: "https://credentials.databricks.com/7f998d3d-f843-4e75-a28b-5d9469bfe11e#acc.4Kbyc6LV"
      },
    {
      title: "AWS Certified Developer Associate",
      provider: "Amazon Web Services",
      image: da,
      credentialLink: "https://www.credly.com/badges/b44dc827-5653-4488-b929-7ca599014ebd/public_url"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      provider: "Amazon Web Services",
      image: cp,
      credentialLink: "https://www.credly.com/badges/82f1d9db-9404-4378-bf64-4d9ffd9ee964/public_url"
    },
    
      {
        title: "Automation Anywhere Certified Essentials RPA Professional (Automation 360)",
        provider: "Automation Anywhere",
        image: aa,
        credentialLink: "https://certificates.automationanywhere.com/dcab6aea-b2ca-4748-8ad4-67f870bb7b2d#acc.IA4iWjm0"
      },
      {
        title: "Red Hat Certified Enterprise Application Developer",
        provider: "RedHat",
        image: rh,
        credentialLink: "https://www.credly.com/badges/94a7e0cd-3b88-4fe6-b313-3075e5286e6c/public_url"
      },
      {
        title: " Java FullStack Developer",
        provider: "Coursera",
        image: "https://images.credly.com/images/27654fce-fa93-4b09-87a0-e41a7557aed6/blob.png",
        credentialLink: "https://www.coursera.org/account/accomplishments/specialization/8P89SLB7LH29"
      },
      
  ];

  
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 50px 20px;
width: 100%;
`;

const Title = styled.h2`
font-size: 36px;
color: ${({ theme }) => theme.text_primary};
margin-bottom: 20px;
`;

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
max-width: 1100px;
width: 100%;

@media (max-width: 960px) {
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 600px) {
  grid-template-columns: repeat(1, 1fr);
}
`;

const Card = styled.div`
background: ${({ theme }) => theme.background_light};
padding: 16px;
border-radius: 12px;
text-align: center;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
transition: transform 0.2s;

&:hover {
  transform: translateY(-5px);
}
`;

const Image = styled.img`
width: 100%;
max-width: 150px;
height: auto;
border-radius: 8px;
`;

const CertTitle = styled.h3`
font-size: 18px;
color: ${({ theme }) => theme.text_primary};
margin-top: 10px;
`;

const Provider = styled.p`
font-size: 14px;
color: ${({ theme }) => theme.text_secondary};
`;

const VerifyButton = styled.a`
display: inline-block;
margin-top: 10px;
padding: 8px 16px;
font-size: 14px;
font-weight: 600;
color: #fff;
background-color: ${({ theme }) => theme.primary};
border: none;
border-radius: 6px;
text-decoration: none;
transition: background 0.3s ease-in-out;
cursor: pointer;

&:hover {
  background-color: ${({ theme }) => theme.secondary};
}
`;

const Certifications = () => {
return (
  <Container id="Certifications">
    <Title>Certifications</Title>
    <Grid>
      {certifications.map((cert, index) => (
        <Card key={index}>
          <Image src={cert.image} alt={cert.title} />
          <CertTitle>{cert.title}</CertTitle>
          <Provider>{cert.provider}</Provider>
          <VerifyButton href={cert.credentialLink} target="_blank" rel="noopener noreferrer">
            Verify
          </VerifyButton>
        </Card>
      ))}
    </Grid>
  </Container>
);
};

export default Certifications;
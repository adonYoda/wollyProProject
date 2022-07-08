import React from "react";
import { Link} from "react-router-dom";
import styled from "styled-components";
import { Facebook, Instagram, Twitter } from "../iconComponents";

const Title = styled.h2`
  font-size: 24px;
  font-family: "Muli";
`;

const MySection = styled.div`
  display: flex;
  flex-direction: column;
`;
const MyFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  height: 139px;
  margin: 0 auto;

`;
const TextFollowUs = styled.div``;

const MyLink = styled(Link)`
  text-decoration: none;
`

const Footer = () => {
  return (
    <MyFooter>
      <MySection>
        <Title>Account</Title>
        <MyLink to="/signIn">Sign In</MyLink>
        <MyLink to="/registrationPage">Register</MyLink>
        <MyLink to="/orderStatus">Order Status</MyLink>
      </MySection>

      <MySection>
        <Title>About Us</Title>
        <MyLink to="/ourStory">Our Story</MyLink>
        <MyLink to="/careers">Careers</MyLink>
      </MySection>

      <MySection>
        <Title>Help</Title>
        <MyLink to="/contactUs">Contact Us</MyLink>
        <MyLink to="/orderStatus">Order Status</MyLink>
        <MyLink to="/returns">Returns</MyLink>
      </MySection>

      <MySection>
        <Title> Follow Us! </Title>
        <TextFollowUs>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, vel?
          Veritatis optio distinctio, nobis exercitationem debitis, ea ipsum
          tempora cumque, atque ad qui voluptatum dicta dolor expedita natus
          vitae dolorem?
        </TextFollowUs>
        <Instagram />
        <Facebook />
        <Twitter />
      </MySection>
    </MyFooter>
  );
};

export default Footer;

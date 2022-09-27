import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import HeadImage from "../assets/image/undraw_web_shopping_re_owap.svg";

export function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <HeadImg src={HeadImage} alt="image" />
      </Container>
      ;
    </>
  );
}

const Container = styled.section`
  padding-top: 8rem;
`;

const HeadImg = styled.img`
  width: 30rem;
  height: 30rem;
`;

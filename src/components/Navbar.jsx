import styled from "styled-components";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <Container>
      <Logo />
      <Wrapper>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </Wrapper>

      <Wrap>
        <Button color="background">Log In</Button>
        <Button color="white">Sign Up</Button>
      </Wrap>
    </Container>
  );
}

const Container = styled.section`
  font-family: "Poppins";
  width: 100vw;
  height: 5rem;
  background-color: #158a8a;
  display: flex;
  align-items: center;
  justify-content: space-around;

  position: fixed;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 4rem;

  a {
    text-decoration: none;
    color: #ffffff;
    font-size: 1.25rem;
  }
`;

const Wrap = styled(Wrapper)`
  gap: 1.4rem;
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.color === "white" ? "#ffffff" : "#158a8a"};
  border: none;
  color: ${(props) => (props.color === "background" ? "#ffffff" : "#158a8a")};
  border-radius: 50px;
  height: 2.2rem;
  width: 6rem;
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;
  transition: 0.4s;
  :hover {
    background-color: ${(props) =>
      props.color === "white" ? "#f7efef" : "#157e7e"};
  }
`;

import styled from "styled-components";

export function Logo() {
  return (
    <Container>
      <h2>Store</h2>
      <h1>Pia</h1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  font-family: "Prata";
  color: #ffffff;
  cursor: pointer;

  h1 {
    font-size: 2.3rem;
    margin-left: -24px;
    margin-top: 5px;
  }
  h2 {
    transform: rotate(270deg);
    font-size: 0.7rem;
  }
`;

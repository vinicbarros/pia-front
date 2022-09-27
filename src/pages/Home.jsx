import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import HeadImage from "../assets/image/undraw_web_shopping_re_owap.svg";
import { FaShippingFast } from "react-icons/fa";
import { BsHeadset } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { GoPackage } from "react-icons/go";

export function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Introduction>
          <Top>
            <WrapImg>
              <HeadImg src={HeadImage} alt="image" />
            </WrapImg>
            <WrapTitle>
              <Title>Pia Store</Title>
              <SubTitle>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Itaque, porro iure. Culpa repudiandae aut vel, eum provident
                excepturi at, veritatis officiis omnis rerum, nisi reiciendis
                iure corrupti dicta odit recusandae?
              </SubTitle>
              <Button color="white">Shop Now</Button>
            </WrapTitle>
          </Top>
          <Bottom>TESTE</Bottom>
        </Introduction>
        <Benefits>
          <Info>
            <h2>How it works</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores numquam corporis inventore facere sunt maiores
              necessitatibus labore unde.
              <br /> <br /> Dolorum qui similique quisquam maxime error quidem
              expedita reiciendis, accusantium placeat. Accusantium!
            </p>
            <Button color="background">Shop now</Button>
          </Info>
          <Cards>
            <Card>
              <Circle>
                <FaShippingFast color="#ffffff" size="2.1rem" />
              </Circle>
              <h3>Free shipping</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus velit praesentium doloribus.
              </p>
            </Card>
            <Card>
              <Circle>
                <BsHeadset color="#ffffff" size="2.1rem" />
              </Circle>
              <h3>Client support</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus velit praesentium doloribus.
              </p>
            </Card>
            <Card>
              <Circle>
                <MdSecurity color="#ffffff" size="2.1rem" />
              </Circle>
              <h3>Warranty</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus velit praesentium doloribus.
              </p>
            </Card>
            <Card>
              <Circle>
                <GoPackage color="#ffffff" size="2.1rem" />
              </Circle>
              <h3>7 day return</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus velit praesentium doloribus.
              </p>
            </Card>
          </Cards>
        </Benefits>
      </Container>
      ;
    </>
  );
}

const Container = styled.main`
  padding-top: 5rem;
  width: 100vw;
`;

//--------------INTRODUCTION----------------------//

const Introduction = styled.section`
  //background-color: #099a9a;
  background-image: url("src/assets/image/randompic.jpg");
  background-size: cover;
  padding-inline: 5rem;
`;
const Top = styled.div`
  display: flex;

  div + div {
    margin-left: 22rem;
  }
`;

const WrapImg = styled.div`
  margin-left: -5rem;
  padding-left: 5rem;
  width: 35rem;
  height: 35rem;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 0 0 30% 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

const WrapTitle = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
  font-family: "Prata";
  color: #ffffff;
  font-size: 5rem;
`;

const SubTitle = styled.p`
  text-align: center;
  margin-top: 1.8rem;
  color: #ffffff;
  font-size: 1.4rem;
  width: 36rem;
`;

const HeadImg = styled.img`
  width: 30rem;
  height: 30rem;
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.color === "white" ? "#ffffff" : "#158a8a"};
  border: none;
  color: ${(props) => (props.color === "background" ? "#ffffff" : "#158a8a")};
  border-radius: 50px;
  height: 4rem;
  width: 9rem;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.4s;
  align-self: center;
  margin-top: 2rem;

  :hover {
    background-color: ${(props) =>
      props.color === "white" ? "#f7efef" : "#157e7e"};
  }
`;

const Bottom = styled.div`
  height: 4rem;
`;

//------------FEATURES AND BENEFITS-------------------//

const Benefits = styled.section`
  font-family: "Poppins";
  margin-top: 10rem;
  padding-inline: 5rem;
  margin-bottom: 50rem;
  display: flex;
`;

const Info = styled.div`
  margin-right: 20rem;
  h2 {
    margin-bottom: 1.4rem;
    font-size: 4rem;
    font-weight: bold;
    color: #313131;
  }

  p {
    color: #5f5f5f;
    width: 32rem;
    font-size: 1.2rem;
    line-height: 1.8rem;
  }
`;

const Card = styled.div`
  width: 20rem;
  height: 19rem;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;

  h3 {
    margin-top: 1rem;
    color: #313131;
    font-size: 1.2rem;
    font-weight: 500;
  }

  p {
    margin-top: 1.2rem;
    line-height: 1.5rem;
    text-align: center;
    color: #5f5f5f;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  background-color: #0d8888;
  display: flex;
  align-items: center;
  justify-content: center;
`;

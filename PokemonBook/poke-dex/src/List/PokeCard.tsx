import styled from "@emotion/styled";
import PokeNameChip from "../Common/PokeNameChip";
import PokeMarkChip from "../Common/PokeMarkChip";
import { useNavigate } from "react-router-dom";

const TempImgUrl =
  "https://www.google.com/imgres?q=%ED%94%BC%EC%B9%B4%EC%B8%84&imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fpokemon%2Fimages%2F2%2F23%2F%25EB%25A0%2588%25EC%25B8%25A0%25EA%25B3%25A0_%25ED%2594%25BC%25EC%25B9%25B4%25EC%25B8%2584.png%2Frevision%2Flatest%2Fscale-to-width-down%2F250%3Fcb%3D20180530073034%26path-prefix%3Dko&imgrefurl=https%3A%2F%2Fpokemon.fandom.com%2Fko%2Fwiki%2F%25ED%2594%25BC%25EC%25B9%25B4%25EC%25B8%2584_(%25ED%258F%25AC%25EC%25BC%2593%25EB%25AA%25AC)&docid=sZteUHVTFASPnM&tbnid=lwDkRu4lS07XLM&vet=12ahUKEwir8vj4wPKMAxV93TQHHYYyDSEQM3oECDAQAA..i&w=250&h=333&hcb=2&ved=2ahUKEwir8vj4wPKMAxV93TQHHYYyDSEQM3oECDAQAA";

const PokeCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemon/피카츄`);
  }

  return (
    <Item onClick={handleClick}>
      <Header>
        <PokeNameChip />
      </Header>
      <Body>
        <Image src={TempImgUrl} alt="피카츄" />
      </Body>
      <Footer>
        <PokeMarkChip />
      </Footer>
    </Item>
  );
};

const Item = styled.li`
  display: flex;
  flex-direction: column;

  padding: 8px;

  width: 250px;
  height: 300px;

  border: 1px solid #c0c0c0;
  box-shadow: 1px 1px 3px 1px #c0c0c0;

  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1)
  }

  &:active {
    background-color: yellow;
    opacity: 0.8;
    transition: background-color 0s;
  }
`;

const Header = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;

const Body = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;

const Image = styled.img`
  width: 180px;
  height: 180px;
`;

const Footer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;

export default PokeCard;

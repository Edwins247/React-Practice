import styled from "@emotion/styled";
import PokeMarkChip from "../Common/PokeMarkChip";

const TempImgUrl =
  "https://www.google.com/imgres?q=%ED%94%BC%EC%B9%B4%EC%B8%84&imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fpokemon%2Fimages%2F2%2F23%2F%25EB%25A0%2588%25EC%25B8%25A0%25EA%25B3%25A0_%25ED%2594%25BC%25EC%25B9%25B4%25EC%25B8%2584.png%2Frevision%2Flatest%2Fscale-to-width-down%2F250%3Fcb%3D20180530073034%26path-prefix%3Dko&imgrefurl=https%3A%2F%2Fpokemon.fandom.com%2Fko%2Fwiki%2F%25ED%2594%25BC%25EC%25B9%25B4%25EC%25B8%2584_(%25ED%258F%25AC%25EC%25BC%2593%25EB%25AA%25AC)&docid=sZteUHVTFASPnM&tbnid=lwDkRu4lS07XLM&vet=12ahUKEwir8vj4wPKMAxV93TQHHYYyDSEQM3oECDAQAA..i&w=250&h=333&hcb=2&ved=2ahUKEwir8vj4wPKMAxV93TQHHYYyDSEQM3oECDAQAA";

const PokemonDetail = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={TempImgUrl} alt="포켓몬 이미지" />
      </ImageContainer>
      <Divider />
      <Body>
        <h2>기본 정보</h2>
        <Table>
          <tbody>
            <TableRow>
              <TableHeader>번호</TableHeader>
              <td>1</td>
            </TableRow>
            <TableRow>
              <TableHeader>이름</TableHeader>
              <td>이상해씨</td>
            </TableRow>
          </tbody>
        </Table>
        <h2>능력치</h2>
        <Table>
          <tbody>
            <TableRow>
              <TableHeader>hp</TableHeader>
              <td>45</td>
            </TableRow>
            <TableRow>
              <TableHeader>attack</TableHeader>
              <td>49</td>
            </TableRow>
          </tbody>
        </Table>
      </Body>
      <Footer>
        <PokeMarkChip />
      </Footer>
    </Container>
  );
};

const Container = styled.section`
  border: 1px solid #c0c0c0;
  margin: 16px 32px;
  border-radius: 16px;
  box-shadow: 1px 1px 3px 1px #c0c0c0;
`;

const ImageContainer = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;

const Image = styled.img`
  width: 350px;
  height: 350px;
`;

const Divider = styled.hr`
  margin: 32px;
  border-style: none;
  border-top: 1px dashed #d3d3d3;
`;

const Body = styled.section`
  margin: 0 32px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0 auto 16px;

  th,
  td {
    padding: 6px 12px;
  }
`;

const TableRow = styled.tr`
  border-width: 1px 0;
  border-style: solid;
  border-color: #f0f0f0;
`;

const TableHeader = styled.th`
  width: 1px;
  white-space: nowrap;
  text-align: left;
  font-weight: normal;
  font-size: 14px;
  color: #a0a0a0;
`;

const Footer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 32px 16px;
`;

export default PokemonDetail;

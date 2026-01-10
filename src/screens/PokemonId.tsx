import styled from 'styled-components/native';
import { StandardImageBackground } from '../styled-components/StandardImageBackground';

const IdText = styled.Text`
  color: yellow;
  font-family: ComicReliefBold;
`;
const IdPlaceholder = styled.View`
  background-color: #1eff00ff;
  width: 100px;
  height: 100px;
`;
const InfoDisplay = styled.View`
  width: 250px;
  height: 50px;
  align-items: 'flex-start';
`;

export default function PokemonIdScreen() {
  return (
    <StandardImageBackground>
      <IdText>ID: ???</IdText>

      <IdPlaceholder />

      <InfoDisplay>
        <IdText>Name: ???</IdText>

        <IdText>Type: ???</IdText>
      </InfoDisplay>
    </StandardImageBackground>
  );
}

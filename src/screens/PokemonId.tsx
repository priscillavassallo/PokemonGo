import styled from 'styled-components/native';
import { StandardImageBackground } from '../styled-components/StandardImageBackground';
import { StaticScreenProps } from '@react-navigation/native';

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

type Props = StaticScreenProps<{
  id: string;
}>;

export default function PokemonIdScreen({ route }: Props) {
  const id = route.params.id;
  const onlyId = id.substr(19, id.length);

  return (
    <StandardImageBackground>
      <IdText>ID: {onlyId}</IdText>

      <IdPlaceholder />

      <InfoDisplay>
        <IdText>Name: ???</IdText>

        <IdText>Type: ???</IdText>
      </InfoDisplay>
    </StandardImageBackground>
  );
}

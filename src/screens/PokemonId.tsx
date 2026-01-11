import styled from 'styled-components/native';
import { StandardImageBackground } from '../styled-components/StandardImageBackground';
import { StaticScreenProps } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { capitalize } from '../utils/capitalize';

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
type Pokemon = {
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
};

export default function PokemonIdScreen({ route }: Props) {
  const id = route.params.id;
  const onlyId = id.substr(19, id.length);

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${onlyId}`,
        );
        const json = await response.json();
        setPokemon(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [onlyId]);

  return (
    <StandardImageBackground>
      <IdText>ID: {onlyId}</IdText>

      <IdPlaceholder />

      <InfoDisplay>
        {loading && <IdText>Loading...</IdText>}

        {!loading && pokemon && (
          <>
            <IdText>Name: {pokemon.name.toUpperCase()} </IdText>
            <IdText>
              Type: {pokemon.types.map(t => capitalize(t.type.name)).join(', ')}
            </IdText>
          </>
        )}
      </InfoDisplay>
    </StandardImageBackground>
  );
}

import styled from 'styled-components/native';
import { StandardImageBackground } from '../styled-components/StandardImageBackground';
import {
  StandardBackButton,
  TextBackButton,
} from '../styled-components/StandardButton';
import { StaticScreenProps, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { capitalize } from '../utils/capitalize';
import { ScreenNavigationProp } from '../navigation/types';

const IdText = styled.Text`
  color: yellow;
  font-family: ComicReliefBold;
`;
const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const PokemonImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  min-width: 160px;
  min-height: 160px;
`;

const ButtonContainer = styled.View`
  width: 250px;
  align-items: flex-end;
`;

const InfoDisplay = styled.View`
  width: 250px;
  height: 100px;
  align-items: 'flex-start';
  justify-content: space-evenly;
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
  sprites: {
    front_default: string | null;
  };
};

export default function PokemonIdScreen({ route }: Props) {
  const id = route.params.id;
  const onlyId = id.slice(19);

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation<ScreenNavigationProp>();

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

      <ImageContainer>
        {pokemon?.sprites.front_default && (
          <PokemonImage source={{ uri: pokemon.sprites.front_default }} />
        )}
      </ImageContainer>

      <InfoDisplay>
        {loading && <IdText>Carregando...</IdText>}

        {!loading && pokemon && (
          <>
            <IdText>Name: {pokemon.name.toUpperCase()} </IdText>
            <IdText>
              Type: {pokemon.types.map(t => capitalize(t.type.name)).join(', ')}
            </IdText>
          </>
        )}
      </InfoDisplay>

      <ButtonContainer>
        <StandardBackButton onPress={() => navigation.navigate('Home')}>
          <TextBackButton>Voltar ao Início</TextBackButton>
        </StandardBackButton>
      </ButtonContainer>
    </StandardImageBackground>
  );
}

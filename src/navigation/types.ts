import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  PokemonId: undefined;
};

export type ScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PokemonId' | 'Home'
>;

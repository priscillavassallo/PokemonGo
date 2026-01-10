import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Scan: undefined;
  PokemonId: undefined;
};

export type ScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home' | 'Scan' | 'PokemonId'
>;

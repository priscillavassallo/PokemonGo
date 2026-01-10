import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Scan: undefined;
  PokemonId: { id: string };
};

export type ScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home' | 'Scan' | 'PokemonId'
>;

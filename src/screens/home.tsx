import { View } from 'react-native';
import styled from 'styled-components/native';
import { StandardImageBackground } from '../styled-components/StandardImageBackground';
import {
  StandardHomeButton,
  TextHomeButton,
} from '../styled-components/StandardButton';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProp } from '../navigation/types';

const Title = styled.Text`
  color: red;
  font-family: ComicReliefBold;
`;
const Logo = styled.Image.attrs({
  source: require('../assets/images/pokemongo-logo.png'),
  resizeMode: 'contain',
})`
  width: 50%;
`;

export default function HomeScreen() {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <StandardImageBackground>
      <View>
        <Title>PRISCILLA VASSALLO</Title>
      </View>

      <Logo />

      <StandardHomeButton onPress={() => navigation.navigate('Scan')}>
        <TextHomeButton>Scannear QRCODE</TextHomeButton>
      </StandardHomeButton>
    </StandardImageBackground>
  );
}

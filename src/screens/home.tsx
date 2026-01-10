import { View } from 'react-native';
import styled from 'styled-components/native';
import { StandardImageBackground } from '../styled-components/StandardImageBackground';
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
const ScanButton = styled.TouchableOpacity`
  background-color: white;
  padding: 18px 12px;
`;

const TextButton = styled.Text`
  color: #000;
  font-family: ComicReliefBold;
`;

export default function HomeScreen() {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <StandardImageBackground>
      <View>
        <Title>PRISCILLA VASSALLO</Title>
      </View>

      <Logo />

      <ScanButton onPress={() => navigation.navigate('Scan')}>
        <TextButton>Scannear QRCODE</TextButton>
      </ScanButton>
    </StandardImageBackground>
  );
}

import styled from 'styled-components/native';

export const StandardImageBackground = styled.ImageBackground.attrs({
  source: require('../assets/images/background.jpg'),
  imageStyle: {
    resizeMode: 'cover',
  },
})`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`;

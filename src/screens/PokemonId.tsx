import styled from "styled-components/native";
import { StandardImageBackground } from "../styled-components/StandardImageBackground";

const IdText = styled.Text`
  color: yellow;
  font-family: ComicReliefBold;
`
const IdPlaceholder = styled.View`
  background-color: #1eff00ff;
  width: 100;
  height: 100;
`
const InfoDisplay = styled.View`
  width: 250;
  height: 50;
  align-items: "flex-start";
`

export default function PokemonId() {
  return (
    <StandardImageBackground>

      <IdText> 
        ID: ???
      </IdText>

      <IdPlaceholder />

      <InfoDisplay>
        <IdText> 
        Name: ???
        </IdText>
    
        <IdText> 
        Type: ???
        </IdText>  
      </InfoDisplay>  

    </StandardImageBackground>
  );
}
import styled from "styled-components";
import { ScrollView } from 'react-native'
import Card from './components/Card'
export default function App() {
  const data = {
    title: 'Styled Component',
    captions: 'React native',
    text: '5 of 12 content'
  }
  return (
    <Container>
      <TitleBar>
        <Avatar source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO3SPvKM7RSfp_dsgU-tnS-6Ttrf8h5NPZpAGBda1UKEBkPriCq04Su1bQumWaRIJzTyk&usqp=CAU'}} />
        <Title>Welcome Back</Title>
        <Name>Ankit</Name>
      </TitleBar>
      <Subtitle>Software Engineer</Subtitle>
      <ScrollView  horizontal={true}>
      <Card data={data} />
      <Card data={data} />
      <Card data={data} />
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  background-color: #f0f5f3;
  flex: 1;
`;

const TitleBar = styled.View`
margin-top: 50px;
padding-left: 70px;
`

const Avatar = styled.Image`
margin-left: 10px;
width: 50px;
height: 50px;
border-radius: 25px;
position: absolute;
top: 0px;
left: 0px;
`

const Title = styled.Text`
color: #b8bece;
font-size: 16px;
font-weight: 500;
`
const Name = styled.Text`
font-size: 20px;
font-weight: bold;
color: #3c4560
`
const Subtitle = styled.Text`
margin: 50px 0px 0px 50px;
text-transform: uppercase;
`
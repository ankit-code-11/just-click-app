import styled from "styled-components";
import { ScrollView, SafeAreaView, View, Text, FlatList } from 'react-native'
import Card from './components/Card'
import { Ionicons } from "@expo/vector-icons";
import Logo from './components/Logo'
export default function App() {
  const data = [
    {
      title: "React Native for Designers",
      image: '',
      subtitle: "React Native",
      caption: "1 of 12 sections",
      logo: require("./assets/logo-react.png")
    },
    {
      title: "Styled Components",
      image: require("./assets/background12.jpg"),
      subtitle: "React Native",
      caption: "2 of 12 sections",
      logo: require("./assets/logo-react.png")
    },
    {
      title: "Props and Icons",
      image: require("./assets/background13.jpg"),
      subtitle: "React Native",
      caption: "3 of 12 sections",
      logo: require("./assets/logo-react.png")
    },
    {
      title: "Static Data and Loop",
      image: require("./assets/background14.jpg"),
      subtitle: "React Native",
      caption: "4 of 12 sections",
      logo: require("./assets/logo-react.png")
    }
  ];

  const skills = [
    {
      name: "Flutter",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAn1BMVEX///9UxfgBV5sptvZOw/jd8v265fylu9PY8P1KwvhBwfhmyvkATZbx+v4AUZjn9v4AsfbQ7f0raKQBU5TM2OYARZMZtPYBUI4osO4AI0EAK0wBTYkBWJ0BR34BQXQGSHoBPm4EKkUANmA9aJEAQHwsY5kAQ3oGQ3EFPmgAPG4ANWIFNVgAL1cELk0AJ0kBP3AApOXM0dkANHoXX6C6y94QIIt1AAADOElEQVR4nO3c+3bSQBDHccpFK1hrpTUrkJCi0gp49/2fzWRJa6BJ9lbZmTm/7wNw5nNmczZ/cNLrIYQQQgghZG70IqSr2OObOx+/8m88uYg9v7Hz8Zl/w0ns8c0BCCDxAASQeAACSDwAASQegAASD0AAiQcggMQDEEDiAQgg8QAEkHgAAkg8AAEkHoAAEg9AAIkHIIDEAxBA4gEIIPEABJB4AAJIPAABJB6AABIPQACJByCAxAMQQOIBCCDxAASQeAACSDwAASQegAASD0AAifdfgRejoOgDL4cBn4Ycjy8ZAIcBP372LJ++JAwcSgeK3yCAAJZdSAcG7ZAHMIDIBehN5AP0JHK46IOInDboReQGdCbyAzoSOQKdiDyBDkSuQGsiX6AlkTPQisjrovcg8t6gBZE/0EA0Agf0gZ1EI/D9YEAf2EG0AXoTTwhsJdoBPYknBbYQbYFexBMDG4n2QA/iyYENRBegM/EEF/3TjohuQEdihA2WHRBdgU7ESMADojvQgRgNWCP6AK2JEYGPRD+gJTEqsCL6Aq2IkYGa6A+0IEYHlsQAoJFIAFgQu2foBhqIUS56x0zATiKJDRoyAzuIUoCtRDnAFqIkYCNRFrCBKA34hCgPeESUCDwgyrjoO4gyN1gjygVWRMlATZQNLIgcgKMA4GAwoQ/sXb0NAKqPsce3KYColp8+xx7fJn/icp28eRd7fJs8iaoATvuCiXtgXy5RLVMNFEt82KBYYgGcTx+EEonqrg4USCyBSV0ojVgB60JZRHWXaeCBUBJR3X9JG4RyiHtgg1AKUQObhTKI6n6zbhVKIKrtJvsnFEhU212+TrWweYncierrLs+6hbyJBXCV60Paekp5E9Xtt9XmcYetQr5EdfthVxMev7XxJxbAmRZmqT6mrT6uxBJYCcsHcdpftANZEjVQC79nadLv9nEk7oGz7WqVp1OTjiOxAs52WbJYWAGZEStgPrfVcSNq4GZufPbYEgvgKu07rY8X8ccsT9xxnIg/fyUdd7sI4vWNNxBEMoEIIog0AhFEEGkEIogg0ghEEEGkEYggMiG+9u/mN4M/+PeuX4b0J/b4CCGEEELoWfoLHXqgHOoeuJEAAAAASUVORK5CYII="
    },
    {
      name: 'Figma',
      image: 'https://designerrs.com/wp-content/uploads/2021/07/Most-Helpful-Figma-Plugins-of-2021-for-designers-1.png'
    }, 
    {
      name: "Node js",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToCOdtp1sfknhbhKKD93RrEG4PDinvpn6rDg&usqp=CAU'
    },
    {
      name: 'Express Js',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK20iYwE4GEbS99aO8-_Kelii0cu9ZX0_zsA&usqp=CAU'
    }
  ]

  return (
    <Container>
      <TitleBar>
        <Avatar source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO3SPvKM7RSfp_dsgU-tnS-6Ttrf8h5NPZpAGBda1UKEBkPriCq04Su1bQumWaRIJzTyk&usqp=CAU'}} />
        <Title>Hi 👋, I'm </Title>
        <Name>अंकित यादव </Name>
        <Ionicons name="ios-notifications" style={{position: 'absolute', top: 5, right: 20}} size={25} color="#4775f2" />
      </TitleBar>
      <Wrapper>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
      {skills.map((item, i) => {
        console.log(item)
        return (<Logo key={i} data={item} />)
      })}

      </ScrollView>
      </Wrapper>
      <Subtitle>Software Engineer</Subtitle>
      <ScrollView horizontal={true}>
        {data.map((item, i) => {
          <Card key={i} data={item} />
        })}
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
const Wrapper = styled.View`
margin-top: 29px;  
/* flex-direction: row; */
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
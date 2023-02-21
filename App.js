import styled from "styled-components";
import { ScrollView, SafeAreaView, View, Text, FlatList } from 'react-native'
import Card from './components/Card'
import { Ionicons } from "@expo/vector-icons";
import Logo from './components/Logo'
import Course from "./components/Course";
export default function App() {

  const data = [
    {
      title: "React Native for Designers",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3nskei5EBueDjklbw1uTb1ENG4sIAasNlew&usqp=CAU',
      subtitle: "React Native",
      caption: "1 of 12 sections",
    },
    {
      title: "Styled Components",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4BAD4FJGmgqnCqC_swkCHsZKewATIRFoEA&usqp=CAU',
      subtitle: "React Native",
      caption: "2 of 12 sections",
    },
    {
      title: "Props and Icons",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSegh4DF6pFxCr4ySox9uxdXmma8-MbveapA&usqp=CAU',
      subtitle: "React Native",
      caption: "3 of 12 sections",
    },
    {
      title: "Static Data and Loop",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV_aXNOZFb0_x_9K--E70PZbtmPbIPtpFAiw&usqp=CAU',
      subtitle: "React Native",
      caption: "4 of 12 sections",
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

  const courses = [
    {
      title: "Prototype in InVision Studio",
      subtitle: "10 sections",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF2iQvzV5yIVy1FT5kY99N8jMDfhVsSYoWbA&usqp=CAU',
      logo: '',
      author: "Meng To",
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOH80WRk1WEtUqNcwmVf6MfxzLuSQHoojxGD7ge6eAlGyA-ZkL-5mJ99z8n2rsQHlZlo&usqp=CAU',
      caption: "Design and interactive prototype"
    },
    {
      title: "React for Designers",
      subtitle: "12 sections",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpd3FT2ToGsvN2dT9SJiUxoSkcJp1mVKKsIA&usqp=CAU',
      logo: '',
      author: "Meng To",
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW8h_RFJydF6ahain7qyoL_W90NnkWr2Lt7Q&usqp=CAU',
      caption: "Learn to design and code a React site"
    },
    {
      title: "Design and Code with Framer X",
      subtitle: "10 sections",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-jzCqyN6g8ATvCK7pzq0qbvWobx_MCqJnXSyhXQmguvx_7SGVachzB9jBjRQHOhuLSEg&usqp=CAU',
      logo: '',
      author: "Meng To",
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWqS-NyRznIj7H6Tmkj7jHNtiGKlC45pRJuQ&usqp=CAU',
      caption: "Create powerful design and code components for your app"
    },
    {
      title: "Design System in Figma",
      subtitle: "10 sections",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKhq-O93moCiLtKbCv6HALkAyZmmJpLpeCX_hIfXKzP2tKG_r6OFpFvMGYNjEN8CXxshY&usqp=CAU',
      logo:'',
      author: "Meng To",
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXzL_-7e866moypSJcdnAcYp4J5AkYJSCyCi4JdCeekBLE3BymBQ2xn7dYz6lE9lj6W10&usqp=CAU',
      caption:
        "Complete guide to designing a site using a collaborative design tool"
    }
  ];

  return (
    <Container>
      <TitleBar>
        <Avatar source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO3SPvKM7RSfp_dsgU-tnS-6Ttrf8h5NPZpAGBda1UKEBkPriCq04Su1bQumWaRIJzTyk&usqp=CAU'}} />
        <Title>Hi 👋, I'm </Title>
        <Name>अंकित यादव  </Name>
        <Ionicons name="ios-notifications" style={{position: 'absolute', top: 5, right: 20}} size={25} color="#4775f2" />
      </TitleBar>
      <Wrapper>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
      {skills.map((item, i) => {
        return (<Logo key={i} data={item} />)
      })}
      </ScrollView>
      </Wrapper>
      <Subtitle>Software Engineer</Subtitle>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((item, i) => {
         return <Card key={i} data={item}  />
        })}
      </ScrollView>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          courses.map((item, i) => {
            return <Course key={i} data={item} />
          })
        }
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
margin: 20px 0px 0px 30px;
text-transform: uppercase;
font-weight: bold;
`
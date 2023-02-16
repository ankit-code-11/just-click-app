import React from 'react';
import styled from 'styled-components';

const Card = props => {
    return(
        <Container>
            <Cover>
                <Image source={{uri: 'https://wallpapershome.com/images/pages/ico_h/23424.jpg'}} />
                <Title>Styled Component</Title>
            </Cover>
            <Content>
                <Logo source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"}} />
                <Wrapper>

                <Text>React Native</Text>
                <Subtitle>5 of 12 content</Subtitle>
                </Wrapper>

            </Content>
        </Container>
    )
}

export default Card;

const Container = styled.View`
    background: white;
    width: 65%;
    height: 28%;
    border-radius: 10px;
    margin: 20px 0px 0px 20px;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.15);
`

const Cover = styled.View`
width: 100%;
height: 80%;
border-top-left-radius: 14px;
border-top-right-radius: 14px;
overflow: hidden;
`

const Image = styled.Image`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
`

const Title = styled.Text`
color: white;
font-size: 24px;
font-weight: bold;
margin: 10px 0px 0px 10px
width: 50%
`

const Content = styled.View`
padding-left: 20px;
flex-direction: row;
`

const Logo = styled.Image`
    width: 33px;
    height: 33px;
`

const Text = styled.Text`
    
`

const Subtitle = styled.Text`
    
`

const Wrapper = styled.View``
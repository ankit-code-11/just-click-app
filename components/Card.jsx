import React from 'react';
import styled from 'styled-components';

const Card =( {data}) => {
    console.log(data, 'from card')
    return(
        <Container>
            <Cover>
                <Image source={{uri: data.image}} />
                <Title>{data.title}</Title>
            </Cover>
            <Content>
                <Logo source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"}} />
                <Wrapper>
                    <Caption>{data.subtitle}</Caption>
                    <Text>{data.caption}</Text>
                </Wrapper>
            </Content>
        </Container>
    )
}

export default Card;

const Container = styled.View`
    background: white;
    flex: 1;
    height: 28%;
    border-radius: 10px;
    margin: 20px 0px 0px 20px;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.15);
`

const Cover = styled.View`
width: 250px;
height: 200px;
border-top-left-radius: 14px;
border-top-right-radius: 14px;
overflow: hidden;
`

const Image = styled.Image`
width: 100%;
height: 90%;
position: absolute;
top: 0;
left: 0;
`

const Title = styled.Text`
color: white;
font-size: 24px;
font-weight: bold;
margin: 10px 0px 0px 10px;
width: 200px ;
`

const Content = styled.View`
padding-left: 20px;
flex-direction: row;
align-items: center;
height: 25%;
`

const Logo = styled.Image`
    width: 33px;
    height: 33px;
`

const Text = styled.Text`
    color: #b8bece;
    font-weight: bold;
    font-size: 15px;
    text-transform: uppercase;
`

const Caption = styled.Text`
    color: grey;
    font-size: 20px; 
    font-weight: 600;
`

const Wrapper = styled.View`
margin-left: 10px
`
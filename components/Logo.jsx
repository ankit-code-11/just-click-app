import React from 'react';
import styled from 'styled-components';

const Logo = (props) => {
    return (
        <Container style={{
            elevation: 8,
            shadowOpacity: 0.75,
            shadowRadius: 5,
            shadowColor: 'black',
            shadowOffset: { height: 10, width: 10 },
          }}>dfs
            <Image source={{uri: props.image}} resize="contain" />
            <Text>{props.title}</Text>
        </Container>
    )
}

export default Logo;

const Container = styled.View`
height: 60px;
padding: 12px 16px 12px;
border-radius: 10px;
margin: 0 8px;
flex-direction: row;
background-color: white;
`

const Image = styled.Image`
width: 36px;
height: 36px;
`;
    
const Text = styled.Text`
    font-weight: 600;
    font-size: 17px;    
    margin-left: 10px;
    margin-top: 4px;
`
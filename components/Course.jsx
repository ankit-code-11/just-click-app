import React from 'react';
import styled from 'styled-components';

const Course = ({data}) => {
    return (
        <Container>
            <Cover>
                <Image source={{uri: data.image}} />
                <Title>
                    {data.title}
                </Title>
            </Cover>
            <Content>
                <Avatar source={{uri: data.avatar}} />
                <Wrapper>
                    <Author>
                        {data.author}
                    </Author>
                    <Caption>
                        {data.caption}
                    </Caption>
                </Wrapper>
            </Content>
        </Container>
    )
};

export default Course;

const Container = styled.View`
    background-color: white;
    height: 200px;
    width: 250px;
    margin: 0px;
    border-radius: 10px;
    margin: 0px 0px 30px 30px;

`;

const Cover = styled.View`
width: 100%;
height: 100%;
overflow: hidden;
border-radius:20px;
`

const Image = styled.Image`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 80%;
`

const Title = styled.Text`
    color: white;
    margin: 10px 0px 0px 10px;
    font-size: 20px;
    font-weight: bold;

`

const Content = styled.View`
    flex-direction: row;
`

const Avatar = styled.Image`
width: 33px;
height: 33px;
border-radius: 16px;
`
const Wrapper = styled.View``;
const Author = styled.Text``
const Caption = styled.Text``
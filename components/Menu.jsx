import React,{ useState, useEffect } from 'react';
import styled from 'styled-components'
import { Animated
 } from 'react-native';

 const Menu = () => {

    const [top, setTop] = useState(new Animated.Value(900));

    useEffect(() => {
        Animated.spring(top, {
            topValue: 0
        }).start()
    }, [])

    return (
        <AnimateContainer>
            <Cover>

            </Cover>
        </AnimateContainer>
    )
 }

 export default Menu;


const Container = styled.View`
    position: absolute;
    top: 0;
    z-index: 100;
    background-color: white;
    height: 100%;
    width: 100%;
`

const AnimateContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
height: 142px;
background-color: black;
`
import styled from 'styled-components'
import { SIZES } from '../../../constants/sizes'
import { ANIMATIONS } from '../../../constants/animations'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: #393d4e;
    border: 2px solid teal;
    border-radius: ${SIZES.border_radius};
    transition: ${ANIMATIONS.transition};
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        transition: ${ANIMATIONS.transition};
    }
`

export const Icon = styled.img`
    width: 100%;
    height: 100%;
`

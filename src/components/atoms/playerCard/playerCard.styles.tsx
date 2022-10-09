import styled from 'styled-components'
import { ANIMATIONS } from '../../../constants/animations'

export const Container = styled.div`
    width: 200px;
    height: 350px;
    border: 2px solid teal;
    border-radius: 4px;
    cursor: pointer;
    transition: ${ANIMATIONS.transition};

    &:hover {
        transform: scale(1.01);
        transition: ${ANIMATIONS.transition};
    }
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
`

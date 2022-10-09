import styled from 'styled-components'
import { SIZES } from '../../../constants/sizes'
import { ANIMATIONS } from '../../../constants/animations'

export const Container = styled.div`
    width: 12px;
    height: 300px;
    border: 2px solid black;
    border-radius: ${SIZES.border_radius};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
`

export const Stat = styled.div<{ color: string; height: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 7px;
    color: yellow;
    background-color: ${({ color }) => color};
    width: 8px;
    height: ${({ height }) => height}%;
    border-radius: 2px;
    transition: ${ANIMATIONS.transition};
`

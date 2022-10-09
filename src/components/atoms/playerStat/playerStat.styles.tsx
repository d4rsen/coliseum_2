import styled from 'styled-components'
import { SIZES } from '../../../constants/sizes'
import { ANIMATIONS } from '../../../constants/animations'
import { COLORS } from '../../../constants/colors'

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    transition: ${ANIMATIONS.transition};
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        transition: ${ANIMATIONS.transition};
    }
`
export const Icon = styled.img`
    width: 23px;
    height: 23px;
`

export const Text = styled.div`
    font-size: ${SIZES.fs_s};
    color: ${COLORS.color_blue};
`

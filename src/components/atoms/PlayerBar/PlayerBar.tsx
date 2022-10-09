import React, { FC } from 'react'
import * as S from './PlayerBar.styles'

interface PlayerBarProps {
    color: string
    height: number
}

const PlayerBar: FC<PlayerBarProps> = ({ color, height }) => {
    return (
        <S.Container>
            <S.Stat color={color} height={height} />
        </S.Container>
    )
}

export default PlayerBar

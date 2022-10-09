import React, { FC } from 'react'
import * as S from './playerStat.styles'

interface PlayerStatProps {
    imageSrc?: string
    statValue: number
}

const PlayerStat: FC<PlayerStatProps> = ({
    imageSrc = '/assets/stats/red.svg',
    statValue,
}) => {
    return (
        <S.Container>
            <S.Icon src={imageSrc} />
            <S.Text>{statValue}</S.Text>
        </S.Container>
    )
}

export default PlayerStat

import React, { FC } from 'react'
import * as S from './playerCard.styles'

interface PlayerCardProps {
    imageSrc?: string
}

const PlayerCard: FC<PlayerCardProps> = ({
    imageSrc = 'https://i.pinimg.com/736x/46/8f/3d/468f3d1c7c52c1c5e7f5e279d6955b08.jpg',
}) => {
    return (
        <S.Container>
            <S.Image src={imageSrc} />
        </S.Container>
    )
}

export default PlayerCard

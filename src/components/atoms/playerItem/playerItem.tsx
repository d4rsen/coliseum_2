import React, { FC } from 'react'
import * as S from './playerItem.styles'

interface PlayerItemProps {
    imageSrc?: string
}

const PlayerItem: FC<PlayerItemProps> = ({
    imageSrc = 'http://d2db.ru/up/database/img/assault.png',
}) => {
    return (
        <S.Container>
            <S.Icon src={imageSrc} />
        </S.Container>
    )
}

export default PlayerItem

import React, { FC } from 'react'
import PlayerItem from '../../components/atoms/playerItem/playerItem'
import PlayerCard from '../../components/atoms/playerCard/playerCard'
import PlayerBar from '../../components/atoms/PlayerBar/PlayerBar'
import PlayerStat from '../../components/atoms/playerStat/playerStat'

const MainPage: FC = () => {
    return (
        <div>
            <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                <div
                    style={{ display: 'flex', gap: 5, flexDirection: 'column' }}
                >
                    <PlayerItem
                        imageSrc={
                            'https://d2db.ru/up/database/img/black-king-bar.png'
                        }
                    />
                    <PlayerItem
                        imageSrc={'https://d2db.ru/up/database/img/skadi.png'}
                    />
                    <PlayerItem
                        imageSrc={'https://d2db.ru/up/database/img/satanic.png'}
                    />
                    <PlayerItem
                        imageSrc={'https://d2db.ru/up/database/img/yasha.png'}
                    />
                    <PlayerItem
                        imageSrc={
                            'https://d2db.ru/up/database/img/hyperstone.png'
                        }
                    />
                    <PlayerItem
                        imageSrc={
                            'https://d2db.ru/up/database/img/radiance.png'
                        }
                    />
                </div>
                <PlayerCard />
                <div style={{ display: 'flex', gap: 5 }}>
                    <PlayerBar height={90} color={'red'} />
                    <PlayerBar height={60} color={'green'} />
                    <PlayerBar height={75} color={'blue'} />
                </div>
                <div
                    style={{ display: 'flex', gap: 5, flexDirection: 'column' }}
                >
                    <PlayerItem
                        imageSrc={'http://d2db.ru/up/database/img/rapier.png'}
                    />
                    <PlayerStat
                        statValue={100}
                        imageSrc={'/assets/stats/red.svg'}
                    />
                    <PlayerStat
                        statValue={50}
                        imageSrc={'/assets/stats/green.svg'}
                    />
                    <PlayerStat
                        statValue={300}
                        imageSrc={'/assets/stats/blue.svg'}
                    />
                    <PlayerStat
                        statValue={1337}
                        imageSrc={'/assets/stats/shield.svg'}
                    />
                    <PlayerStat
                        statValue={777}
                        imageSrc={'/assets/stats/attack.svg'}
                    />
                </div>
            </div>
        </div>
    )
}

export default MainPage

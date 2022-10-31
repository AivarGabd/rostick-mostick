import type { NextPage } from 'next'
import fs from 'fs';
import { Loading, Text } from '@nextui-org/react';
import Application from './application'
import { FaFire, FaRoad } from 'react-icons/fa'
import { GiOilDrum, GiGears, GiCommercialAirplane } from 'react-icons/gi'
import { RiGasStationFill } from 'react-icons/ri'
import { BiNetworkChart } from 'react-icons/bi'
import CustomCard from '../components/home-page/CustomCard';

const Item: NextPage = ({ data }: any) => {



    if (data) {

        return (
            <div style={{
                paddingBottom: '100px'
            }}>
                <Text h2>
                    {data.mainHeader}
                </Text>
                {data.blocks.map((item: any) => <>
                    <div style={{
                        marginTop: "40px"
                    }}>
                        <Text h3>{item.header}</Text>
                        <article style={{
                            width: '700px'
                        }}>
                            {item.text}
                        </article>
                    </div>
                </>)}

                <div style={{
                    display: 'flex'
                }}>
                    <Application />
                </div>
            </div>
        )
    }

    return (
        <div style={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Loading size='xl' />
        </div>
    )
}


export async function getServerSideProps(context: any) {
    const id = context.query.id
    const data = JSON.parse(fs.readFileSync(`public/data/${id}.json`).toString())


    return {
        props: {
            data: data
        }
    }
}

export default Item


import type { NextPage } from 'next'
import { FaFire, FaRoad } from 'react-icons/fa'
import { GiOilDrum, GiGears, GiCommercialAirplane } from 'react-icons/gi'
import { RiGasStationFill } from 'react-icons/ri'
import { BiNetworkChart } from 'react-icons/bi'
import { Grid } from '@nextui-org/react'
import CustomCard from '../components/home-page/CustomCard'

const Home: NextPage = () => {

  const stats = [
    {
      valueColor:'whitesmoke',
      value: 'ДТ',
      icon: <FaFire size={45} />,
      description: 'Оптовые поставки дизельного топлива от ведущих российских производителей',
      src: 'https://www.reuters.com/resizer/L1QAnv6TNgn7RPj7EorEeOBQ5I0=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UTHXS4WRXZIS3HP43YDQQX5N7I.jpg',
      list: ['ДТ Летнее', 'ДТ Зимнее', 'ДТ Арктическое']
    },
    {
      valueColor:'whitesmoke',
      value: 'СУГ',
      icon: <FaFire size={45} />,
      description: 'Сжижженый Углеводородный газ',
      src: 'https://www.sulzer.com/-/media/images/applications/oil-gas-chemicals/midstream/pipeline/liquefied_petroleum_gas_pipeline_309578054.jpg',
      list: ['Пропан', 'Пропан-Бутан', 'Бутан']
    },
    {
      valueColor:'black',
      value: 'Автобензин',
      icon: <RiGasStationFill size={45} />,
      description: 'Оптовые поставки от ведущих производителей',
      src: 'https://post.healthline.com/wp-content/uploads/2021/07/Hand-refilling-the-car-with-fuel-732x549-thumbnail.jpg',
      list: ['АИ-92', 'АИ-95', 'АИ-98', 'АИ-100']
    },
    {
      valueColor:'whitesmoke',
      value: 'Авиационное топливо',
      icon: <GiCommercialAirplane size={45} />,
      description: 'Оптовые поставки авиационного топлива ТС и РТ от крупнейших НПЗ.',
      src: 'https://images.livemint.com/img/2022/09/22/1600x900/USA-BIOFUELS-AIRLINES-0_1663592480042_1663592480042_1663836690047_1663836690047.JPG',
      list: ['TC-1', 'PT', 'AVGAS']
    },
    {
      valueColor:'whitesmoke',
      value: 'Масла',
      icon: <GiGears size={45} />,
      description: 'Смазочные масла всех видов - в цистернах и бочках',
      src: 'https://www.hps-pigging.com/wp-content/uploads/2021/11/lubricant-oil-manufacturers-are-pigging-1024x683.jpg',
      list: []
    },
    {
      valueColor:'whitesmoke',
      value: 'Полимеры',
      icon: <BiNetworkChart size={45} />,
      description: 'Вспенивающийся полистирол, ПВД',
      src: 'http://rupec.ru/upload/iblock/950/9500a19aaa6caee05f198a3d6b2c103c.jpg',
      list: ['ПСВ', 'ПВД']
    },
    {
      valueColor:'whitesmoke',
      value: 'Битум',
      icon: <FaRoad size={45} />,
      description: 'Строительный и дорожный с доставкой',
      src: 'https://oilproducts.eni.com/uploads/media/default/0001/01/a4938ac5ed1b9f54d61fe923347e1414b2f63c61.jpeg',
      list: ['Битум дорожный', 'Битум строительный']
    },
    {
      valueColor:'whitesmoke',
      value: 'Мазут',
      icon: <GiOilDrum size={45} />,
      description: 'Топочный мазут напрямую с заводов производителей',
      src: 'https://argaamplus.s3.amazonaws.com/c57314ba-2045-4e0e-8be1-bb9ef3001803.jpg',
      list: ['Мазут М100']
    }
  ]

  return (
    <div>
      <Grid.Container gap={2} justify="center">
        {stats.map((x,index) => (
          <Grid key={index}>
            <CustomCard data={x} />
          </Grid>
        ))}
      </Grid.Container>
    </div>
  )
}

export default Home

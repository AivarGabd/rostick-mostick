import type { NextPage } from 'next'
import { FaFire, FaRoad } from 'react-icons/fa'
import { GiOilDrum, GiGears, GiCommercialAirplane } from 'react-icons/gi'
import { RiGasStationFill } from 'react-icons/ri'
import { BiNetworkChart } from 'react-icons/bi'
import { Card, Col, Grid, Text, Image, Spacer, Button, Container } from '@nextui-org/react'
import CustomCard from '../components/home-page/CustomCard'
import Twemoji from '../components/home-page/Twemoji'
import { useMediaQuery } from '../public/useMediaQuery'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Home: NextPage = () => {

  const router = useRouter()

  const stats = [
    {
      valueColor: 'whitesmoke',
      value: 'ДТ',
      icon: <FaFire size={45} />,
      description: 'Оптовые поставки дизельного топлива от ведущих российских производителей',
      src: 'https://www.reuters.com/resizer/L1QAnv6TNgn7RPj7EorEeOBQ5I0=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UTHXS4WRXZIS3HP43YDQQX5N7I.jpg',
      list: ['ДТ Летнее', 'ДТ Зимнее', 'ДТ Арктическое']
    },
    {
      valueColor: 'whitesmoke',
      value: 'СУГ',
      icon: <FaFire size={45} />,
      description: 'Сжижженый Углеводородный газ',
      src: 'https://www.sulzer.com/-/media/images/applications/oil-gas-chemicals/midstream/pipeline/liquefied_petroleum_gas_pipeline_309578054.jpg',
      list: ['Пропан', 'Пропан-Бутан', 'Бутан']
    },
    {
      valueColor: 'whitesmoke',
      value: 'Автобензин',
      icon: <RiGasStationFill size={45} />,
      description: 'Оптовые поставки от ведущих производителей',
      src: 'https://post.healthline.com/wp-content/uploads/2021/07/Hand-refilling-the-car-with-fuel-732x549-thumbnail.jpg',
      list: ['АИ-92', 'АИ-95', 'АИ-98', 'АИ-100']
    },
    {
      valueColor: 'whitesmoke',
      value: 'Авиационное топливо',
      icon: <GiCommercialAirplane size={45} />,
      description: 'Оптовые поставки авиационного топлива ТС и РТ от крупнейших НПЗ.',
      src: 'https://images.livemint.com/img/2022/09/22/1600x900/USA-BIOFUELS-AIRLINES-0_1663592480042_1663592480042_1663836690047_1663836690047.JPG',
      list: ['TC-1', 'PT', 'AVGAS']
    },
    {
      valueColor: 'whitesmoke',
      value: 'Масла',
      icon: <GiGears size={45} />,
      description: 'Смазочные масла всех видов - в цистернах и бочках',
      src: 'https://www.hps-pigging.com/wp-content/uploads/2021/11/lubricant-oil-manufacturers-are-pigging-1024x683.jpg',
      list: []
    },
    {
      valueColor: 'whitesmoke',
      value: 'Полимеры',
      icon: <BiNetworkChart size={45} />,
      description: 'Вспенивающийся полистирол, ПВД',
      src: 'http://rupec.ru/upload/iblock/950/9500a19aaa6caee05f198a3d6b2c103c.jpg',
      list: ['ПСВ', 'ПВД']
    },
    {
      valueColor: 'whitesmoke',
      value: 'Битум',
      icon: <FaRoad size={45} />,
      description: 'Строительный и дорожный с доставкой',
      src: 'https://oilproducts.eni.com/uploads/media/default/0001/01/a4938ac5ed1b9f54d61fe923347e1414b2f63c61.jpeg',
      list: ['Битум дорожный', 'Битум строительный']
    },
    {
      valueColor: 'whitesmoke',
      value: 'Мазут',
      icon: <GiOilDrum size={45} />,
      description: 'Топочный мазут напрямую с заводов производителей',
      src: 'https://argaamplus.s3.amazonaws.com/c57314ba-2045-4e0e-8be1-bb9ef3001803.jpg',
      list: ['Мазут М100']
    }
  ]

  const countries = [
    '1f1f7-1f1fa',
    '1f1e6-1f1ff',
    '1f1e6-1f1f2',
    '1f1e7-1f1fe',
    '1f1f0-1f1ff',
    '1f1f0-1f1ec',
    '1f1f9-1f1ef',
    '1f1fa-1f1ff'
  ]

  const partners = [
    'https://solid-sibir.ru/img/home/partners/partners-1.jpg?_v=1634118736682',
    'https://solid-sibir.ru/img/home/partners/partners-2.jpg?_v=1634118736682',
    'https://solid-sibir.ru/img/home/partners/partners-3.jpg?_v=1634118736682',
    'https://solid-sibir.ru/img/home/partners/partners-4.jpg?_v=1634118736682',
    'https://solid-sibir.ru/img/home/partners/partners-5.jpg?_v=1634118736682',
    'https://solid-sibir.ru/img/home/partners/partners-6.jpg?_v=1634118736682',
    'https://solid-sibir.ru/img/home/partners/partners-7.jpg?_v=1634118736682',
    'https://solid-sibir.ru/img/home/partners/partners-8.jpg?_v=1634118736682',
    'https://solid-sibir.ru/img/home/partners/partners-9.jpg?_v=1634118736682',
    'https://solid-sibir.ru/img/home/partners/partners-10.jpg?_v=1634118736682',
    'https://solid-sibir.ru/img/home/partners/partners-11.jpg?_v=1634118736682',
    'https://solid-sibir.ru/img/home/partners/partners-12.jpg?_v=1634118736682',
    'https://solid-sibir.ru/img/home/partners/partners-13.jpg?_v=1634118736682',
    'https://solid-sibir.ru/img/home/partners/partners-14.jpg?_v=1634118736682',
    'https://solid-sibir.ru/img/home/partners/partners-15.jpg?_v=1634118736682',
    'https://solid-sibir.ru/img/home/partners/partners-16.jpg?_v=1634118736682',
    'https://solid-sibir.ru/img/home/partners/partners-17.jpg?_v=1634118736682',
    'https://solid-sibir.ru/img/home/partners/partners-18.jpg?_v=1634118736682',
    'https://solid-sibir.ru/img/home/partners/partners-19.jpg?_v=1634118736682',
    'https://solid-sibir.ru/img/home/partners/partners-20.jpg?_v=1634118736682',
    'https://solid-sibir.ru/img/home/partners/partners-21.jpg?_v=1634118736682',
    'https://solid-sibir.ru/img/home/partners/partners-22.jpg?_v=1634118736682',
    'https://solid-sibir.ru/img/home/partners/partners-23.jpg?_v=1634118736682'
  ]

  const handleLinkClick = () => {
    router.push('/application')
  }

  const isMd = useMediaQuery(960);

  return (
    <Container css={{ pb: '50px', mt: '20px' }}>

      <Link href="/about">
        <Card
          isPressable
          isHoverable
          css={{
            w: isMd ? '400px' : 'fit-content',
            margin: 'auto'
          }}>
          <Card.Body>
            <Grid.Container>
              <Grid css={{
                maxWidth: '400px'
              }}>
                <Text h3>Наша компания:</Text>
                <article>
                  <p>
                    «Компания»(название придумаем новое)Готова предложить полный перечень услуг которые помогут приобретать нефтепродукты на наиболее выгодных условиях.
                    Наша компания избавит вас от всех проблемы которые могут возникнуть при заключение сделок а так же расходов при самостоятельной регистрации на бирже.
                  </p>
                  <Spacer x={2} />
                  <p>Тесно работая с добывающими и нефтеперерабатывающими компаниями мы сможем предложит вам лучшие цены.</p>
                </article>
              </Grid>
              <Spacer x={2} />
              <Grid>
                <Image
                  src={`http://rupec.ru/upload/iblock/950/9500a19aaa6caee05f198a3d6b2c103c.jpg`}
                  height={'auto'}
                  width={isMd ? '100%' : 500}
                  showSkeleton
                  css={{
                    borderRadius: '15px'
                  }}
                />
              </Grid>
            </Grid.Container>
          </Card.Body>
          <Card.Footer>

          </Card.Footer>
        </Card>
      </Link>


      <Card css={{
        w: isMd ? '400px' : 'fit-content',
        margin: '20px auto'
      }}>
        <Card.Body css={{
          pb: '0px'
        }}>
          <Grid.Container>
            <Grid css={{
              maxWidth: '400px'
            }}>
              <Grid.Container css={{
                mt: '0px'
              }}>
                {countries.map((x, index) => (
                  <Grid key={index} css={{ m: '5px' }}>
                    <Image
                      src={`https://twitter.github.io/twemoji/v/13.1.0/svg/${x}.svg`}
                      height={80}
                      width={'auto'}
                      showSkeleton
                    />
                  </Grid>
                ))}
              </Grid.Container>
            </Grid>
            <Spacer x={2} />
            <Grid css={{
              maxW: '400px'
            }}>
              <article>
                <p>Наша компания занимается поставками нефтепродуктов по всей России и странам снг (ЕАЭС)</p>
                <Spacer x={1} />
                <p>Мы обеспечиваем самые разные предприятия и организации энергоресурсами высокого качества, характеристики которых полностью соответствуют требованиям ГОСТ.</p>
              </article>
            </Grid>
          </Grid.Container>


        </Card.Body>
        <Card.Footer css={{
          flexDirection: 'row-reverse'
        }}>
          <div>
            <Button auto flat onClick={handleLinkClick}>
              Оставить заявку
            </Button>
          </div>
        </Card.Footer>
      </Card>
      <Card>
        <Grid.Container>
          {partners.map((x, index) => (
            <Grid key={index}>
              <Image
                src={x}
                height={100}
                width={'auto'}
                showSkeleton
              />
            </Grid>
          ))}
        </Grid.Container>
      </Card>

      <Grid.Container gap={2} justify="center">
        {stats.map((x, index) => (
          <Grid key={index}>
            <CustomCard data={x} />
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  )
}

export default Home

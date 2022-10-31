import { Badge, Button, Card, Col, Grid, Row, Text } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const CustomCard = ({ data }: any) => (
  <Card isPressable isHoverable css={{
    mw: '300px',

  }}>
    <Card.Header css={{
      position: "absolute",
      zIndex: 1,
      top: 0,
      mt: '-7px',
      bgBlur: "#0f111466",
      pb: '-10px'
    }}>


      <Text h3 color='whitesmoke' css={{
        marginBlockEnd: "-5px"
      }}>
        {data.value}
      </Text>

    </Card.Header>

    <div style={{
      //filter: 'blur(1px)'
    }}>
      <Card.Image
        showSkeleton
        src={data.src}
        objectFit="cover"
        width="100%"
        height={400}
        alt={data.description}
      />
    </div>
    <Card.Footer
      isBlurred
      css={{
        bg:'whitesmoke',
        bottom: 0,
        zIndex: 1,
        height:'120px'
      }}
    >
      <Col>
        <Text size={13} b >
          <article>{data.description}</article>
        </Text>
        <Grid.Container css={{ mt: '5px' }}>
          {data.list.map((x: String, index: any) => (
            <Grid css={{ p: '0px' }} key={index}><Badge>{x}</Badge></Grid>
          ))}
        </Grid.Container>
      </Col>


    </Card.Footer>
  </Card>
);

export default CustomCard
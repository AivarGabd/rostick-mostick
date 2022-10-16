import { Badge, Button, Card, Col, Grid, Row, Text } from "@nextui-org/react";

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
        height={500}
        alt={data.description}
      />
    </div>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Col>
        <Text size={13} b color="whitesmoke">
          {data.description}
        </Text>
        <Grid.Container css={{ mt: '5px' }}>
          {data.list.map((x: String, index: any) => (
            <Grid css={{ p: '5px' }} key={index}><Badge>{x}</Badge></Grid>
          ))}
        </Grid.Container>
      </Col>


    </Card.Footer>
  </Card>
);

export default CustomCard
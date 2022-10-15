import { Badge, Button, Card, Col, Grid, Row, Text } from "@nextui-org/react";

const CustomCard = ({ data }: any) => (
  <Card isPressable isHoverable css={{
    mw: '300px',
    minHeight: "450px"
  }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={13} b color="whitesmoke">
          {data.description}
        </Text>
        <Text h2 color="white">
          {data.value}
        </Text>
      </Col>
    </Card.Header>

    <Card.Image

      src={data.src}
      objectFit="cover"
      width="100%"
      height={450}
      alt={data.description}
    />
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
      <Grid.Container>
        {data.list.map((x: String) => (
          <Grid css={{ p: '5px' }}><Badge color='warning' >{x}</Badge></Grid>
        ))}
      </Grid.Container>

    </Card.Footer>
  </Card>
);

export default CustomCard
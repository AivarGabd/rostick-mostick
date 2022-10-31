import { Container, Grid, Spacer, Text } from "@nextui-org/react"

const Footer = () => (
    <Container css={{

        width: "100%",
        padding: "10px"
    }}>
        <Grid.Container>
            <Grid>
                <div>
                    <div>
                        <Text h4>Контакты</Text>
                    </div>
                    <div>
                        +7 (996) 100 78 63<br />
                        +7 (347) 472-36-36
                    </div>
                    <div>
                        igor.company.neft@gmail.ru
                    </div>
                </div>
            </Grid>
            <Spacer y={1} x={2} />
            <Grid>
                <div>
                    <Text h4>Адрес</Text>
                </div>
                <div>
                    Р. Б., Благоварский р-он, с. Пришиб, ул. Ленина 42/1
                </div>
            </Grid>
        </Grid.Container>
        <Spacer y={1} />
        <div>
            © ООО Игорь и Компания
        </div>
    </Container>
)

export default Footer
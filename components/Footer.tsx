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
                        89961007863
                    </div>
                    <div>
                        igor.company.neft@gmail.ru
                    </div>
                </div>
            </Grid>
            <Spacer y={1} x={2}/>
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
                    © ООО Игорь и Компания(потом новое)
                </div>
    </Container>
)

export default Footer
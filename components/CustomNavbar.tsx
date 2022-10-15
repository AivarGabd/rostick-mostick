import { Button, Dropdown, Link, Navbar, Text } from "@nextui-org/react";

export default function CustomNavbar() {
    const collapseItems = [
        "Главная",
        "Услуги",
        "Контакты"
    ];

    return (
        <Navbar variant="floating">
            <Navbar.Toggle showIn="xs" />
            <Navbar.Brand
                css={{
                    "@xs": {
                        w: "12%",
                    },
                }}
            >

                <Text b color="inherit" hideIn="xs">
                    Игорь & Компания
                </Text>
            </Navbar.Brand>
            <Navbar.Content
                enableCursorHighlight
                activeColor="secondary"
                hideIn="xs"
                variant="highlight-rounded"
            >
          
                {collapseItems.map((x,index)=>(
                    <Navbar.Link href="#" key={index}>{x}</Navbar.Link>
                ))}
            </Navbar.Content>
            <Navbar.Content
                css={{
                    "@xs": {
                        w: "12%",
                        jc: "flex-end",
                    },
                }}
            >
                <Button auto>
                    Оставить заявку
                </Button>
            </Navbar.Content>
            <Navbar.Collapse>
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem
                        key={item}
                    >
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href="#"
                        >
                            {item}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
    )
}
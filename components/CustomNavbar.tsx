import { Button, Dropdown, Link, Navbar, Text } from "@nextui-org/react";

export default function CustomNavbar() {
    const collapseItems = [
        {
            name: 'Главная',
            href: '/'
        },
        {
            name: 'Услуги',
            href: '/services'
        },
        {
            name: 'О компании',
            href: '/about'
        },
        {
            name: 'Контакты',
            href: '/contacts'
        }
    ];

    return (
        <Navbar variant="floating" css={{
            position: 'fixed'
        }}>
            <Navbar.Toggle showIn="xs" />
            <Navbar.Brand
                css={{
                    "@xs": {
                        w: "12%",
                    },
                }}
            >

                <Text b color="inherit">
                    Игорь&Компания
                </Text>
            </Navbar.Brand>
            <Navbar.Content
                enableCursorHighlight

                hideIn="xs"
                variant="highlight-rounded"
            >
                {collapseItems.map((x, index) => (
                    <Navbar.Link href={x.href} key={index}>{x.name}</Navbar.Link>
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
                <Link href="/application">
                    <Button auto flat>
                        Оставить заявку
                    </Button>
                </Link>
            </Navbar.Content>
            <Navbar.Collapse>
                {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem
                        key={index}
                    >
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%",
                            }}
                            href={item.href}
                        >
                            {item.name}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
    )
}
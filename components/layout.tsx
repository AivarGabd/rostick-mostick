import { Container } from "@nextui-org/react";
import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";


export default function Layout({ children }: any) {



    return <>
        <CustomNavbar />
        <Container
            css={{
                mt: '100px'
            }}
            gap={0}
            lg>
            <div>
                {children}
            </div>
            <Footer />
        </Container>
    </>
}
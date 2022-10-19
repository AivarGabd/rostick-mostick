import { Container } from "@nextui-org/react";
import CustomNavbar from "./CustomNavbar";


export default function Layout({ children }: any) {


    
    return <>
       <CustomNavbar />
        <Container
        css={{
            mt:'100px'
        }}
            gap={0}
            lg>
                    
            {children}
        </Container>
    </>
}
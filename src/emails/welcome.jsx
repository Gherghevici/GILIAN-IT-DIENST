import { Head,Html,Heading, Button, Text,Preview, Body,Tailwind,Container } from "@react-email/components";
import * as React from "react";

export default function WelcomeEmail({textArea}) {
  return (
    <Html>
        <Head/>
        <Preview>Thank You for reaching Giliant-IT</Preview>
        
        <Tailwind>
            <Body>
                
                <Container className="mx-auto border border-solid border-2 border-black rounded my-auto">
                    <Heading className="text-xl">Thank You for reaching Gilian-IT</Heading>
                    <Text>{textArea}</Text>
                    
                </Container>
                
            </Body>
        </Tailwind>
        
        
    </Html>
  );
}
import { Head,Html,Heading, Hr,Row, Text,Preview, Body,Tailwind,Container, Column, Button } from "@react-email/components";
import Card from "@/components/Card";
import { MdLocalPhone } from "react-icons/md";
import { FaCloud } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa6";
import * as React from "react";

export default function WelcomeEmail({textArea,name}) {
  return (
    <Html>  
      <Tailwind>
          <Preview>Thank You for reaching Giliant-IT</Preview>
          <Head className="px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60 pt-10"/>
            <Body>
                
                <Container className="px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60 pt-10  ">
                    <Heading as="h1" className="text-2xl sm:text-3xl md:text-4xl text-lime-900 text-center font-extrabold">Thank You for Reaching Out to Gilian-IT</Heading>
                    <Text className="text-lg">Hi {name},</Text>
                    <Text className="text-base">Thank you for contacting us at Gilian-IT! We’ve received your message and are excited to connect with you.</Text>
                    <Text className="text-base">Our team is reviewing your inquiry and will get back to you as soon as possible, typically within 1-2 business days. In the meantime, if you have any additional details to share or need immediate assistance, please feel free to reply to this email.</Text>
                </Container>
                <Container className="px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60">
                  <Heading as="h2" className="text-xl "> Here’s a quick overview of what we do at Gilian-IT:</Heading>
                  <Container>
                    <Container className="flex flex-col justify-center items-center md:justify-between md:flex-row">
                      lalalalala
                    </Container>
                  </Container>
                  <Text>Thank you for choosing to connect with us. We look forward to assisting you!</Text>
                  <Hr/>
                </Container>
                <Container className="px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-60">
                  <Text className="m-0">Warm regards,</Text>
                  <Text className="m-0">Gilian-IT</Text>
                  <Text className="m-0">Phone: +4012312349</Text>
                  <section className="flex gap-2">
                    <Button>LInk</Button>                  
                    <Button>Location</Button>                  
                  </section>
                </Container>
            </Body>
      </Tailwind>
        
        
    </Html>
  );
}
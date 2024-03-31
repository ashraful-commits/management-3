import * as React from "react"
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"
import Logo from "public/logo.png"

interface RaycastMagicLinkEmailProps {
  rate: string
  salesPerson: string
  companyName: string
  subject: string
}

const baseUrl = "https://management-clients.vercel.app"

export const RaycastMagicLinkEmail = ({
  salesPerson: salesPerson,
  companyName: companyName,
  rate: rate,
  subject: subject,
}: RaycastMagicLinkEmailProps) => (
  <Html>
    <Head />
    <Preview>Unleash Your Sales Potential with Client Management.</Preview>
    <Body style={main}>
      <Container style={container-fluid}>
        <Img
          src={`${baseUrl}/logo.png`}
          width={120}
          height={60}
          alt="Client Management"
        />
        <Heading style={heading}>{subject}</Heading>
        <Section style={body}>
          <Text style={paragraph}>
            <b>Sales person: </b> {salesPerson} <br />
            <b>Company Name:</b> {companyName} <br />
            <b>Commission rate: </b> {rate}
          </Text>
        </Section>
        <Text style={paragraph}>Client Mangement Team</Text>
        <Hr style={hr} />
        <Img
          src={`${baseUrl}/logo.png`}
          width={80}
          height={42}
          alt="Client Management"
          style={{
            WebkitFilter: "grayscale(100%)",
            filter: "grayscale(100%)",
            margin: "20px 0",
          }}
        />
        <Text style={footer}>Client Management</Text>
        <Text style={footer}>2010-2024 All Rights Reserved</Text>
      </Container>
    </Body>
  </Html>
)

export default RaycastMagicLinkEmail

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 25px 48px",
  backgroundImage: 'url("/assets/raycast-bg.png")',
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat, no-repeat",
}

const heading = {
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "48px",
}

const body = {
  margin: "24px 0",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
}

const link = {
  color: "#FF6363",
}

const hr = {
  borderColor: "#dddddd",
  marginTop: "48px",
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginLeft: "4px",
}
